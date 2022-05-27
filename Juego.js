class Juego{

    constructor(dimensionTablero,nombre){
        this.dimensionTablero = dimensionTablero;
        this.nombre = nombre;
    }

    verificarTamanio(){
        if(this.dimensionTablero >= 5){
            alert("El tamaño del tablero es correcto");
            this.generarTablero
        }
        else {
            alert("El tamaño del tablero es incorrecto");
                 
        }
    }

    generarTablero(dimensionTablero){
        let tablero = [];
                for(let i = 0; i < dimensionTablero; i++){   
                    tablero.push(0);
                }          console.log(tablero);
    }
    

    ingresarBarco(){
        //acomodar barcos
        for(let i =0; i <5;i++ ){
            let lugarBarco = prompt("Ingresa tu Barco al tablero de 1 x " + this.dimensionTablero);
            if(tablero[lugarBarco]==1){
                alert("Esta casilla se encuentra ocupada");
                i--
            }else if(tablero[lugarBarco]==0){  
            tablero[lugarBarco]=1;
            let newtablero = tablero;
            }
        }
        console.log(newtablero);
    }  

}

//    let barcos = [
//     {
//         nombre: "Submarino",
//         tamaño: 1,
//         vida: 1,
//         posicion: [0, 0],
//         orientacion: "horizontal",
//         disparo: false,
//         disparoPosicion: [0, 0],
//         disparoOrientacion: "horizontal",
//         disparoResultado: false,
//         disparoResultadoPosicion: [0, 0],
//         disparoResultadoOrientacion: "horizontal",
//         disparoResultadoVida: 1,
//         disparoResultadoTamaño: 1,
//     }
//     ]

