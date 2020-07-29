/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
				switch(contadorIntentos)
				{
					case 1:
						alert("Usted es un Psíquico.");
						break;
					case 2:
						alert("Excelente percepción.")
						break;
					case 3:
						alert("Esto es suerte.")
						break;
					case 4:
						alert("Excelente técnica.");
						break;
					case 5:
						alert("Usted está en la media.");
						break;
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
						alert("Falta técnica.")
						break;
					default:
						alert("Afortunado en el amor!!")
				}
			}
		}
	}
}