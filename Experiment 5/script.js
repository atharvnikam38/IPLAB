
document.getElementById("calculate").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultDiv = document.getElementById("calc-result");

  const calculate = (num1, num2, operator) => {
    return new Promise((resolve, reject) => {
      if (isNaN(num1) || isNaN(num2)) {
        reject("Please enter valid numbers.");
      }

      switch (operator) {
        case "add":
          resolve(num1 + num2);
          break;
        case "subtract":
          resolve(num1 - num2);
          break;
        case "multiply":
          resolve(num1 * num2);
          break;
        case "divide":
          if (num2 === 0) {
            reject("Cannot divide by zero.");
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject("Invalid operator selected.");
      }
    });
  };

  calculate(num1, num2, operator)
    .then((result) => {
      resultDiv.textContent = `Result: ${result}`;
    })
    .catch((error) => {
      resultDiv.textContent = `Error: ${error}`;
    });
});


document.getElementById("generate-squares").addEventListener("click", function () {
  const inputArray = document.getElementById("number-array").value.split(",").map(Number);
  const resultDiv = document.getElementById("iterator-result");

  function* squareIterator(array) {
    for (let num of array) {
      yield num * num;
    }
  }

  const squares = [];
  const iterator = squareIterator(inputArray);
  for (let value of iterator) {
    squares.push(value);
  }

  resultDiv.textContent = `Squares: ${squares.join(", ")}`;
});


document.getElementById("generate-primes").addEventListener("click", function () {
  const primeLimit = parseInt(document.getElementById("prime-limit").value);
  const resultDiv = document.getElementById("prime-result");

  function* primeGenerator(limit) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }

    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }

  const primes = [];
  const generator = primeGenerator(primeLimit);
  for (let prime of generator) {
    primes.push(prime);
  }

  resultDiv.textContent = `Prime Numbers: ${primes.join(", ")}`;
});
