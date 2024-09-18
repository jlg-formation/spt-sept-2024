import { cx0, r0, cy0 } from "../constants.js";
import { Point } from "../interfaces/Point.js";

export const computePointOnBigCircle = (
  index: number,
  samples: number
): Point => {
  const angle = index * ((2 * Math.PI) / samples);

  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);

  return { x, y };
};
