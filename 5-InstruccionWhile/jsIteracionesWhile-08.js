/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";


	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un Numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("¿Desea continuar?(SI/NO).");
	}
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}