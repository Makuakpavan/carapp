import { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Inventory from './sections/Inventory';
import Services from './sections/Services';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Inventory />
        <Services />
        <Statistics />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
