import { cantSoluciones, queensProblem } from './main.js';

const tamannoTablero = 8;
let numeroDeSolucionActual = 0;
let todasLasSoluciones = queensProblem(tamannoTablero)
let solucion = todasLasSoluciones[numeroDeSolucionActual];

let numeroSoluciones = cantSoluciones[tamannoTablero - 1];  // 92

const tablero = document.querySelector('.tablero');
const botonDelante = document.querySelector('.boton-delante');
const botonDetras = document.querySelector('.boton-atras');

construirTablero(solucion);
construirTitulo(numeroSoluciones)
construirSubtitulo(numeroDeSolucionActual)

function construirTablero(solucion) {

  tablero.replaceChildren();
  let numeroTablero = 1;
  let letraActual = 64 + tamannoTablero

  for (let i = 0; i < tamannoTablero + 2; i++) {
    const fila = document.createElement("div");
    fila.classList.add('fila');
    tablero.appendChild(fila);

    for (let j = 0; j < tamannoTablero + 2 ; j++) {
      if (i === 0 || i === tamannoTablero + 1){
        const borde = document.createElement("div");
        borde.classList.add('borde')

        if (j === 0 || j === tamannoTablero + 1) borde.classList.add('borde-esquina')
        else{
          borde.classList.add('borde-horizontal')
          borde.innerText = `${numeroTablero}`;
          numeroTablero ++;
        }
        fila.append(borde)
      }
      else if(j === 0 || j === tamannoTablero + 1){
        const borde = document.createElement("div");
        borde.classList.add('borde')
        borde.classList.add('borde-vertical')
        borde.innerText = `${String.fromCharCode(letraActual)}`;
        fila.append(borde)
        if (j === tamannoTablero + 1) letraActual --;
      }
      else {
        const celda = document.createElement("div");
        celda.classList.add('celda');

        if (j - 1 === solucion[i - 1]){
          celda.classList.add('reina');
          const imagenReina = document.createElement("img");
          imagenReina.src = "public/images/queen.svg";
          imagenReina.classList.add("icono-reina");
          celda.appendChild(imagenReina);
        }
        if ((i + j) % 2 !== 0) {
          celda.classList.add('celda-oscura');
        } else {
          celda.classList.add('celda-clara');
        }
        fila.appendChild(celda);
      }
    }
    numeroTablero = 1;
  }
}

function construirTitulo(solucion){
  const titulo = document.querySelector('.title');
  titulo.innerText = `Se han encontrado ${solucion} soluciones!`
}

function construirSubtitulo(solucion){
  const subtitulo = document.querySelector('.solucion');
  subtitulo.innerText = `Solución: ${solucion + 1}`;
}

botonDelante.addEventListener('click', () => {
  if (numeroDeSolucionActual >= numeroSoluciones - 1) return;

  numeroDeSolucionActual++;
  if (numeroDeSolucionActual <= todasLasSoluciones.length){
    todasLasSoluciones = queensProblem(tamannoTablero);
    solucion = todasLasSoluciones[numeroDeSolucionActual];
    console.log(todasLasSoluciones);
  }
  else {
    solucion = todasLasSoluciones[numeroDeSolucionActual]
  }

  construirTablero(solucion);
  construirSubtitulo(numeroDeSolucionActual)
});

botonDetras.addEventListener('click', () => {
  if (numeroDeSolucionActual <= 0) return;

  numeroDeSolucionActual--;
  solucion = todasLasSoluciones[numeroDeSolucionActual];
  construirTablero(solucion);
  construirSubtitulo(numeroDeSolucionActual)
})