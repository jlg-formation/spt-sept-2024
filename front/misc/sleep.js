/**
 *
 * @param {number} delayMs
 * @returns {Promise<void>}
 */
export const sleep = (delayMs) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
};
