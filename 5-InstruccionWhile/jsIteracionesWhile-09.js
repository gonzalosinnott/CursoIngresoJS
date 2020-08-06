/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var primeraVez;

	primeraVez = true
		
	do{
		do{
			numeroIngresado = prompt("Ingrese un Numero");
			numeroIngresado = parseInt(numeroIngresado)
		}while(isNaN(numeroIngresado));

		if(primeraVez)
		{
			primeraVez = false;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado < numeroMinimo)
			{	
					numeroMinimo = numeroIngresado;
			}
		}		

		respuesta = confirm("¿Desea continuar?");

	}while(respuesta == true);

	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}