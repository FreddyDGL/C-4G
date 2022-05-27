class Juego{

    constructor(dimensionTablero,nombre){
        this.dimensionTablero = dimensionTablero;
        this.nombre = nombre;
        //crear una variable global que contenga el tablero
        this.generarTablero(dimensionTablero); //Variable global del tablero

    }


    generarTablero(dimensionTablero){
        //llamar el tablero
        let tablero = [];
                for(let i = 0; i < dimensionTablero; i++){   
                    tablero.push(0);
                }     

                console.log(tablero);
                this.tablero = tablero;
                // return tablero;
    }
    

    ingresarBarco(){

        //acomodar barcos
        //llamar el tablero desde el constructor
        let tablero = this.tablero;
        for(let i =0; i <5;i++ ){
            let lugarBarco = prompt("Ingresa tu Barco al tablero de 0 x " + this.dimensionTablero);
            if(tablero[lugarBarco]==1){
                alert("Esta casilla se encuentra ocupada");
                i--
            }else if(tablero[lugarBarco]==0){  
            tablero[lugarBarco]=1;
            }
        }
        console.log(tablero);
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

