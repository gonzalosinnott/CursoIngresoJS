/*
Una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

en primavera: solo no se viaja a Bariloche
*/

// txtIdEstacion: (Invierno, Otoño, Verano, Primavera)
// txtIdDestino: (Bariloche, Mar del plata, Cataratas, Cordoba)

function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var condicionViaje;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
				condicionViaje = "Se viaja.";
					break;
				default:
					condicionViaje = "No se viaja.";
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					condicionViaje = "Se viaja.";
					break;
				default:
					condicionViaje = "No se viaja.";
					break;
			}
			break;
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					condicionViaje = "No se viaja.";
					break;
				default:
					condicionViaje = "Se viaja.";
					break;
			}
			break;
		case "Otoño":
			condicionViaje = "Se viaja."
			break;
	}

	alert (condicionViaje);
}