/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). 
*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadNumerosPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	respuesta=true;
	
	while (respuesta == true)
	{
		do{
			numeroIngresado = prompt("Ingrese un Numero");
			numeroIngresado = parseInt(numeroIngresado)
		}while(isNaN(numeroIngresado));
		
		if (numeroIngresado % 2 == 0)
		{
			cantidadNumerosPares++ ;
		}

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++ ;
		}
		else
		{
			if (numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos++ ;
			}
			else
			{
				cantidadCeros++ ;
			}
		}

		respuesta = confirm("¿Desea continuar?");
	}

	promedioPositivos = sumaPositivos / cantidadPositivos;

	promedioNegativos = sumaNegativos / cantidadNegativos;

	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;	

	document.write("La suma de positivos es: "+ sumaPositivos + "<br>");
	document.write("La suma de negativos es: "+ sumaNegativos + "<br>");
	document.write("La cantidad de positivos es: "+ cantidadPositivos + "<br>");
	document.write("La cantidad de negativos es: "+ cantidadNegativos + "<br>");
	document.write("La cantidad de ceros es: "+ cantidadCeros + "<br>");
	document.write("La cantidad de numeros pares es: "+ cantidadNumerosPares + "<br>");
	document.write("El promedio de positivos es: "+ promedioPositivos + "<br>");
	document.write("El promedio de negativos es: "+ promedioNegativos + "<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos + "<br>");
}
