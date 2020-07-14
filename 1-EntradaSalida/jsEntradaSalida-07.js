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
	var num1;
	var num2;
	var suma;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	suma = parseInt(num1) + parseInt(num2);

	alert("La suma es " + suma);	
}

function restar()
{
	var num1;
	var num2;
	var resta;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	resta = parseInt(num1) - parseInt(num2);

	alert("La resta es " + resta);		
}

function multiplicar()
{ 
	var num1;
	var num2;
	var producto;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	producto = parseInt(num1) * parseInt(num2);

	alert("El producto es " + producto);		
}

function dividir()
{
	var num1;
	var num2;
	var cociente;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	cociente = parseInt(num1) / parseInt(num2);

	alert("El cociente es " + cociente);		
}

