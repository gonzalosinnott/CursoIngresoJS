/*
una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final.

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/

// txtIdEstacion: (Invierno, Otoño, Verano, Primavera)
// txtIdDestino: (Bariloche, Mar del plata, Cataratas, Cordoba)

function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precio = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				alert ("Precio Final: $" + (precio + precio * 0.2));
			}
			else
			{
				if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
				{
					alert ("Precio Final: $" + (precio -precio * 0.1));
				}
				else
				{
					if (destinoIngresado == "Mar del plata")
					{
						alert ("Precio Final: $" + (precio -precio * 0.2));
					}
				}
			}
			break;		
		case "Verano":
			if (destinoIngresado == "Bariloche")
			{
				alert ("Precio Final: $" + (precio - precio * 0.2));
			}
			else
			{
				if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
				{
					alert ("Precio Final: $" + (precio + precio * 0.1));
				}
				else
				{
					if (destinoIngresado == "Mar del plata")
					{
						alert ("Precio Final: $" + (precio + precio * 0.2));
					}
				}
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destinoIngresado == "Bariloche" || destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata")
			{
				alert ("Precio Final: $" + (precio + precio * 0.1));
			}
			else
			{
				if (destinoIngresado == "Cordoba")
				{
					alert ("Precio Final: $" + precio );
				}
			}
			break;
	}
}