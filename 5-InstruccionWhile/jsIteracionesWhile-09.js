/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	numeroMaximo = 0
	numeroMinimo
		
	respuesta = true;
	
	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un Numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado
		}
		else
		{
			numeroMinimo = numeroIngresado
		}
		respuesta = confirm("¿Desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}