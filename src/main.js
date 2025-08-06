let solucionActual = [];
let fila = 0
let caminosSinSolucion = [];
let soluciones = [];

export function queensProblem(n){
  while (true){
    for (let columna = 0; columna < n; columna++){
      if (isSave(fila, columna, solucionActual) && verificarCamino(columna, solucionActual, caminosSinSolucion)){
        solucionActual.push(columna);
        fila ++;

        if (solucionActual.length === n) {
          soluciones.push([...solucionActual])
          caminosSinSolucion.push([...solucionActual])
          fila --;
          solucionActual.pop();
          return soluciones;
        }
        break;
      }
      else if (columna === n - 1){
        caminosSinSolucion.push([...solucionActual])
        fila --;
        solucionActual.pop();
        if (fila === -1 ) return null;
      }
    }
  }
}

function isSave(fila, columna, soluciones){

  if (soluciones.length === 0 ) return true

  for (const [filaSolucion, columnaSolucion] of soluciones.entries()) {
    if(columnaSolucion === columna ||
      Math.abs(fila - filaSolucion) === Math.abs(columna - columnaSolucion)) return false;
  }
  return true
}

function verificarCamino(columna, soluciones, caminosSinSolucion) {

  if (caminosSinSolucion.length === 0) return true;

  let solucionActual = [...soluciones, columna];

  for (let camino of caminosSinSolucion){
    if(JSON.stringify(camino) === JSON.stringify(solucionActual)) return false;
  }

  return true;
}

export const cantSoluciones = [
  1,         // n = 1
  0,         // n = 2
  0,         // n = 3
  2,         // n = 4
  10,        // n = 5
  4,         // n = 6
  40,        // n = 7
  92,        // n = 8
  352,       // n = 9
  724,       // n = 10
  2680,      // n = 11
  14200,     // n = 12
  73712,     // n = 13
  365596,    // n = 14
  2279184,   // n = 15
  14772512,  // n = 16
  95815104,  // n = 17
  666090624, // n = 18
  4968057848,// n = 19
  39029188884// n = 20
];
