import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Segments from './components/Segments';
import TrendingProducts from './components/TrendingProducts';
import InteriorDesign from './components/InteriorDesign';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Categories/>
      <Segments />
      <TrendingProducts />
      <InteriorDesign />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;