function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;

  let numbersArray = numbers.split(delimiter);

  let result = 0;
  numbersArray.forEach((element) => {
    result += Number(element);
  });

  return result;
}

module.exports = add;
