/*Al ingresar una edad debemos informar
si la persona es mayor de edad (mas de 18
años) o adolescente (entre 13 y 17 años)
o niño (menor a 13 años). */

//id: txtIdEdad

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad > 17)
	{
		alert("Mayor de edad.");
	}
	else if (edad > 12 && edad < 18)
	{
		alert("Adolescente.");
	}
	else if (edad < 13)
	{
		alert("Niño.");
	}
}