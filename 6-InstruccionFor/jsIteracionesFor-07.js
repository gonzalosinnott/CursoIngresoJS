/*Al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.*/

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
			document.write(i + "<br>");
		}
	}
	document.write("La cantidad de divisores de " + numero + " es " + contadorDivisores)
}