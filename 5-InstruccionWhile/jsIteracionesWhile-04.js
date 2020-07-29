/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entre 0 y 10.");

	while (numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = prompt("Numero fuera de rango. Intente nuevamente.");
	}
	
	txtIdNumero.value = numeroIngresado;

}//FIN DE LA FUNCIÓN