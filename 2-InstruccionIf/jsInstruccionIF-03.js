/* Al ingresar una edad debemos informar
 si la persona es mayor de edad, sino 
 informar que es un menor de edad. */

// id: txtIdEdad

function mostrar()
{
	if (txtIdEdad.value >= 18)
	{
		alert("Mayor de edad.");
	}
	else
	{
		alert("Menor de edad.");
	}
}