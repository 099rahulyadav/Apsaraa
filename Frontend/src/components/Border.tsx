import React from 'react';
import Typewriter from 'typewriter-effect';

function Border() {
    return (
        <div className="bg-black pb-4 m-0 text-white font-rubik flex items-center justify-center">
            <div className="flex items-center">
                <h1 className="mr-2">Made with ❤️ in India by  </h1>
                <Typewriter
                    options={{
                        strings: ['Raj Maurya', 'Kulsum Sheikh', 'Rahul Yadav', 'Pravesh Kumar'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    );
}

export default Border;
