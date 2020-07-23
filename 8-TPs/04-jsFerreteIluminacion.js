/*
SINNOTT SEGURA GONZALO 

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//txtIdCantidad
//Marca (ArgentinaLuz, FelipeLamparas, JeLuz, HazIluminacion,Osram) 
//txtIdprecioDescuento

function CalcularPrecio () 
{
    var cantidad; 
    var marcaIngresada;
    var precio;
    var precioParcial

    cantidad = txtIdCantidad.value;
    cantidad = parseInt(cantidad);

    marcaIngresada = Marca.value

    precio = cantidad * 35;
 
    switch (cantidad)
    {
        case 5:
            if( marcaIngresada == "ArgentinaLuz")
            {
                precioParcial = precio * 0.6;
            }
            else
            {
                if (marcaIngresada != "ArgentinaLuz")
                {
                    precioParcial = precio * 0.7;
                }
            }
            break;
        case 4:
            if (marcaIngresada == "ArgentinaLuz" || marcaIngresada == "FelipeLamparas")
                {
                    precioParcial = precio * 0.75;
                }
                else
                {
                    if (marcaIngresada != "ArgentinaLuz" || marcaIngresada != "FelipeLamparas")
                    {
                        precioParcial = precio * 0.8;
                    }
                }
            break;
        case 3:
            if (marcaIngresada == "ArgentinaLuz")
            {
                precioParcial = precio * 0.85;
            }
            else
            {
                if (marcaIngresada == "FelipeLamparas")
                {
                    precioParcial = precio * 0.9;
                }
                else
                {
                    if (marcaIngresada != "ArgentinaLuz" || marcaIngresada != "FelipeLamparas")
                    {
                        precioParcial = precio * 0.95;
                    }
                }
            }
            break;
        case 2:
        case 1:
            precioParcial = precio;
            break;
        default:
            precioParcial = precio * 0.5;
            break;
    }

    if (precioParcial > 119)
    {
        impuesto = precioParcial * 0.1;
        
        alert( "Usted debe pagar adicional de IIBB: $ " + impuesto);
    
        txtIdprecioDescuento.value = "$" + (precioParcial + impuesto);
    }
    else
    {
        txtIdprecioDescuento.value = "$" + precioParcial 
    }
}


// VERSION IF/ELSE

    if (cantidad > 5)
    {
        precioParcial = precio * 0.5;
    }
    else
    {
        if (cantidad == 5)
        {
            if( marcaIngresada == "ArgentinaLuz")
            {
                precioParcial = precio * 0.6;
            }
            else
            {
                if (marcaIngresada != "ArgentinaLuz")
                {
                    precioParcial = precio * 0.7;
                }
            }
        }
        else
        {        
            if (cantidad == 4)
            {
                if (marcaIngresada == "ArgentinaLuz" || marcaIngresada == "FelipeLamparas")
                {
                    precioParcial = precio * 0.75;
                }
                else
                {
                    if (marcaIngresada != "ArgentinaLuz" || marcaIngresada != "FelipeLamparas")
                    {
                        precioParcial = precio * 0.8;
                    }
                }
            }
            else
            {
                if (cantidad == 3)
                {
                    if (marcaIngresada == "ArgentinaLuz")
                    {
                        precioParcial = precio * 0.85;
                    }
                    else
                    {
                        if (marcaIngresada == "FelipeLamparas")
                        {
                            precioParcial = precio * 0.9;
                        }
                        else
                        {
                            if (marcaIngresada != "ArgentinaLuz" || marcaIngresada != "FelipeLamparas")
                            {
                                precioParcial = precio * 0.95;
                            }
                        }
                    }
                }            
                else
                {
                    if (cantidad < 3)
                    {
                        precioParcial = precio;
                    }
                }
            }
        }
    }

// VERSION SWITCH(MARCA)

    switch(marcaIngresada)
    {   
        case "ArgentinaLuz":
            if (cantidad > 5)
            {
                precioParcial = precio * 0.5;
            }
            else
            {
                if (cantidad == 5)
                {
                    precioParcial = precio * 0.6;
                }
                else
                {
                    if (cantidad == 4)
                    {
                        precioParcial = precio * 0.75;
                    }
                    else
                    {
                        if (cantidad == 3)
                        {
                            precioParcial = precio * 0.85;
                        }
                        else
                        {
                            if (cantidad < 3)
                            {
                                precioParcial = precio;  
                            }
                        }
                    }
                }
            }
            break;
        case "FelipeLamparas":
            if (cantidad > 5)
            {
                precioParcial = precio * 0.5;
            }
            else
            {
                if (cantidad == 5)
                {
                    precioParcial = precio * 0.7;
                }
                else
                {
                    if (cantidad == 4)
                    {
                        precioParcial = precio * 0.75;
                    }
                    else
                    {
                        if (cantidad == 3)
                        {
                            precioParcial = precio * 0.9;
                        }
                        else
                        {
                            if (cantidad < 3)
                            {
                                precioParcial = precio;  
                            }
                        }
                    }
                }
            }
            break;
        default:
            if (cantidad > 5)
            {
                precioParcial = precio * 0.5;
            }
            else
            {
                if (cantidad == 5)
                {
                    precioParcial = precio * 0.7;
                }
                else
                {
                    if (cantidad == 4)
                    {
                        precioParcial = precio * 0.8;
                    }
                    else
                    {
                        if (cantidad == 3)
                        {
                            precioParcial = precio * 0.95;
                        }
                        else
                        {
                            if (cantidad < 3)
                            {
                                precioParcial = precio;  
                            }
                        }
                    }
                }
            }
            break;
    }
