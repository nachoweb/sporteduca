/* Author: Nachoelg   */

$(function(){

// Inicio del carrusel	

var $carr=$("#carrusel");
$carr.find('img').removeClass('hidden');
$carr.simplecarousel({

  slidespeed:1700 ,
  auto: 4000,
  width: 520,
  height: 230,
  next: $('header')

});



});

