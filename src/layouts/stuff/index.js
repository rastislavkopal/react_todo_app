import React from "react";
import Video from "./video";

export default function Stuff() {
  React.useEffect(() => {
    var c = document.getElementById("stuff_canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.arc(150, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(185, 75);
    ctx.arc(150, 75, 35, 0, Math.PI, false);
    ctx.moveTo(135, 65);
    ctx.arc(140, 65, 10, 0, Math.PI * 2, true);
    ctx.moveTo(170, 65);
    ctx.arc(160, 65, 10, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.font = "48px serif";
    ctx.textBaseline = "hanging";
    ctx.strokeText('KAJ WOHO', 10, 180);
  }, []);

  return (
    <div className="body_part">
      <Video />
      <hr/>
      <canvas
        id="stuff_canvas"
        width="300"
        height="250"
        style={{ border: "1px solid #d3d3d3" }}
        className="canvas"
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
}