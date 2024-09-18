export type millisecond = number;

export const sleep = (delay: millisecond): Promise<void> =>
  new Promise((r) => setTimeout(r, delay));
