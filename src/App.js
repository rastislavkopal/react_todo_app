import React from "react";
import CustomDragDropContext from "./components/DragDropContext";
import NavBar from "./components/Navbar";
import Footer from "./components/footer";
import Contact from "./layouts/contact";
import About from "./layouts/about";
import Stuff from "./layouts/stuff";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Detector } from "react-detect-offline";

export default function App() {
  
  return (
    <Detector
      render={({ online }) => (
        (online) ? <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={
              <main className="body_part taskRow d-flex mx-auto mt-3 overflow-auto">
                <CustomDragDropContext />
              </main>
            } />
            <Route path="contact" element={<Contact />} />   
            <Route path="about" element={<About />} />
            <Route path="stuff" element={<Stuff />} />
          </Routes>
          
        <Footer />
      </BrowserRouter> : <BrowserRouter>
          <main className="body_part w-100">
            <h1 className="mx-auto error">You are offline, check your connection...</h1>
          </main>
        <Footer />
      </BrowserRouter>
      )}
    />

  );
}
