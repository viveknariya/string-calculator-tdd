function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;

  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numbers = numbers.split("\n")[1];
  }

  let numbersArray = numbers.split(delimiter);

  let result = 0;
  numbersArray.forEach((element) => {
    result += Number(element);
  });

  return result;
}

module.exports = add;
