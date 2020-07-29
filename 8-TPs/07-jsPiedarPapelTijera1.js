/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
// 1 == piedra
// 2 == papel
// 3 == tijera

function piedra()
{
    eleccionMaquina = Math.round(Math.random()*(3 - 1) + 1);

    if (eleccionMaquina == 1)
	{
		alert("La maquina eligio PIEDRA");
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			alert("La maquina eligio PAPEL");
		}
		else
		{
			alert("La maquina eligio TIJERA");
		}
    }
    
    switch(eleccionMaquina)
    {
        case 1:
            alert("Empate.");
            break;
        case 2:
            alert("Perdiste.");
            break;
        case 3:
            alert("Ganaste!");
            break;
    }
}

function papel()
{
    eleccionMaquina = Math.round(Math.random()*(3 - 1) + 1);

    if (eleccionMaquina == 1)
	{
		alert("La maquina eligio PIEDRA");
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			alert("La maquina eligio PAPEL");
		}
		else
		{
			alert("La maquina eligio TIJERA");
		}
    }
    
    switch(eleccionMaquina)
    {
        case 1:
            alert("Ganaste!");
            break;
        case 2:
            alert("Empate.");
            break;
        case 3:
            alert("Perdiste.");
            break;
    }
}

function tijera()
{
    eleccionMaquina = Math.round(Math.random()*(3 - 1) + 1);

    if (eleccionMaquina == 1)
	{
		alert("La maquina eligio PIEDRA");
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			alert("La maquina eligio PAPEL");
		}
		else
		{
			alert("La maquina eligio TIJERA");
		}
    }
    
    switch(eleccionMaquina)
    {
        case 1:
            alert("Perdiste");
            break;
        case 2:
            alert("Ganaste!.");
            break;
        case 3:
            alert("Empate.");
            break;
    }
}