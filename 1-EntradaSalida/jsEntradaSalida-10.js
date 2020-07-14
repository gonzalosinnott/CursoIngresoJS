/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Id:
//txtIdImporte
//txtIdResultado

function mostrarAumento()
{
	var importe;
	var descuento;

	importe = parseInt(txtIdImporte.value);
	descuento = importe * 0.75; 
	// Opción 2 descuento = 25 * sueldo / 100;
	 
	txtIdResultado.value = descuento; 
	// Opción 2 txtIdResultado.value = importe - descuento;
}
