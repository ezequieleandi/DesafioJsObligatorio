//ARRAYS
//Array de productos
//TAZAS
const tazas = [
    {id:1, producto: "taza", linea: "linea amor", imagen:"../imgBarronativo2/tazasMod/amor2Mod.jpg", capacidad: "capacidad 250ml", precio: 510},
    {id:2, producto: "taza", linea: "linea calma", imagen:"../imgBarronativo2/tazasMod/calmaMod.jpg", capacidad: "capacidad 250ml", precio: 580},
    {id:3, producto: "taza", linea: "linea empatia", imagen:"../imgBarronativo2/tazasMod/empatiaMod.jpg", capacidad: "capacidad 350ml", precio: 650},
]
//CUENCOS
const cuencos = [
    {id:4, producto: "cuenco", linea: "linea paz", imagen:"../imgBarronativo2/cuencosMod/pazMod.jpg", capacidad: "pequeño 9cm x 5cm", precio: 550},
    {id:5, producto: "cuenco", linea: "linea amor", imagen:"../imgBarronativo2/cuencosMod/amorMod.jpg", capacidad: "mediano 12cm x 7cm", precio: 690},
    {id:6, producto: "cuenco", linea: "linea vida", imagen:"../imgBarronativo2/cuencosMod/vidaMod.jpg", capacidad: "grande 15cm x 7cm", precio: 880},
]
//MATES
const mates = [
    {id:7, producto: "mate", linea: "linea calma", imagen:"../imgBarronativo2/matesMod/calmaMod.jpg",capacidad: "capacidad: 250ml", precio: 880},
    {id:8, producto: "mate", linea: "linea libertad", imagen:"../imgBarronativo2/matesMod/libertadMod.jpg",capacidad: "capacidad: 250ml", precio: 700},
    {id:9, producto: "mate", linea: "linea pureza", imagen:"../imgBarronativo2/matesMod/purezaMod.jpg",capacidad: "capacidad: 250ml", precio: 750},
    {id:10, producto: "mate", linea: "linea empatia", imagen:"../imgBarronativo2/matesMod/empatiaMod.jpg",capacidad: "capacidad: 250ml", precio: 500}
]

function guardarTazasLS(productos) {
  localStorage.setItem("tazas", JSON.stringify(productos));
}
function guardarCuencosLS(productos) {
  localStorage.setItem("cuencos", JSON.stringify(productos));
}
function guardarMatesLS(productos) {
  localStorage.setItem("mates", JSON.stringify(productos));
}

function cargarTazasLS() {
  return JSON.parse(localStorage.getItem("tazas"));
}
function cargarCuencosLS() {
  return JSON.parse(localStorage.getItem("cuencos"));
}
function cargarMatesLS() {
  return JSON.parse(localStorage.getItem("mates"));
}