/* Al ingresar una edad solo debemos
informar si la persona NO es adolescente. */

// id: txtIdEdad

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad < 13 || edad > 17)
	{
		alert("No es Adolescente.");
	}
}