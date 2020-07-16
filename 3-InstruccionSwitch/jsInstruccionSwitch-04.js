/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */


function mostrar()
{
	//tomo el mes
	var mesDelAño = txtIdMes.value;
		
	switch (mesDelAño)
	{
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		 	alert("Tiene 30 dias");
			break;
		default:
			alert("Tiene 31 dias");
			break;
	}
	



}//FIN DE LA FUNCIÓN