export const formatMoney = (money) => 'R$' + parseFloat(Math.round(money * 100) / 100).toFixed(2).replace('.', ',');

export const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil;
}
