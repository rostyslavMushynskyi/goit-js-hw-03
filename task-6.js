const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  if (productName === allProdcuts[0].name) {
    totalPrice = products[0].price * products[0].quantity;
  } else if (productName === allProdcuts[1].name) {
    totalPrice = products[1].price * products[1].quantity;
  } else if (productName === allProdcuts[2].name) {
    totalPrice = products[2].price * products[2].quantity;
  } else if (productName === allProdcuts[3].name) {
    totalPrice = products[3].price * products[3].quantity;
  }
  return totalPrice;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроїд")); // 2800
