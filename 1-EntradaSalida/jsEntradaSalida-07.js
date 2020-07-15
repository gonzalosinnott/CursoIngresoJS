/* Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt), 
realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Id:
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

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;

	alert("La resta es " + resta);		
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var producto;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	producto = numeroUno * numeroDos;

	alert("El producto es " + producto);		
}

function dividir()
{
	var numeroUno;
	var numeroDos
	var cociente;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);

	cociente = numeroUno / numeroDos;

	alert("El cociente es " + cociente);		
}

