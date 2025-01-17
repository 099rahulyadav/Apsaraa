import React from 'react';
import { Row, Col } from 'antd';

const cardData = [
  {
    id: 1,
    title: "Step 1",
    description: "Select the input ",
    subtitle: "image path",
    bgColor: "bg-purple-400",
    circleColor: "bg-purple-300"
  },
  {
    id: 2,
    title: "Step 2",
    description: "Input the Google",
    subtitle: " drive link",
    bgColor: "bg-blue-400",
    circleColor: "bg-blue-300"
  },
  {
    id: 3,
    title: "Step 3",
    description: "Select the folder",
    subtitle: "for output",
    bgColor: "bg-green-400",
    circleColor: "bg-green-300"
  },
  {
    id: 4,
    title: "Step 4",
    description: "Set the threshold",
    subtitle: "limit",
    bgColor: "bg-red-400",
    circleColor: "bg-red-300"
  },
];

function Card() {
  return (
    <div className='pb-24 pt-12 bg-black overflow-hidden'>
      <div className="text-5xl font-extrabold text-center mb-16">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-rubik">
          Hover over Cards !!
        </span>
      </div>
      <Row justify="center" gutter={[16, 16]}>
        {cardData.map((card) => (
          <Col key={card.id}>
            <div
              className={`relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold ${card.bgColor} font-rubik`}
            >
              <div className="z-10 absolute w-full h-full peer"></div>
              <div
                className={`absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full ${card.circleColor} transition-all duration-500`}
              ></div>
              <div
                className={`absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full ${card.circleColor} transition-all duration-500`}
              >
                {card.description} <br /> {card.subtitle}
              </div>
              <div className="w-full h-full items-center justify-center flex uppercase">
                {card.title}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Card;
