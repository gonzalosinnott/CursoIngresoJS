/*Al presionar el Botón, mostrar un 
número Random del 1 al 10 inclusive */

function mostrar()
{
	var aleatorio;
	aleatorio = Math.round(Math.random()*(10 - 1) + 1);
	alert(aleatorio);	
}