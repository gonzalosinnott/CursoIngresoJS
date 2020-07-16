/*Al ingresar una edad menor a 18 años y
un estado civil distinto a "Soltero", 
NO HACER NADA, pero si no es asi, y es 
soltero y no es menor, mostrar el 
siguiente mensaje: 
'Es soltero y no es menor.' */

//Id:
//txtIdEdad
//estadoCivil

function mostrar()
{
	var edad;
	var estado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estado = estadoCivil.value;

	if (edad < 18 && estado != "Soltero")
	{
	}
	else if (edad > 17 && estado == "Soltero")
	{
		alert("'Es soltero y no es menor.'");
	}
}