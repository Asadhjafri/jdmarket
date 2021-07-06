import React from 'react'
import Navbar from "./components/Navbar"
import HeroSlide from './components/HeroSlide'
import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HeroSlide />
    </>
  );
}

export default App;
