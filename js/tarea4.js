
function pedirCantidad(){
    let cantPersonas = parseInt(prompt("Ingrese la cantidad de personas que desea"))
    return cantPersonas
}
let personas = 0;
let edad = 0;
let prom = 0;

let cantPersonas = pedirCantidad()
for (let i = 0; i<cantPersonas; i++){
    personas = parseInt(prompt(`Ingrese la edad ${i+1}`))
    edad = edad + personas
}

prom = edad / cantPersonas;

console.log("La suma total es " + edad);
console.log("El promedio es " + prom)

document.writeln(`La edad promedio es de las ${cantPersonas} personas es de ${prom} años`)