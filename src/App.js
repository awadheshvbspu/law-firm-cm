import React from 'react';
import './App.css';
import Banner from './component/Banner';
import Testimoial from './component/Testimoial';
import Skills from './component/Skills';
import Team from './component/Team';
import NewsLetter from './component/NewsLetter';
import Contact from './component/Contact';
import Footer from './component/Footer';
import BackToTop from './component/BackToTop';

function App() {
  return (
    <>
      <Banner/>
      <Testimoial/>
      <Skills/>
      <Team/>
      <NewsLetter/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  );
}

export default App;
