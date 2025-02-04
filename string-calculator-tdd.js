function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;

  if (numbers.startsWith("//")) {
    let start = numbers.indexOf("//");
    let end = numbers.indexOf("\n");

    delimiter = numbers.substring(start + 2, end);
    numbers = numbers.split("\n")[1];
  }

  let numbersArray = numbers.split(delimiter);

  const negativesNumbers = numbersArray.filter((num) => num < 0);
  if (negativesNumbers.length) {
    throw new Error(
      "Negative numbers not allowed: " + negativesNumbers.join(", ")
    );
  }

  let result = 0;
  numbersArray.forEach((element) => {
    result += Number(element);
  });

  return result;
}

module.exports = add;
