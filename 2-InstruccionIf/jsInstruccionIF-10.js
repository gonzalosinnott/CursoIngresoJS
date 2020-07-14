/*Al presionar el Botón, asignar una nota
RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" 
para notas menores a 4 */

function mostrar()
{
	//Generar numero random
	var aleatorio;
	aleatorio = Math.round(Math.random()*(10 - 1) + 1);
	
	//Asignar condiciones

	if(aleatorio >= 9)
	{
		alert(aleatorio +": EXCELENTE");
	}
	else if (aleatorio >=4 && aleatorio <=8)
	{
		alert(aleatorio + ": APROBO");
	}
	else
	{
		alert(aleatorio + ": Vamos, la proxima se puede");
	}
}