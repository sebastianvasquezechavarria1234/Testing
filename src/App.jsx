import { useState } from 'react';
import './App.css'
import { Header } from'./componentes/Header.jsx'
import { Hero } from'./componentes/Hero.jsx'
import { Slider } from'./componentes/Slider.jsx'






function App() {

  return (
    <>
    <Header/>

    <section className="sec__max__width">
      <Hero/>

      <Slider />
    </section>
    </>
  )
}



export default App