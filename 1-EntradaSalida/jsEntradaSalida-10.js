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
	var importeConDescuento

	importe = txtIdImporte.value;
	descuento = 0.75;

	importe = parseFloat(importe);

	importeConDescuento = importe * descuento;
	importeConDescuento = importeConDescuento.toFixed(2);

	txtIdResultado.value = importeConDescuento;
}
