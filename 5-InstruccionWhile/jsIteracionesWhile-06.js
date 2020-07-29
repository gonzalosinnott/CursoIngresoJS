/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/


function mostrar()
{
	var i;
	var suma;
	var numeroIngresado;
	var suma

	i = 0;
	suma = 0;

	while (i < 5)
	{
		numeroIngresado = prompt("Ingrese un Numero");
		numeroIngresado = parseInt(numeroIngresado);
		i++ ;
		suma = suma + numeroIngresado;
	}

	txtIdSuma.value = suma;
	txtIdPromedio.value= suma / i;
}
