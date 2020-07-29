/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  
o si “se pasó…”  del número secreto.
*/

// txtIdNumero
// txtIdIntentos

var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 1

alert("Ingrese un numero del 1 al 100");

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random()*(100 - 1) + 1);
}

function verificar()
{

  	//Establezco variables
  	var numeroIngresado;
  	numeroIngresado = txtIdNumero.value;
  	numeroIngresado = parseInt(numeroIngresado);

  	//Analizo si se cumplen las condiciones y si no, agrego un intento al contador
  	if (numeroIngresado > numeroSecreto)
  	{
    	alert("El numero es mas chico.")
    	txtIdIntentos.value = contadorIntentos++;
  	}
  	else
	{	
    	if (numeroIngresado < numeroSecreto)
    	{	
      		alert("El numero es mas grande.")
      		txtIdIntentos.value = contadorIntentos++;
    	}
    	else
    	{
      		if (numeroIngresado == numeroSecreto)
      		{
        	alert("FELICITACIONES, ACERTO EL NUMERO EN " + contadorIntentos + " INTENTOS!")
      		}
    	}
  	}
}