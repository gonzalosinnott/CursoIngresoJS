/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var i;
	var suma;
	var respuesta;
	
	i=0;
	suma=0;
	respuesta = true;
	
	while (respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un Numero");
		numeroIngresado = parseInt(numeroIngresado);
		i++ ;
		suma = suma + numeroIngresado;
		respuesta = confirm("¿Desea continuar?");
	}
	
	txtIdSuma.value = suma;
	txtIdPromedio.value = suma / i;

}//FIN DE LA FUNCIÓN