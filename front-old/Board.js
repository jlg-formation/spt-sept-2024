import { svgns, r } from "./constants.js";
import { setNumberAttribute, $ } from "./misc/element.js";
import { computePointOnBigCircle } from "./misc/math.js";

export class Board {
  /**
   * @type {{ samples: number; multiplicationFactor: number; }}
   */
  config;

  draw() {
    $("g.samples").innerHTML = "";
    $("g.lines").innerHTML = "";
    const { samples, multiplicationFactor } = this.config;
    for (let i = 0; i < samples; i++) {
      const { x, y } = computePointOnBigCircle(i, samples);

      const circle = document.createElementNS(svgns, "circle");
      setNumberAttribute(circle, "cx", x);
      setNumberAttribute(circle, "cy", y);
      setNumberAttribute(circle, "r", r);
      $("g.samples").appendChild(circle);
    }

    for (let i = 0; i < samples; i++) {
      const { x: x1, y: y1 } = computePointOnBigCircle(i, samples);
      const { x: x2, y: y2 } = computePointOnBigCircle(
        i * multiplicationFactor,
        samples
      );

      const line = document.createElementNS(svgns, "line");
      setNumberAttribute(line, "x1", x1);
      setNumberAttribute(line, "y1", y1);
      setNumberAttribute(line, "x2", x2);
      setNumberAttribute(line, "y2", y2);

      $("g.lines").appendChild(line);
    }
  }

  /**
   * @param {{ samples: number; multiplicationFactor: number; }} config
   */
  setConfig(config) {
    this.config = config;
  }
}
