import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Schedule } from "./components/Schedule";
import { Rules } from "./components/Rules";
import { Registration } from "./components/Registration";
import { Sponsors } from "./components/Sponsors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CursorSpotlight } from "./components/CursorSpotlight";
import { Themes } from "./components/Themes";
import { ProblemStatement } from "./components/ProblemStatements"; // ✅ Make sure this exists
import {Submissions} from "./components/Submissions"; // ✅ Make sure this exists

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative">
        {/* Global violet spotlight behind content */}
        <CursorSpotlight />
        <Navbar />

        <main>
          <Routes>
            {/* Home Page (your main sections) */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Rules />
                  <Registration />
                                    <Submissions/>

                  <Schedule />
                  <Themes />
                  <Sponsors />
                  <Contact />
                </>
              }
            />

            {/* Problem Statement Page */}
            <Route path="/problem-statement" element={<ProblemStatement />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
