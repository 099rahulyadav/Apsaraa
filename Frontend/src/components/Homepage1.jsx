import React from 'react';
import { Row, Col } from 'antd';
import HomePage from '../assets/Images/homePage.png';


function HomePage1() {
    return(
    <>
<div className="bg-black p-0 m-0 min-h-screen flex items-center justify-center ">
        <Row className='w-full'>
          <Col span={14} className="flex flex-col items-start justify-center p-8 font-rubik">
            <h1 className='text-white font-extrabold text-7xl pt-30'>Tired of Searching ?</h1>
            <h2 className='text-white text-2xl font-semibold pl-2 pt-2'> Your pictures from large Google drives</h2>
          </Col>
          <Col span={10} className='flex justify-center items-center p-4'>
            <img src={HomePage} alt="HomePage" className="rounded-lg shadow-lg" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomePage1;
