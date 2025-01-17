
import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Row, Col } from 'antd';
import axios from 'axios';
import Robo from "../assets/Images/homePage.png";

const Form1 = ({ setMatchedFiles }) => {
  const [userImagesPath, setUserImagesPath] = useState('');
  const [googleDriveLink, setGoogleDriveLink] = useState('');
  const [outputImagesPath, setOutputImagesPath] = useState('');
  const [faceSimilarityThreshold, setFaceSimilarityThreshold] = useState(0.5);

  const handleSubmit = async (values) => {
    const data = {
      userImagesPath,
      googleDriveFolderId: getFolderIdFromLink(googleDriveLink),
      outputImagesPath,
      faceSimilarityThreshold: values.faceSimilarityThreshold,
    };

    console.log('Submitted data:', data);

    try {
      const response = await axios.post('http://localhost:5000/recognize', data);
      setMatchedFiles(response.data.matchedFiles);
    } catch (error) {
      console.error('Error recognizing faces:', error);
    }
  };

  const getFolderIdFromLink = (link) => {
    const regex = /drive\/folders\/([a-zA-Z0-9_-]+)/;
    const match = link.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      console.error('Invalid Google Drive link format:', link);
      return link;
    }
  };

  const handleFolderSelect = (e, setStateFunction) => {
    const selectedPath = e.target.files[0].webkitRelativePath;
    const pathParts = selectedPath.split('/');
    const folderPath = pathParts.slice(0, pathParts.length - 1).join('/');
    setStateFunction(folderPath);
  };

  return (
    <div className=" gradient-bg  h-screen w-full pt-16 mb-12">
    
      <Row className=" mb-4 bg-white to-40% m-auto rounded-3xl px-0 md:w-[80%] shadow-2xl">
      <Col span={24}>
      <h1 className='font-rubik font-bold text-5xl  text-center mt-8'>Face Recognition App</h1>
      </Col>
        <Col span={14}  className="p-8 mb-2">
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              faceSimilarityThreshold,
            }}
          >
            <Form.Item
              label="User Images Path"
              name="userImagesPath"
              rules={[{ required: true, message: 'Please input the user images path!' }]}
            >
              <div style={{ display: 'flex' }}>
                <Input
                  value={userImagesPath}
                  onChange={(e) => setUserImagesPath(e.target.value)}
                  style={{ flex: 1 }}
                />
                <Button
                  onClick={() => document.getElementById('inputFolder').click()}
                  style={{ marginLeft: 8 }}
                >
                  Browse
                </Button>
                <input
                  id="inputFolder"
                  type="file"
                  webkitdirectory="true"
                  directory="true"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFolderSelect(e, setUserImagesPath)}
                />
              </div>
            </Form.Item>

            <Form.Item
              label="Google Drive Link"
              name="googleDriveLink"
              rules={[{ required: true, message: 'Please input the Google Drive link!' }]}
            >
              <Input value={googleDriveLink} onChange={(e) => setGoogleDriveLink(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Output Images Path"
              name="outputImagesPath"
              rules={[{ required: true, message: 'Please input the output images path!' }]}
            >
              <div style={{ display: 'flex' }}>
                <Input
                  value={outputImagesPath}
                  onChange={(e) => setOutputImagesPath(e.target.value)}
                  style={{ flex: 1 }}
                />
                <Button
                  onClick={() => document.getElementById('outputFolder').click()}
                  style={{ marginLeft: 8 }}
                >
                  Browse
                </Button>
                <input
                  id="outputFolder"
                  type="file"
                  webkitdirectory="true"
                  directory="true"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFolderSelect(e, setOutputImagesPath)}
                />
              </div>
            </Form.Item>

            <Form.Item
              label="Face Similarity Threshold [ Strict result < 0.5 < Generalized result ]"
              name="faceSimilarityThreshold"
              rules={[{ required: true, message: 'Please input the face similarity threshold!' }]}
            >
              <InputNumber
                min={0}
                max={1}
                step={0.01}
                value={faceSimilarityThreshold}
                onChange={(value) => setFaceSimilarityThreshold(value)}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className='text-bold'>
                Recognize Faces
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={10} className="flex justify-center items-center mb-8">
          <img src={Robo} alt="Login png" className="object-cover w-[100%]" />
        </Col>
      </Row>
    </div>
  );
};

export default Form1;
