/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colores
var colorSecreto;
var tiempo;
var contador;
var segundos = 0;


function comenzar()
{

	//Obtener operador color Random a partir de un array
    colores = ["azul" , "amarillo", "marron", "verde", "celeste", "rojo"];
    colorSecreto = colores[Math.floor(Math.random() * colores.length)];
        
    txtIdColorElegido.value = colorSecreto;

    //Iniciar contador al cargar la pagina
    contador = setInterval(tiempo,1000);

    function tiempo()
    {
        segundos++
    }

}

function Responder(colorParametro)
{
    //Validar respuesta y parar contador
    if (colorParametro == colorSecreto)
    {
        clearInterval(contador)
        alert("Acertaste ! \n Te llevo " + segundos  + " segundos responder!.");
    }    
}
