// Ejercicio 14
function repeatCounter(list) {
    const counter = {};
    for (const word of list) {
      counter[word] = (counter[word] || 0) + 1;
    }
    return counter;
  }
  
  const words = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','sleep','code'];
  console.log(repeatCounter(words));
  // Resultado: { code:4, repeat:1, eat:1, sleep:3, enjoy:2 }