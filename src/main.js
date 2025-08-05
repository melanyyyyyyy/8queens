function queensProblem(n){
  let solucionActual = [];
  let fila = 0
  let caminosSinSolucion = [];
  let soluciones = [];

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
        }

        break;
      }
      if (columna === n - 1){
        caminosSinSolucion.push([...solucionActual])
        fila --;
        solucionActual.pop();
        if (fila === -1 ) return soluciones;
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

console.log(queensProblem(8))

