/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  var respuesta;
  var producto;
  var cantidad;
  var precioPorBolsa;
  var cantidadTotal = 0;
  var precioFinal;
  var acumuladorArena = 0;
  var acumuladorCal = 0;
  var acumuladorCemento = 0;
  var precioMasCaro;
  var productoMasCaro;

  respuesta = true;
  precioFinal = 0;

  while(respuesta == true)
  {
    //VALIDAR PRODUCTO
    do{
      producto = prompt("Ingrese producto (arena, cal o cemento).");
    }while(producto !="arena" && producto !="cal" && producto !="cemento");

    //VALIDAR CANTIDAD
    do{
      cantidad = prompt("Ingrese cantidad.")
      cantidad = parseInt(cantidad);
    }while(cantidad < 1);

    cantidadTotal = cantidadTotal + cantidad;

    //VALIDAR PRECIO
    do{
      precioPorBolsa = prompt("Ingrese precio x unidad.")
      precioPorBolsa = parseInt(precioPorBolsa);
    }while(precioPorBolsa < 1);


    if(precioPorBolsa > precioMasCaro || precioMasCaro == null)
    {
      precioMasCaro = precioPorBolsa;
      productoMasCaro = producto
    }

    switch(producto)
    {
      case "arena":
        acumuladorArena = acumuladorArena + cantidad;
        break;
      case "cal":
        acumuladorCal = acumuladorCal + cantidad;
        break;
      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidad;
        break;
    }

    respuesta = confirm("¿Desea continuar?");
  }
  
  //a) El importe total a pagar , bruto sin descuento 
  //b) el importe total a pagar con descuento(solo si corresponde)
  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  precioFinal = precioFinal + (cantidad * precioPorBolsa);
  
  if(cantidadTotal > 30)
  {
    precioFinal = precioFinal * 0.75
    document.write("Importe final con descuento por comprar mas de 30 bolsas: $ " + precioFinal + "<br>");
  }
  else
  {
    if(cantidadTotal > 10)
    {
      precioFinal = precioFinal * 0.85
      document.write("Importe final con descuento por comprar mas de 10 bolas: " + precioFinal + "<br>");
    }
    else
    {
      document.write("Importe final: $ " + precioFinal + "<br>");
    }
  }

  //d) Informar el tipo con mas cantidad de bolsas.
  if(contadorArena > contadorCal && contadorArena > acumuladorCemento)
	{
    productoMasCantidad = "Arena";
    contadorMasCantidad = contadorArena;
	}
	else
	{
		if(contadorCal > contadorArena && contadorCal >= acumuladorCemento)
		{
      productoMasCantidad = "Cal";
      contadorMasCantidad = contadorCal;
		}
		else
		{
			  productoMasCantidad = "Cemento";
        contadorMasCantidad = contadorCemento;
			}
		}
  }

  document.write("El producto con mas cantidad de bolsas es: " + productoMasCantidad + " con " + contadorMasCantidad + " bolsas <br>");

  //f) El tipo mas caro*/
  document.write(productoMasCaro + " es el producto mas caro.")

}
