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

	switch (estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				alert("Se viaja.");
			}
			else
			{
				alert("No se viaja.");
			}
			break;
		case "Verano":
			if (destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
			{
				alert("Se viaja.");
			}
			else
			{
				alert("No se viaja.");
			}
			break;
		case "Otoño":
			alert("Se viaja.")
			break;
		case "Primavera":
			if (destinoIngresado != "Bariloche")
			{
				alert("Se viaja.");
			}
			else
			{
				alert("No se viaja.");
			}
			break;
	}
}