/**
 *
 * @param {number} delayMs
 * @returns {Promise<void>}
 */
export const sleep = (delayMs) => new Promise((r) => setTimeout(r, delayMs));
