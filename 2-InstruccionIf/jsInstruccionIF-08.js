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
	if (txtIdEdad.value < 18 && estadoCivil.value != "Soltero")
	{
	}
	else if (txtIdEdad.value >= 18 && estadoCivil.value == "Soltero")
	{
		alert("'Es soltero y no es menor.'");
	}
}