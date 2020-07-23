//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino


function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
		{
			case "Bariloche":
			case "Cordoba":
				alert ("FRIO");
				break;
			case "Mar del plata":
			case "Cataratas":
				alert ("CALOR");
				break;
		}
}