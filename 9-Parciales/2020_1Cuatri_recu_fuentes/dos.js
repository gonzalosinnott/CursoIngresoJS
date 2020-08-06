/*

SINNOTT SEGURA GONZALO

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
- Tipo validad("arena";"cal";"cemento")
- Cantidad de bolsas,
- Precio por bolsa (más de cero ),

al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
d) El tipo mas caro*/


function mostrar()
{
  var respuesta;
  var producto;
  var cantidad;
  var precioPorBolsa;
  var cantidadTotal = 0;
  var precioFinal;
  var contadorArena = 0;
  var contadorCal = 0;
  var contadorCemento = 0;
  var precioMasCaro;
  var productoMasCaro;
  var contadorMasCantidad = 0;

  respuesta = true;

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

    switch(producto)
    {
      case "arena":
        contadorArena = contadorArena + cantidad;
        if(precioPorBolsa > precioMasCaro || precioMasCaro == null)
				{
          precioMasCaro = precioPorBolsa;
          productoMasCaro = producto
				}
        break;
      case "cal":
        contadorCal = contadorCal + cantidad;
        if(precioPorBolsa > precioMasCaro || precioMasCaro == null)
				{
          precioMasCaro = precioPorBolsa;
          productoMasCaro = producto
				}
        break;
      case "cemento":
        contadorCemento = contadorCemento + cantidad;
        if(precioPorBolsa > precioMasCaro || precioMasCaro == null)
				{
          precioMasCaro = precioPorBolsa;
          productoMasCaro = producto
				}
        break;
    }

    precioFinal = precioFinal + (cantidad * precioPorBolsa);


    respuesta = confirm("¿Desea continuar?");
  }

  //a) El importe total a pagar , bruto sin descuento 
  //b) el importe total a pagar con descuento(solo si corresponde)
  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  if(cantidadTotal > 30)
  {
    precioConDescuento = precioFinal * 0.75
    document.write("Importe final con descuento por comprar mas de 30 bolsas: $ " + precioConDescuento + "<br>");
  }
  else
  {
    if(cantidadTotal > 10 && cantidadTotal < 31)
    {
      precioConDescuento = precioFinal * 0.85
      document.write("Importe final con descuento por comprar mas de 10 bolas: " + precioConDescuento + "<br>");
    }
    else
    {
      document.write("Importe final: $ " + precioFinal + "<br>");
    }
  }

  //d) Informar el tipo con mas cantidad de bolsas.
  if(contadorArena >= contadorCal && contadorArena >= contadorCemento)
	{
    productoMasCantidad = "Arena";
    contadorMasCantidad = contadorArena;
	}
	else
	{
		if(contadorCal >= contadorArena && contadorCal >= contadorCemento)
		{
      productoMasCantidad = "Cal";
      contadorMasCantidad = contadorCal;
		}
		else
		{
			if(contadorCemento >= contadorArena && contadorCemento >= contadorCal)
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
