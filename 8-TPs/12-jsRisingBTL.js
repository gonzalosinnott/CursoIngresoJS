/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos
 nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
 para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

//txtIdEdad
//txtIdSexo
//txtIdEstadoCivil
//txtIdSueldo
//txtIdLegajo
//txtIdNacionalidad

function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivil;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	edadIngresada = prompt("Ingrese su edad.");
	edadIngresada = parseInt(edadIngresada);

	//EDAD
	while (edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Edad incorrecta. Intentelo nuevamente.");
	}

	txtIdEdad.value=edadIngresada;

	//SEXO
	sexoIngresado = prompt("Ingrese sexo (M o F).");
	
	while (sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Sexo incorrecto. Intentelo nuevamente.");
		
	}

	switch (sexoIngresado)
	{
		case "M":
			sexoIngresado = "Masculino";
			break;
		case "F":
			sexoIngresado = "Femenino";
			break;
	}

	txtIdSexo.value=sexoIngresado;

	//ESTADO CIVIL
	estadoCivil = prompt("Ingrese su estado civil. \n 1-Soltero, 2-Casados, 3-Divorciados y 4-Viudos");
	estadoCivil = parseInt(estadoCivil);

	while (estadoCivil < 0 || estadoCivil > 4)
	{
		estadoCivil = prompt("Estado civil incorrecto. Intentelo nuevamente.");
	}

	switch(estadoCivil)
	{
		case 1:
			estadoCivil = "Soltero";
			break;
		case 2:
			estadoCivil = "Casado";
			break;
		case 3:
			estadoCivil = "Divorciado";
			break;
		case 4:
			estadoCivil = "Viudo";
			break;
	}

	txtIdEstadoCivil.value=estadoCivil

	//SUELDO BRUTO
	sueldoBruto = prompt("Ingrese su sueldo bruto");
	sueldoBruto = parseInt(sueldoBruto);

	while (sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Sueldo bruto incorrecto. Intentelo nuevamente.");
	}

	txtIdSueldo.value=sueldoBruto

	//LEGAJO
	numeroLegajo = prompt("Ingrese su Legajo");
	numeroLegajo = parseInt(numeroLegajo);

	while (numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt("Legajo incorrecto. Intentelo nuevamente.");
	}

	txtIdLegajo.value=numeroLegajo

	//NACIONALIDAD
	nacionalidad = prompt("Ingrese Nacionalidad. \n A-Argentinos, E-Extranjeros, N-Nacionalizados.");

	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad !="N")
	{
		nacionalidad = prompt("Nacionalidad incorrecta. Intentelo nuevamente.");
	}
		
	switch(nacionalidad)
	{
		case "A":
			nacionalidad = "Argentino";
			break;
		case "E":
			nacionalidad = "Extranjero";
			break;
		case "N":
			nacionalidad = "Nacionalizado"
			break;
	}
		
	txtIdNacionalidad.value=nacionalidad
}
