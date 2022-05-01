import React from "react";
import CustomDragDropContext from "./components/DragDropContext";

export default function App() {
  
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <CustomDragDropContext />
    </div>
  );
}
