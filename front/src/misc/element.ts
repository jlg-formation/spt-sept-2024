export const $ = <T extends Element>(selector: string, type?: new () => T) => {
  const elt = document.querySelector<T>(selector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector ${selector}`);
  }
  if (type) {
    if (!(elt instanceof type)) {
      throw new Error(`Element found but wrong type (${type.name})`);
    }
  }

  return elt;
};

export const setNumberAttribute = (
  elt: Element,
  key: string,
  value: number
) => {
  elt.setAttributeNS(null, key, value + "");
};

export const keys = <T extends object>(obj: T) => {
  return Object.keys(obj) as (keyof T)[];
};
