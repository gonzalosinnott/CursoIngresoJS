/*Enunciado b)”sin banderas”

SINNOTT SEGURA GONZALO 1° H

Se debe ingresar 10:
- nombre
- edad(0 y 115)
- altura(30 y 230)
- sexo
- Dinero(puede ser positivo o negativo, pero debe ser un número)
- CantidadDeHijos(0 y 10)

despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos*/

function mostrar()
{
	var nombre;
	var edad;
	var altura;
	var sexo;
	var dinero;
	var cantidadDeHijos;
	var contadorEntradas;
	var edadMasViejo;
	var nombreMasViejo;
	var contadorMujeres;
	var acumuladorEdadMujeres;
	var edadMujerMasJoven;
	var nombreMujerMasJoven;
	var promedioEdadMujeres;


	contadorEntradas = 0;
	contadorMujeres = 0;
	acumuladorEdadMujeres = 0;

	for(contadorEntradas = 0 ; contadorEntradas < 10 ; contadorEntradas++)
	{
		nombre = prompt("¿Nombre?");

		do{
			sexo =  prompt("¿Sexo (M o F)?");
		}while(sexo !="M" && sexo != "F");

		do{
			edad = prompt("¿Edad?");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad < 0 || edad > 115);

		do{
			altura = prompt("¿Altura (en centimetros)?");
			altura = parseInt(altura);
		}while(isNaN(altura) || altura < 30 || altura > 230);

		do{
			dinero = prompt("¿Cantidad de dinero?");
		}while(isNaN(dinero));

		do{
			cantidadDeHijos = prompt("¿Cantidad de Hijos (0 a 10)?");
		}while(isNaN(cantidadDeHijos) || cantidadDeHijos < 0 || cantidadDeHijos > 10);

		// nombre de la persona con edad más vieja
		if(contadorEntradas == 0)
		{
			edadMasViejo = edad;
			nombreMasViejo = nombre;			
		}
		else
		{
			if(edad > edadMasViejo)
			{
				edadMasViejo = edad;
				nombreMasViejo = nombre;
			}
		}

		//promedio de altura de las mujeres
		//nombre de la mujer más joven
		if (sexo == "F")
		{
			contadorMujeres++;
			acumuladorEdadMujeres = acumuladorEdadMujeres + edad;

			if(contadorMujeres > 0)
			{
				edadMujerMasJoven = edad;
				nombreMujerMasJoven = nombre;			
			}
			else
			{
				if(edad < edadMujerMasJoven)
				{
					edadMujerMasJoven = edad;
					nombreMujerMasJoven = nombre;
				}
			}
		}
	}	
		
	//1- nombre de la persona con edad más vieja
	
	if (nombreMasViejo != null)
	{
		console.log("La persona mas vieja es " + nombreMasViejo);
	}

	//2- promedio de altura de las mujeres

	if(contadorMujeres != 0)
	{
		promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;
	}

	if (promedioEdadMujeres != null)
	{
		console.log("El promedio de edad de las Mujeres es " + promedioEdadMujeres);
	}

	//3- nombre de la mujer más joven
	
	if (nombreMujerMasJoven != null)
	{
		console.log("La mujer mas joven es " + nombreMujerMasJoven);
	}
	
}

/*(Enunciado  a)”bandera a full”

SINNOTT SEGURA GONZALO	

de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
- sexo
- altura
- edad
- nombre

se debe informar:
1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()

function mostrar()
{
	var respuesta;
	var sexo;
	var altura;
	var edad;
	var nombre;
	var alturaMujerMasAlta
	var nombreMujerMasAlta;
	var edadHombreMasViejo;
	var nombreHombreMasViejo;
	var primerAdolescente;
	var nombrePrimerAdolescente;

	respuesta = true;
	primerAdolescente = false;

	do{

		nombre = prompt("¿Nombre?");

		do{
			sexo =  prompt("¿Sexo (M o F)?");
		}while(sexo !="M" && sexo != "F");

		do{
			altura = prompt("Altura en centimetros.");
		}while(isNaN(altura))

		do{
			edad = prompt("¿Edad?");
		}while(isNaN(edad));

		if(sexo == "F") 
		{
			if(alturaMujerMasAlta == null || altura > alturaMujerMasAlta)
			{
				alturaMujerMasAlta = altura;
				nombreMujerMasAlta = nombre;
			}
		}
		else
		{
			if(sexo == "M") 
			{
				if(edadHombreMasViejo == null || edad > edadHombreMasViejo)
				{
					edadHombreMasViejo = edad;
					nombreHombreMasViejo = nombre;
				}
			}
		}
			
		if (edad > 12 && edad < 18 && primerAdolescente == false)
		{
			primerAdolescente = true;
			nombrePrimerAdolescente = nombre;
		}
		

		respuesta = confirm("Desea continuar?");

	}while(respuesta == true);

	if(nombreMujerMasAlta != null)
	{
		console.log("La mujer mas alta es " + nombreMujerMasAlta);
	}

	if(nombreHombreMasViejo != null)
	{
		console.log("El hombre mas viejo es " + nombreHombreMasViejo);
	}
	 
	if(nombrePrimerAdolescente != null)
	{
		console.log("El primer adolescente ingresado es " + nombrePrimerAdolescente);
	}

}*/
