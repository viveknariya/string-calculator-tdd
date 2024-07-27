function add(numbers) {
  if (numbers === "") return 0;

  let numbersArray = numbers.split(",");

  let result = 0;
  numbersArray.forEach((element) => {
    result += Number(element);
  });

  return result;
}

module.exports = add;
