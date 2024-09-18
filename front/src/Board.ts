import { svgns, r } from "./constants";
import { Config } from "./interfaces/Config";
import { setNumberAttribute, $ } from "./misc/element";
import { computePointOnBigCircle } from "./misc/math";

export class Board {
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

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

  setConfig(config: Config) {
    this.config = config;
  }
}
