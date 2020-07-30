/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colores
var colorSecreto;
var tiempoInicio;


function comenzar()
{

	//Obtener operador color Random a partir de un array
    colores = ["azul" , "amarillo", "marron", "verde", "celeste", "rojo"];
    colorSecreto = colores[Math.floor(Math.random() * colores.length)];
        
    txtIdColorElegido.value = colorSecreto;

    start = performance.now();
    Responder();
    end = performance.now();

    tiempoInicio = performance.now();

}

function Responder(colorParametro)
{
    if (colorParametro == colorSecreto)
    {
        alert("Acertaste ! \n Te llevo " + tiempoInicio  + " ARREGLAR EN SEGUNDOS!!!!!!.");
    }    
}
