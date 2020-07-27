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

	sueldo = txtIdSueldo.value;
	parseInt(sueldo);
	aumento = sueldo * 0.1; 
	
	alert("Aumento del " + aumento + " %");
    txtIdResultado.value = sueldo + aumento; 
}
