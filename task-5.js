const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let allPropValues = [];
  for (let i = 0; i < arr.length; i++) {
    const arrayValues = Object.values(arr[i]);
    const arrayKeys = Object.keys(arr[i]);
    if (prop === arrayKeys[0]) {
      allPropValues.push(arrayValues[0]);
    } else if (prop === arrayKeys[1]) {
      allPropValues.push(arrayValues[1]);
    } else if (prop === arrayKeys[2]) {
      allPropValues.push(arrayValues[2]);
    }
  }
  return allPropValues;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
