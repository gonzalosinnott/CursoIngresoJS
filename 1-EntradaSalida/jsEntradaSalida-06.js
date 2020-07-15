/* Debemos lograr tomar Los numeros por 
ID.value , transformarlos a enteros
(parseInt) y Sumarlos.
Mostrar el resulto por medio de
"ALERT" ej.: "la suma es 750"*/

//id:
//txtIdNumeroUno
//txtIdNumeroDos

function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	suma = numeroUno + numeroDos;

	alert("La suma es " + suma);
}

