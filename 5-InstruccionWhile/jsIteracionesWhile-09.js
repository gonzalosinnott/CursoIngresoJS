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
	numeroMinimo = 0
		
	respuesta='si';
	
	while(respuesta =="si")
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
		respuesta = prompt("¿Desea continuar?(SI/NO).");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}