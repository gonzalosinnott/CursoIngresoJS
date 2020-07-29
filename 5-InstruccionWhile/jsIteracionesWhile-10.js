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
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferenciaPositivosNegativos = 0;

	respuesta="si";
	
	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un Numero");
		numeroIngresado = parseInt(numeroIngresado);
		
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

		respuesta = prompt("¿Desea continuar?(SI/NO).");
	}
	

	document.write("La suma de positivos es: "+ sumaPositivos);
	document.write("<br>");
	document.write("La suma de negativos es: "+ sumaNegativos);
	document.write("<br>");
	document.write("La cantidad de positivos es: "+ cantidadPositivos);
	document.write("<br>");
	document.write("La cantidad de negativos es: "+ cantidadNegativos);
	document.write("<br>");
	document.write("La cantidad de ceros es: "+ cantidadCeros);
	document.write("<br>");
	document.write("La cantidad de numeros pares es: "+ cantidadNumerosPares);
	document.write("<br>");
	document.write("El promedio de positivos es: "+ promedioPositivos);
	document.write("<br>");
	document.write("El promedio de negativos es: "+ promedioNegativos);
	document.write("<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos);
}
