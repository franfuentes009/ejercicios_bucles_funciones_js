// Ejercicio 13
function nameFinder(nameList, target) {
    const index = nameList.indexOf(target);
    return {
      exists: index !== -1,
      position: index
    };
  }
  
  const names = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce','Peggy','Jessica','Marc'];
  console.log(nameFinder(names, 'Tony')); // { exists: true, position: 0 }