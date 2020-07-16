/* Al ingresar una edad debemos informar
 si la persona es mayor de edad, sino 
 informar que es un menor de edad. */

// id: txtIdEdad

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad > 17)
	{
		alert("Mayor de edad.");
	}
	else
	{
		alert("Menor de edad.");
	}
}