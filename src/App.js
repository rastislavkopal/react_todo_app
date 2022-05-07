import React from "react";
import CustomDragDropContext from "./components/DragDropContext";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Contact from "./layouts/contact";
import About from "./layouts/about";
import Stuff from "./layouts/stuff";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={
            <main style={{ display: "flex", justifyContent: "center", height: "100%" }}>
              <CustomDragDropContext />
            </main>
          } />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="stuff" element={<Stuff />} />
        </Routes>
        
      <Footer />
    </BrowserRouter>

      
      
  );
}
