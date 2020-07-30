/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var numeroUno;
var numeroDos;
var operadores;
var operadorAleatorio;
var resultado;
var respuesta;

var temporizador = 0;

function comenzar()
{
    //Obtener numeros por Random
    numeroUno = Math.round(Math.random()*(10 - 1) + 1);
    numeroDos = Math.round(Math.random()*(10 - 1) + 1);
    
    //Asignar los numeros al formulario
    txtIdPrimerNumero.value = numeroUno;
    txtIDSegundoNumero.value = numeroDos;
    
    //Obtener operador aritmetico Random a partir de un array
    operadores = ["+" , "-", "*", "/"];
    operadorAleatorio = operadores[Math.floor(Math.random() * operadores.length)];
    
    //Asignar operador al formulario
    txtIdOperador.value = operadorAleatorio;
    
    //Realizar cuenta
    switch (operadorAleatorio)
    {
        case "+":
            resultado = numeroUno + numeroDos;
            break;
        case "-":
            resultado = numeroUno - numeroDos;
            break;
        case "*":
            resultado = numeroUno * numeroDos;
            break;
        case "/":
            resultado = numeroUno / numeroDos;
            break; 
    }       

    resultado = parseInt(resultado);

    setTimeout(mostrarAlerta, 5000);

    function mostrarAlerta() 
    {
        alert('Han pasado 5 segundos veamos tu resultado...');

        respuesta = txtIdRespuesta.value;
        respuesta = parseInt(respuesta);
    
        // Comparar respuesta con resultado    
        if (respuesta == resultado)
        {
            alert("Acertaste!!!");
        }
        else
        {
            alert("PERDISTE!!!");
        }
    }
}

function Responder()
{
	//Asignar variable y parsear el input
    respuesta = txtIdRespuesta.value;
    respuesta = parseInt(respuesta);
    
    // Comparar respuesta con resultado    
    if (respuesta == resultado)
    {
        alert("Acertaste!!!");
    }
    else
    {
        alert("ERROR!!!");
    }    
}

