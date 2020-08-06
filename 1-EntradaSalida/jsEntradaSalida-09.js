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
	var sueldoConAumento;

	sueldo = txtIdSueldo.value;
	aumento = 1.1;

	sueldo = parseFloat(sueldo);

	sueldoConAumento = sueldo * aumento;
	sueldoConAumento = sueldoConAumento.toFixed(2)

	txtIdResultado.value = sueldoConAumento;
}
