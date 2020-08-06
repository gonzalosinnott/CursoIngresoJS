
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
- el tipo (validar "barbijo" , "jabón" o "alcohol") ,
- el precio (validar entre 100 y 300),
- la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
- la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var producto;
	var precio;
	var cantidad;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var contadorAlcohol = 0;
	var cantidadBarbijo = 0;
	var cantidadJabon = 0;
	var cantidadAlcohol = 0;
	var marca;
	var fabricante;

	var precioAlcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasbarato;
	var productoMasComprado;
	var promedioMasComprado;
	

	for(i=0 ; i < 5 ; i++)
	{
		//VALIDAR PRODUCTO
		do{
			producto = prompt("Ingrese el producto (barbijo, jabón o alcohol)");
		}while( producto != "barbijo" && producto != "jabón" && producto != "alcohol" );

		//VALIDAR PRECIO
		do{
			precio = prompt("Ingrese el Precio (entre 100 y 300)");
			precio = parseInt(precio);
		}while(precio < 100 || precio > 300 || isNaN(precio));

		//VALIDAR CANTIDAD
		do{
			cantidad = prompt("Ingrese la cantidad (Max 1000 unidades)");
			cantidad = parseInt(cantidad);
		}while(cantidad < 1 || cantidad > 1000 || isNaN(cantidad));

		marca = prompt("Ingrese marca.");

		fabricante = prompt("Ingrese fabricante.");

		
		switch(producto)
		{
			case "barbijo":
				cantidadBarbijo = cantidadBarbijo + cantidad;
				contadorBarbijo++;
				break;
			case "jabón":
				cantidadJabon = cantidadJabon + cantidad;
				contadorJabon++;
				break;
			case "alcohol":
				cantidadAlcohol = cantidadAlcohol + cantidad;
				contadorAlcohol++
				if(precio < precioAlcoholMasBarato || precioAlcoholMasBarato == null)
				{
					cantidadAlcoholMasBarato = cantidad;
					fabricanteAlcoholMasbarato = fabricante;
					precioAlcoholMasBarato = precio;
				}
				break;
		}
		
	}

	// A - Del más barato de los alcohol, la cantidad de unidades y el fabricante
	document.write("Del alcohol mas barato se compraron " + cantidadAlcoholMasBarato + " y el fabricante es " + fabricanteAlcoholMasbarato + "<br>")

	// B - Del tipo con mas unidades, el promedio por compra
	if(cantidadBarbijo >= cantidadJabon && cantidadBarbijo >= cantidadAlcohol)
	{
		promedioMasComprado = cantidadBarbijo / contadorBarbijo;
		productoMasComprado = "barbijo";
	}
	else
	{
		if(cantidadJabon >= cantidadBarbijo && cantidadJabon >= cantidadAlcohol)
		{
			promedioMasComprado = cantidadJabon / contadorJabon;
			productoMasComprado = "jabón";
		}
		else
		{
			if(cantidadAlcohol >= cantidadBarbijo && cantidadAlcohol >= cantidadJabon)
			{
			promedioMasComprado = cantidadAlcohol / contadorAlcohol;
			productoMasComprado = "alcohol";
			}
		}
	}		
	document.write("El producto mas comprado es " + productoMasComprado + " con un promedio de " + promedioMasComprado + " unidades por compra. <br>")

	//Cuántas unidades de jabones hay en total
	document.write("La cantidad total de JABON es: " + cantidadJabon);
		
	
}
