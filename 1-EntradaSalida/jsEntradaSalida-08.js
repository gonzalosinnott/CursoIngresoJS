/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),
realizar la operación correcta y 
mostrar el resto entre el dividendo y 
el divisor. ej.: "El resto es 0 ."*/

//Id:
//txtIdNumeroDividendo
//txtIdNumeroDivisor

function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resto = dividendo % divisor;

	alert("El resto es " + resto);
}
