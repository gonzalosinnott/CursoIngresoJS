//Al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

function mostrar()
{
	var numero;
	var contadorDivisores;
	
	contadorDivisores = 0;

	do{
		numero = prompt("Ingrese un Numero");
		numero = parseInt(numero)
	}while(isNaN(numero))

	for (var i = 0 ; i <= numero ; i++)
	{		
		if (numero % i == 0)
		{
			contadorDivisores++;
		}
	}
	
	if(contadorDivisores == 2)
	{
		alert(numero + " es Primo.")
	}
	else
	{
		alert(numero + " no es Primo.")
	}
}