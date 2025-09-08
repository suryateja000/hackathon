import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { Rules } from './components/Rules';
import { Registration } from './components/Registration';
import { Sponsors } from './components/Sponsors';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorSpotlight } from './components/CursorSpotlight';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Global violet spotlight behind content */}
      <CursorSpotlight/>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Rules />
        <Registration />
        <Schedule />
        {/* <TimeTracking />
        <EventGallery /> */}
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
