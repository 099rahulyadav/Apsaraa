from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
import face_recognition
from tqdm import tqdm
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Folder to store uploaded images
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Set the face_recognition_models directory
face_recognition_models_directory = os.path.join(os.path.dirname(face_recognition.__file__), "models")
os.environ["FACE_RECOGNITION_MODELS"] = face_recognition_models_directory

# Function to authenticate with Google Drive API
def authenticate_google_drive():
    gauth = GoogleAuth()
    gauth.LocalWebserverAuth()  # Authorization with GUI
    drive = GoogleDrive(gauth)
    return drive

# Function to list files in a Google Drive folder
def list_files_in_folder(folder_id, drive):
    file_list = drive.ListFile({'q': f"'{folder_id}' in parents and trashed=false"}).GetList()
    return file_list

# Function to perform face recognition
def perform_face_recognition(user_images_path, file_list, output_images_path, face_similarity_threshold=0.8):
    user_image_files = [file for file in os.listdir(user_images_path) if file.endswith('.jpg')]

    user_face_encodings = []
    for user_image_file in user_image_files:
        user_image = face_recognition.load_image_file(os.path.join(user_images_path, user_image_file))
        user_face_encoding = face_recognition.face_encodings(user_image)[0]  # Assuming only one face in each image
        user_face_encodings.append(user_face_encoding)

    progress_bar = tqdm(total=len(file_list), desc="Processing Images", unit="image")

    for serial_no, file in enumerate(file_list, start=1):
        file.GetContentFile(file['title'])

        image = face_recognition.load_image_file(file['title'])
        face_locations = face_recognition.face_locations(image)

        for face_location in face_locations:
            face_encoding = face_recognition.face_encodings(image, [face_location])[0]
            face_similarity = face_recognition.face_distance(user_face_encodings, face_encoding)

            if any(similarity <= face_similarity_threshold for similarity in face_similarity):
                os.rename(file['title'], os.path.join(output_images_path, file['title']))
                break

        progress_bar.update(1)

    progress_bar.close()

# Route to upload images
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        return jsonify({'message': 'File uploaded successfully'})

# Route to trigger face recognition
@app.route('/recognize', methods=['POST'])
def recognize_faces():
    request_data = request.json
    user_images_path = request_data.get('userImagesPath', '')  # Path to user images directory
    google_drive_folder_id = request_data.get('googleDriveFolderId', '')  # Google Drive folder ID
    output_images_path = request_data.get('outputImagesPath', '')  # Output directory for matched images
    face_similarity_threshold = float(request_data.get('faceSimilarityThreshold', 0.8))

    # Authenticate with Google Drive API
    drive = authenticate_google_drive()
    
    # List files in the Google Drive folder
    file_list = list_files_in_folder(google_drive_folder_id, drive)
    
    # Perform face recognition
    perform_face_recognition(user_images_path, file_list, output_images_path, face_similarity_threshold)
    
    return jsonify({'message': 'Face recognition completed'})

# Main function to run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
 