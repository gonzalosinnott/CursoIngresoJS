/*al presionar el botón pedir la cantidad de veces
que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{
	var mensaje;
	var repeticiones;
	var contador;


	mensaje = "Hola UTN FRA"

	do{		
	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);
	}while(isNaN(numeroIngresado) || repeticiones > 0)

	for (contador = 0 ; contador < repeticiones ; contador++)
	{
		document.write(mensaje + "<br>");
	}
	
}