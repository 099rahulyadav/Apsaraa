import React from 'react';
import { Row, Col } from 'antd';
import Raj from '../assets/Images/Raj Picture.jpg';
import Kulsum from '../assets/Images/Kulsum-01.jpg';
import Rahul from '../assets/Images/Rahul-01.png';
import Pravesh from '../assets/Images/Pravesh1-01.jpg';

const cardData = [
  {
    imgSrc: Rahul,
    title: 'Rahul Yadav',
    description: 'R&D and Developer ',
    price: '$21.00',
    // bgColor: 'red-100'
  },
  {
    imgSrc:  Raj,
    title: 'Raj Maurya',
    description: 'UI/UX, R&D and Developer ',
    price: '$35.00',
    //bgColor: 'bg-[#EA4335]'
  },
  {
    imgSrc: Kulsum,
    title: 'Kulsum Sheikh',
    description: 'UI/UX and Tester',
    price: '$45.00',
    //bgColor: 'bg-[#FBBC05]'
  },
  {
    imgSrc: Pravesh,
    title: 'Pravesh Kumar',
    description: 'R&D and Tester',
    price: '$25.00',
   // bgColor: 'bg-[#34A853]'
  },
];

function HomePage1() {
  return (
    <>
    <div className='bg-black px-16 py-16'>
    <div className="text-5xl font-extrabold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-rubik">
          Meet our Developers !!
        </span>
      </div>
    <Row gutter={[16, 16]}>
      {cardData.map((card, index) => (
        <Col xs={24} sm={12} md={12} lg={6} key={index}>
          <div
            className={`m-2 group px-4 py-12  rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#fff] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all`}
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-44 object-cover aspect-square text-[#fff] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
            />
            <p className="cardtxt font-semibold font-rubik text-white tracking-wider group-hover:text-gray-700 text-2xl">
              {card.title}
            </p>
            <p className="blueberry font-semibold text-white tracking-wider group-hover:text-gray-700 text-md">
              {card.description}
            </p>
          </div>
        </Col>
      ))}
    </Row>
    </div>
    </>
  );
}

export default HomePage1;
