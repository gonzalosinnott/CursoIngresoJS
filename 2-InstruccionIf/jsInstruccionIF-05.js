/* Al ingresar una edad solo debemos
informar si la persona NO es adolescente. */

// id: txtIdEdad

function mostrar()
{
	if (txtIdEdad.value < 13 || txtIdEdad.value > 17)
	{
		alert("No es Adolescente.");
	}
}