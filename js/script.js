/* Author: Nachoelg   */

$(function(){

// Inicio del carrusel	

var $carr=$("#carrusel");
$carr.find('img').removeClass('hidden');
$carr.simplecarousel({

  slidespeed:1700 ,
  auto: 6000,
  width: 520,
  height: 230,
  next: $('#flechaDer'),
  prev: $('#flechaIzq')

});

// Inicio de patternizer
var bgCanvas = document.getElementById('bgCanvas');

bgCanvas.patternizer({
stripes : [ 
    {
        color: '#7a7a78',
        rotation: 200,
        opacity: 50,
        mode: 'plaid',
        width: 75,
        gap: 1,
        offset: 0
    }
],
bg : '#ffffff'
});


});

