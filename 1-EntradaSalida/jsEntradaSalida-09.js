/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//Id:
//txtIdSueldo
//txtIdResultado

function mostrarAumento()
{
	var sueldo;
	var aumento;

	sueldo = parseInt(txtIdSueldo.value);
	aumento = sueldo * 1.1; 
	// Opción 2 aumento = 10 * sueldo / 100
	 
	txtIdResultado.value = aumento; 
	// Opción 2 txtIdResultado.value = sueldo + aumento;
}
