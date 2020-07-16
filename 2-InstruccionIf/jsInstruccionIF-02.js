/*Al ingresar una edad debemos informar
 solo si la persona es mayor de edad */

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
}