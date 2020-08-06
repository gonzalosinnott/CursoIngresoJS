/*Enunciado:
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/


function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var temperaturaMax;
	var nombreTemperaturaMax;
	var mayoresDeEdadViudos = 0;
	var hombresSolteros = 0;
	var hombresViudos = 0;
	var mayoresConTemperatura = 0;
	var edadSolteros = 0;
	var promedioSolteros;

	respuesta = true;

	do{
		nombre = prompt("¿Nombre?");

		do{
			edad = prompt("¿Edad?")
			edad = parseInt(edad);
		}while (isNaN(edad) || edad < 1);

		do{
			sexo = prompt("¿Sexo? (f o m)");
		}while (sexo != "f" && sexo != "m");

		do{
			estadoCivil = prompt("¿Estado Civil? (soltero, casado o viudo)");
		}while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do{
			temperatura = prompt("Temperatura?")
			temperatura = parseInt(temperatura);
		}while (isNaN(temperatura));
		
		if(temperatura > temperaturaMax || temperaturaMax == null)
		{
			temperaturaMax = temperatura;
			nombreTemperaturaMax = nombre;
		}

		if(edad > 18 && estadoCivil == "viudo")
		{
			mayoresDeEdadViudos++;
		}

		if(sexo == "m")
		{
			if(estadoCivil == "viudo")
			{
				hombresViudos++;
			}
			else
			{
				if(estadoCivil == "soltero")
				{
					hombresSolteros++
					edadSolteros = edadSolteros + edadSolteros
				}
			}
		}

		if(edad > 60 && temperatura > 38)
		{
			mayoresConTemperatura++;
		}

		respuesta = confirm("Desea continuar?");

	}while(respuesta == true);

	promedioSolteros = edadSolteros / hombresSolteros;

	//a) El nombre de la persona con mas temperatura.
	document.write("La persona con mas temperatura es " + nombreTemperaturaMax + " con " + temperaturaMax + " grados. <br>")
	
	//b) Cuantos mayores de edad estan viudos
	document.write("Hay " + mayoresDeEdadViudos + " personas mayores de edad que son viudos. <br>")

	//c) La cantidad de hombres que hay solteros o viudos.
	document.write("Hay " + hombresSolteros + " hombres solteros y " + hombresViudos + " hombres viudos <br>");

	//d) cuantas personas de la tercera edad(mas de 60 años) , tienen mas de 38 de temperatura
	document.write("Hay " + mayoresConTemperatura + " personas de mas de 60 años con mas de 38 grados de temperatura. <br>");

	//e) El promedio de edad entre los hombres solteros.*/
	document.write("El promedio de edad entre los hombres solteros es " + promedioSolteros);
}
