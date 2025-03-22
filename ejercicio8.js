// Ejercicio 8
function findLongestWord(stringList) {
    let longest = "";
    for (const word of stringList) {
      if (word.length > longest.length) longest = word;
    }
    return longest;
  }
  const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
  console.log(findLongestWord(avengers)); // 'Spiderman'