// Ejercicio 9
function sumNumbers(numberList) {
    return numberList.reduce((acc, num) => acc + num, 0);
  }
  const numbers = [1, 2, 3, 5, 45, 37, 58];
  console.log(sumNumbers(numbers)); // 150