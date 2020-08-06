//Al presionar el botón repetir el pedido de número hasta que ingresemos el 9

function mostrar()
{
	for (;;)
	{
		do{
		ingreso = prompt("Ingrese el numero 9.");
		ingreso = parseInt(ingreso);
		}while(isNaN(ingreso))
		
		if(ingreso == 9)
		{
			alert("Ingreso correcto!");
			break;
		}	
	}
}