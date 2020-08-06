/*

SINNOTT SEGURA GONZALO 1° H

En el ingreso a un viaje en avión nos solicitan:
-nombre, 
-nacionalidad
-edad
-sexo("f" o "m")
-estado civil("soltero", "casado" o "viudo")
-temperatura corporal.

a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var temperaturaMax;
	var nacionalidadTemperaturaMax;
	var mayoresDeEdadSolteros = 0;
	var mujeresViudas = 0;
	var mujeresSolteras = 0;
	var mujeresCasadas = 0;
	var edadCasadas;
	var promedioCasadas;
	var mayoresConTemperatura = 0;
	
	respuesta = true;

	do{
		nombre = prompt("¿Nombre?");

		nacionalidad = prompt("¿Nacionalidad?");

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
			temperatura = prompt("¿Temperatura?")
			temperatura = parseInt(temperatura);
		}while (isNaN(temperatura));
		
		if(temperatura > temperaturaMax || temperaturaMax == null)
		{
			temperaturaMax = temperatura;
			nacionalidadTemperaturaMax = nacionalidad;
		}

		if(edad > 17 && estadoCivil == "soltero")
		{
			mayoresDeEdadSolteros++;
		}

		if(sexo == "f")
		{
			if(estadoCivil == "viudo")
			{
				mujeresViudas++;
			}
			else
			{
				if(estadoCivil == "soltero")
				{
					mujeresSolteras++;
				}
				else
				{
					if(estadoCivil == "casado")
					{
						edadCasadas = edadCasadas + edad;
						mujeresCasadas++;
					}
				}
			}
		}

		if(edad > 60 && temperatura > 38)
		{
			mayoresConTemperatura++;
		}

		respuesta = confirm("Desea continuar?");

	}while(respuesta == true);

	promedioCasadas = edadCasadas / mujeresCasadas;

	//a) la Nacionalidad de la persona con mas temperatura.
	document.write("La persona con mas temperatura es de nacionalidad " + nacionalidadTemperaturaMax + " con " + temperaturaMax + " grados. <br>")
	
	//b) Cuantos mayores de edad( más de 17) estan solteros
	document.write("Hay " + mayoresDeEdadSolteros + " personas mayores de edad que son solteros. <br>")

	//c) La cantidad de Mujeres que hay solteras o viudas.
	document.write("Hay " + mujeresSolteras + " mujeres solteros y " + mujeresViudas + " mujeres viudas <br>");

	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	document.write("Hay " + mayoresConTemperatura + " personas de mas de 60 años con mas de 38 grados de temperatura. <br>");

	//e) El promedio de edad entre las mujeres casadas.
	document.write("El promedio de edad entre las mujeres casadas es " + promedioCasadas);
}
