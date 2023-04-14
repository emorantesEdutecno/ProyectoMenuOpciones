function evaluarEleccion(){

    //ENTRADA
    //obtengo la referencia del elemento html 
    let laEleccionString = document.getElementById('cajaEleccion');
    // manipulamos el valor de la referencia
    let laEleccionInt = parseInt(laEleccionString.value);

    //obtengo la referencia del elemento html 
    let elDato1String = document.getElementById('cajaNumero1');
    // manipulamos el valor de la referencia
    let elDato1Int = parseInt(elDato1String.value);

    //obtengo la referencia del elemento html 
    let elDato2String = document.getElementById('cajaNumero2');
    // manipulamos el valor de la referencia
    let elDato2Int = parseInt(elDato2String.value);

    //obtengo la referencia del elemento html
    let elResultado = document.getElementById('cajaResultado');

    let resultadoOperacion = 0;
    let mensajeSalida = '';


    //PROCESO
    switch(laEleccionInt){
        case 1:
            mensajeSalida = comparar(elDato1Int, elDato2Int);
            break;
        case 2:

            resultadoOperacion = sumar(elDato1Int, elDato2Int);
            mensajeSalida = 'El resultado de la suma es: '+resultadoOperacion;
            break;
        case 3:

            resultadoOperacion = restar(elDato1Int, elDato2Int);
            mensajeSalida = 'El resultado de la resta es: '+ resultadoOperacion;
            break;
        case 4:
            resultadoOperacion = multiplicar(elDato1Int, elDato2Int);
            mensajeSalida = 'El resultado de la multiplicación es: '+resultadoOperacion;

            break;
        case 5:
            resultadoOperacion = dividir(elDato1Int, elDato2Int);
            mensajeSalida = 'El resultado de la división es: '+resultadoOperacion;
            break;
        case 6:
            mensajeSalida = mostrar(elDato1Int, elDato2Int);
            break;
        case 7:
            alert('Usted eligió salir');
            break;
        default:
            alert('OPCIÓN NO VALIDA');
            break;
    }// fin switch


    //SALIDA
    elResultado.value = mensajeSalida;


}// fin función 


function activarIngresoDatos(){
    // obtener la referencia del elemento
    let laCajaIngreso = document.getElementById('seccionIngreso');
    //invoca los metodos correspondientes
    laCajaIngreso.style.display = 'block';


}// fin funcion


function limpiarCampos(){
    // obtener la referencia del elemento
    let elFormulario = document.getElementById('miFormulario');
    //invoca los metodos correspondientes
    elFormulario.reset(); 


    //obtengo la referencia del elemento html 
    let laEleccionString = document.getElementById('cajaEleccion');
    // manipulamos el valor de la referencia
    laEleccionString.value = '';


}

// los parámetros de las funciones se pueden llamar como ustedes quieran
// en este caso los llamé n1, y n2.
function sumar(n1,n2){
    let resultadoSuma = n1 + n2;
    return resultadoSuma;
}// fin funcion


function restar(dato1, dato2){
    let resultadoResta = dato1-dato2;
    return resultadoResta;
}//fin funcion

function multiplicar(dato1, dato2){
    let resultadoMultiplicacion = dato1*dato2;
    return resultadoMultiplicacion;
}// fin funcion


function dividir(dato1,dato2){
    let resultadoDivision = dato1/dato2;
    return resultadoDivision;
}

function comparar(dato1,dato2){
    let resultadoComparar='';
    if(dato1>dato2){
        resultadoComparar = 'El primer valor :'+dato1+' es mayor que el segundo valor: '+dato2;
    }
    else if(dato2>dato1){
        resultadoComparar = 'El segundo valor: '+dato2+' es mayor que el primer valor: '+dato1;
    }
    else if(dato1 == dato2){
        resultadoComparar = 'El primer valor: '+dato1+' es igual al segundo valor: '+dato2;
    }
    else{
        resultadoComparar = 'INGRESE NÚMEROS PARA SER COMPARADOS';
    }

    return resultadoComparar;
}//fin funcion

function mostrar(dato1,dato2){
    let resultadoMostrar = 'El primer valor ingresado es: '+dato1+' y el segundo valor ingresado es: '+dato2;
    return resultadoMostrar;
}