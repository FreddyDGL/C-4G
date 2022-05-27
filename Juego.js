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
        let resultado = this.dimensionTablero -1;
        for(let i =0; i <5;i++ ){
            let lugarBarco = prompt("Ingresa tu Barco al tablero contando el numero 0 hasta el numero " + resultado);
            if (this.dimensionTablero > lugarBarco ) {
                if(tablero[lugarBarco]==1){
                    alert("Esta casilla se encuentra ocupada");
                    i--
                }else if(tablero[lugarBarco]==0){  
                tablero[lugarBarco]=1;
                }
            } else {
                alert("no puedes insertar");
                i--
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

