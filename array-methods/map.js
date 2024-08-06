'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const objsArr = prices.map((v, i, arr) => {
  const obj = { price: arr[i], salePrice: arr[i] / 2 /*v*/ };
  return obj;
});
console.log('Objects created from prices array:', objsArr);
const dollarSignFormat = prices.map((v) => {
  const cents = v * 100;
  const roundedToNearestCent = Math.round(cents);
  const strVersion = String(roundedToNearestCent);
  return `$${strVersion.slice(0, -2)}.${strVersion.slice(-2)}`;
});
console.log('Dollar sign format:', dollarSignFormat);
