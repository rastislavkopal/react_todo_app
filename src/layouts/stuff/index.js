import React from "react";
import Video from "./video";
import CanvasDraw from "react-canvas-draw";
import TodoLogo from './svg/icon';

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
    <section className="body_part">
      <Video />
      <hr/>
      <div className="mt-5">
        <h5>Wanna draw?? Let's do it!</h5>
        <CanvasDraw
          style={{
            boxShadow:
              "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
          }}
        />
      </div>
      <hr />
      <h5>Beautiful Canvas :)</h5>
      <canvas
        id="stuff_canvas"
        width="300"
        height="250"
        style={{ border: "1px solid #d3d3d3" }}
        className="canvas mt-5"
      >
        Your browser does not support the HTML canvas tag.
      </canvas>

      <hr />
      {/* <img src={logo} alt="Kiwi standing on oval"></img> */}
      <h5>Beautiful generated SVG graphics :)</h5>
      <TodoLogo />
    </section>
  );
}