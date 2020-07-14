/*Al ingresar una edad debemos informar
si la persona es adolescente, edad entre
13 y 17 años (inclusive) */

// id: txtIdEdad

function mostrar()
{
	if (txtIdEdad.value >= 13 && txtIdEdad.value <= 17)
	{
		alert("Adolescente.");
	}
}