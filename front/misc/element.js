/**
 * @param {string} selector
 */
export const $ = (selector) => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector ${selector}`);
  }
  return elt;
};

/**
 *
 * @param {Element} elt
 * @param {string} key
 * @param {number} value
 */
export const setNumberAttribute = (elt, key, value) => {
  elt.setAttributeNS(null, key, value + "");
};
