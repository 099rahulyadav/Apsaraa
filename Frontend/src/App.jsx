import React from 'react';
import 'antd/dist/reset.css'; 
import { HeroScrollDemo } from './components/HeroScrollDemo';
import { HeroHighlightDemo } from './components/HeroHighlightDemo';
import Cards from "./components/cardsComponent";
import Form1 from './components/Form1';
import About from "./components/about";
import Thankyou from "./components/Thankyou";
import Border from "./components/Border";

function App() {

  return (
    <>
      <HeroScrollDemo />
      <HeroHighlightDemo />
      <Cards />
      <Form1 />
      <About/>
      <Thankyou/>
      <Border/>
    </>
  );
}

export default App;
