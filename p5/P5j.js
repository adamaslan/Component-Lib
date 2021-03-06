import React, { useRef, useEffect } from "react";

import p5 from "react-p5";

const Sketchy = () => {
  const processingRef = useRef();
  const Sketch = (p) => {
    p.setup = (p5, parentRef) => {
      p5.createCanvas(200, 200).parent(parentRef);
    };

    p.draw = (p5) => {
      p5.background(0);
      p5.fill(255, this.y * 1.3, 0);
      p5.ellipse(p5.width / 2, this.y, 50);
      if (this.y > p5.height) this.direction = "";
      if (this.y < 0) {
        this.direction = "^";
      }
      if (this.direction === "^") this.y += 8;
      else this.y -= 4;
    };
  };
  useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
  }, []);

  return <div ref={processingRef} />;
};

export default Sketchy;
