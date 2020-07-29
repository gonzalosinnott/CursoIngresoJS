/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var respuesta;
var numeroUno;
var numeroDos;
var operadores;
var operadorAleatorio;
var resultado;
var respuesta;

    
function comenzar()
{
    //Obtener numeros por Random
    numeroUno = Math.round(Math.random()*(10 - 1) + 1);
    numeroDos = Math.round(Math.random()*(10 - 1) + 1);
    
    //Asignar los numeros al formulario
    txtIdPrimerNumero.value = numeroUno
    txtIdSegundoNumero.value = numeroDos
    
    //Obtener operador aritmetico Random a partir de un array
    operadores = ["+" , "-", "*", "/"]
    operadorAleatorio = operadores[Math.floor(Math.random() * operadores.length)]
    
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
