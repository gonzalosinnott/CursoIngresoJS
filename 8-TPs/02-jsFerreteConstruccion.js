/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//txtIdLargo
//txtIdAncho
//txtIdRadio

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadHilos;
    var cantidadAlambre;
    

    largo = txtIdLargo.value;   
    ancho = txtIdAncho.value;
    cantidadHilos = 3

    largo = parseInt(txtIdLargo.value);
    ancho = parseInt(txtIdAncho.value);
    cantidadAlambre = (largo*2 + ancho*2) * cantidadHilos;

    alert(cantidadAlambre)
}
function Circulo () 
{
    var radio;
    var cantidadHilos;
    var circunferencia;
    var cantidadAlambre;
    
    radio = txtIdRadio.value;
    radio = parseInt(txtIdRadio.value);
    circunferencia = 2 * Math.PI * radio; 
    cantidadHilos = 3

    cantidadAlambre = circunferencia * cantidadHilos;
    alert(cantidadAlambre);
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var cantidadCemento;
    var cantidadCal;    
    
    largo = txtIdLargo.value;   
    ancho = txtIdAncho.value;
    largo = parseInt(txtIdLargo.value);
    ancho = parseInt(txtIdAncho.value);
    
    area = largo * ancho
    cantidadCemento = area *2;
    cantidadCal = area *3;
    
    alert("Se necesitan " + cantidadCemento + " bolsas de cemento y " + cantidadCal + " bolsas de cal.");
}