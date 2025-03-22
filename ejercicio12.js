// Ejercicio 12
function removeDuplicates(list) {
    return [...new Set(list)]; // Solución rápida con Set
  }
  
  // Alternativa con filter:
  // return list.filter((item, index) => list.indexOf(item) === index);
  
  const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];
  console.log(removeDuplicates(duplicates));