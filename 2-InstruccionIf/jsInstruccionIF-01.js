/*Al ingresar una edad que sea igual a 15,
 mostrar el mensaje "niña bonita". */

// id: txtIdEdad 

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad == 15)
	{
		alert("niña bonita.");
	}
}