import React from "react";
import CustomDragDropContext from "./components/DragDropContext";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function App() {
  
  return (
    <div>
      <Navbar />
      <main style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <CustomDragDropContext />
      </main>
      <Footer />
    </div>
  );
}
