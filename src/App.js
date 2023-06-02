import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Newslett from './components/Newslett';
import Cards from './components/Cards';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Feature />
      <Newslett />
      <Cards />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
