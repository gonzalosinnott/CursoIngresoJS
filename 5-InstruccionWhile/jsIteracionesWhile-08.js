/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var primeraVez;
	
	sumaPositivos=0;
	multiplicacionNegativos=0;
	
	respuesta=true;
	primeraVez = true;

	while (respuesta == true)
	{
		do{
			numeroIngresado = prompt("Ingrese un Numero");
			numeroIngresado = parseInt(numeroIngresado)
		}while(isNaN(numeroIngresado));

		
		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				if(primeraVez = true)
				{
					multiplicacionNegativos = 1;
					primeraVez = false
				}
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
		}
		respuesta = confirm("¿Desea continuar?");
	}
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}