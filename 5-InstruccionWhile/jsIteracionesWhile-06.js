/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/


function mostrar()
{
	var contador;
	var suma;
	var numeroIngresado;
	var promedio;

	contador = 0;
	suma = 0;

	while (contador < 5)
	{
		numeroIngresado = prompt("Ingrese un Numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador++ ;
		suma = suma + numeroIngresado;
	}

	promedio = suma / contador;
	
	txtIdSuma.value = suma;
	txtIdPromedio.value= promedio;
}
