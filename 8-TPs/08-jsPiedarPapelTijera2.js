
//Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página

var eleccionMaquina;
var ContadorDeEmpates=1;
var ContadorDeGanadas=1;
var ContadorDePerdidas=1;

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
			txtIdEmpatadas.value = ContadorDeEmpates++;
            break;
        case 2:
			alert("Perdiste.");
			txtIdPerdidas.value = ContadorDePerdidas++;
            break;
        case 3:
			alert("Ganaste!");
			txtIdGanadas.value = ContadorDeGanadas++;
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
			txtIdGanadas.value = ContadorDeGanadas++;
            break;
        case 2:
			alert("Empate.");
			txtIdEmpatadas.value = ContadorDeEmpates++;
            break;
        case 3:
			alert("Perdiste.");
			txtIdPerdidas.value = ContadorDePerdidas++;
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
			txtIdPerdidas.value = ContadorDePerdidas++;
            break;
        case 2:
			alert("Ganaste!.");
			txtIdGanadas.value = ContadorDeGanadas++;
            break;
        case 3:
			alert("Empate.");
			txtIdEmpatadas.value = ContadorDeEmpates++;
            break;
    }
}