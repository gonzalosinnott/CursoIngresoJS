/*Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste */

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert ("Se encuentra al Sur");
			break;
		case "Cataratas":
			alert ("Se encuentra al Norte");
			break;
		case "Mar del plata":
			alert ("Se encuentra al Este");
			break;
		case "Cordoba":
			alert ("Se encuentra al Sur");
			break;
	}
}
