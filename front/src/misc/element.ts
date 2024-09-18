/** @type {<T extends Element>(selector: string, type?: new () => T) => T} */
export const $ = (selector, type?) => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector ${selector}`);
  }
  if (type) {
    if (!(elt instanceof type)) {
      throw new Error(`Element found but wrong type (${type.name})`);
    }
  }

  // @ts-ignore
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
