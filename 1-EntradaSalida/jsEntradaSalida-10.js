/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 
25 % en el cuadro de texto "RESULTADO"*/

//Id:
//txtIdImporte
//txtIdResultado

function mostrarAumento()
{
	var importe;
	var descuento;

	importe = txtIdImporte.value;
	parseInt(importe);

	descuento = importe * 0.25; 
	 
	alert("Descuento del " + descuento + " %")
	txtIdResultado.value = importe - descuento; 
}
