/*Al ingresar una edad menor a 18 años
y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/

//Id:
//: txtIdEdad
//: estadoCivil

function mostrar()
{
	if (txtIdEdad.value < 18 && estadoCivil.value != "Soltero")
	{
		alert("'Es muy pequeño para NO ser soltero.'");
	}
}