import React from "react";
import CustomDragDropContext from "./components/DragDropContext";

export default function App() {
  
  return (
    <main style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <CustomDragDropContext />
    </main>
  );
}
