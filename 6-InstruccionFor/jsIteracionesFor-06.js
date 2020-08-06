/*al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados..*/


function mostrar()
{
	var numero;
	var contadorPares;
	
	contadorPares = 0;

	do{
		numero = prompt("Ingrese un Numero");
		numero = parseInt(numero)
	}while(isNaN(numero))

	for (var i = 1 ; i <= numero ; i++)
	{
		
		if (i % 2 == 0)
		{
			contadorPares++;
			document.write(i + "<br>");
		}
	
	}

	document.write("La cantidad de numeros pares es " + contadorPares)
}