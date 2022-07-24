const findBestEmployee = function (employees) {
  const worksEmploye = Object.entries(employees);
  let maxCount = 0;
  let employeeName = 0;
  for (let i = 0; i < worksEmploye.length; i++) {
    if (maxCount < worksEmploye[i][1]) {
      maxCount = worksEmploye[i][1];
      employeeName = worksEmploye[i][0];
    }
  }
  return `${employeeName} : ${maxCount}`;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
