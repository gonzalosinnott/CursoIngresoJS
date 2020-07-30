/*al presionar el botón pedir la cantidad de veces
que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{

	var repetciones = prompt("ingrese el número de repeticiones");
	alert("ok");

	for (i = 10 ; i > 0 ; i--)
	{
		document.write(i + "<br>")
	}
	
}//FIN DE LA FUNCIÓN