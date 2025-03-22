// Ejercicio 10
function average(numberList) {
    const total = numberList.reduce((acc, num) => acc + num, 0);
    return total / numberList.length;
  }
  const numbers = [12, 21, 38, 5, 45, 37, 6];
  console.log(average(numbers)); // 20.571...