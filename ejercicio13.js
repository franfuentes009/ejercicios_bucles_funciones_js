// Ejercicio 13
function nameFinder(nameList, target) { // Añade 'target' como parámetro
  const index = nameList.indexOf(target);
  return { exists: index !== -1, position: index };
}
