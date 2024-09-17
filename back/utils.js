module.exports = {
  random: (min, max, decimal = 0) => {
    return Number((Math.random() * (max - min) + min).toFixed(decimal));
  },
};
