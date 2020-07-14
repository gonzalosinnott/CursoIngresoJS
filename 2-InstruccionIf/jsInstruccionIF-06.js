/*Al ingresar una edad debemos informar
si la persona es mayor de edad (mas de 18
años) o adolescente (entre 13 y 17 años)
o niño (menor a 13 años). */

//id: txtIdEdad

function mostrar()
{
	if (txtIdEdad.value >= 18)
	{
		alert("Mayor de edad.");
	}
	else if (txtIdEdad.value >= 13 && txtIdEdad.value <= 17)
	{
		alert("Adolescente.");
	}
	else if (txtIdEdad.value < 13)
	{
		alert("Niño.");
	}
}