import { cx0, r0, cy0 } from "../constants.js";

/**
 *
 * @param {number} index
 * @param {number} samples
 * @returns {{x: number; y: number;}}
 */
export const computePointOnBigCircle = (index, samples) => {
  const angle = index * ((2 * Math.PI) / samples);

  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);

  return { x, y };
};
