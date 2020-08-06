// Al presionar el botón repetir hasta que utilizamos 'BREAK'.

function mostrar()
{
	contador = 1;

	for (;;contador++)
	{
		document.write(contador + "<br>");
		if(contador > 9)
		{
			break;
		}	
		
									
	}
}