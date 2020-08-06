/*

GONZALO SINNOTT SEGURA 1° H

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

- el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
- el precio (validar entre 100 y 300),
- la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
- la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar()
{
	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contadorJabon = 0;
	var contadorBarbijo = 0;
	var contadorAlcohol = 0;
	var unidadesBarbijo = 0;
	var	unidadesAlcohol = 0;
	var	unidadesJabon = 0;
	var precioJabonMaSCaro;
	var cantidadJabonMasCaro;
	var fabricanteJabonMasCaro;
	var productoMasComprado;
	var promedioCompra;


	//Restringir el ingreso a 5 productos.
	for(i = 0 ; i < 5 ; i++)
	{
		//Ingreso y validacion de datos.
		do{
			producto = prompt("Ingrese el producto. (barbijo, jabón o alcohol)");
		}while(producto != "barbijo" && producto != "jabón" && producto != "alcohol");

		do{
			precio = prompt("Ingrese el precio. (Entre $100 y $300)");
			precio = parseInt(precio);
		}while(precio < 100 || precio > 300 || isNaN(precio));

		do{
			cantidad = prompt("Ingrese cantidad (max 1000 unidades");
			cantidad = parseInt(cantidad);
		}while(cantidad < 1 || cantidad > 1000 || isNaN(cantidad));

		marca = prompt("Ingrese marca.");

		fabricante = prompt("Ingrese fabricante.");

		//IF para contabilizar productos (SI LO HAGO OCN SWITCH SE CONTABILIZAN MAL LOS PRODUCTOS)
		if( producto == "barbijo")
		{
			contadorBarbijo++;
			unidadesBarbijo = unidadesBarbijo + cantidad;
		}
		else
		{
			if (producto == "jabón")
			{
				contadorJabon++
				unidadesJabon = unidadesJabon + cantidad;
				if(precio > precioJabonMaSCaro || precioJabonMaSCaro == null)
				{
					precioJabonMaSCaro = precio;
					cantidadJabonMasCaro = cantidad;
					fabricanteJabonMasCaro = fabricante;
				}
			}
			else
			{
				if(producto == "alcohol")
				{
					contadorAlcohol++
					unidadesAlcohol = unidadesAlcohol + cantidad;
				}
			}
		}
			
	}

	//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	document.write("El fabricante de jabon mas caro es " + fabricanteJabonMasCaro + " y se compraron " + cantidadJabonMasCaro + " unidades <br>");
	
	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	if(unidadesBarbijo >= unidadesJabon && unidadesBarbijo >= unidadesAlcohol)
	{
		productoMasComprado = "barbijo";
		promedioCompra = unidadesBarbijo / contadorBarbijo;
	}
	else
	{
		if(unidadesJabon >= unidadesBarbijo && unidadesJabon >= unidadesAlcohol)
		{
			productoMasComprado = "jabón";
			promedioCompra = unidadesJabon / contadorJabon;
		}
		else
		{
			if(unidadesAlcohol >= unidadesJabon && unidadesAlcohol >= unidadesBarbijo)
			{
				productoMasComprado = "alcohol";
				promedioCompra = unidadesAlcohol / contadorAlcohol;
			}		
		}
	}

	document.write("El producto mas comprado es " + productoMasComprado + " con un promedio de " + promedioCompra + " unidades por compra <br>");

	//c) Cuántas unidades de Barbijos se compraron en total

	document.write( "Se compraron " + unidadesBarbijo + " barbijos.");

}
