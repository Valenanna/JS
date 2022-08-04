
class autos{
    constructor(id,marcaAuto,modeloAuto,añoAuto,colorAuto){
        this.id = id,
        this.marcaAuto = marcaAuto,
        this.modeloAuto = modeloAuto,
        this.añoAuto = añoAuto,
        this.colorAuto = colorAuto
    
    }

    mostrarInformacion(){
        console.log(`El autos es marca ${this.marcaAuto}, modelo ${modeloAuto}, del año ${añoAuto} y su color es ${this.colorAuto}`)
    }
}

let desguace = []

function nuevoAuto(){
    let marcaAuto = prompt("Ingrese la marca del auto")
    let modeloAuto = prompt("Ingrese el modelo del auto")
    let añoAuto = parseInt(prompt("Ingrese el año (de fabricacion) del auto"))
    let colorAuto = prompt("Ingrese el color del auto")

    let autoIngresado = new autos(desguace.length+1,marcaAuto,modeloAuto,añoAuto,colorAuto)
    console.log(autoIngresado)
    desguace.push(autoIngresado)
}
nuevoAuto("");
document.getElementById("BotonAgregarAuto").onclick = function (){
    nuevoAuto();
}

function borrarAuto(){
    let borrarAuto = parseInt(prompt("Ingrese el ID del auto que desea borrar(el ID se encuentra en el console.log)"))
    desguace.splice(borrarAuto)
}
document.getElementById("BotonBorrarAuto").onclick = function (){
    borrarAuto();
}

