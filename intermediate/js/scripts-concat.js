window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};(function(e){function h(){}for(var g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),f;f=g.pop();){e[f]=e[f]||h}})((function(){try{console.log();return window.console}catch(a){return window.console={}}})());$(function(){var b=$("#carrusel");b.find("img").removeClass("hidden");b.simplecarousel({slidespeed:1700,auto:6000,width:520,height:230,next:$("#flechaDer"),prev:$("#flechaIzq")});var a=document.getElementById("bgCanvas");a.patternizer({stripes:[{color:"#7a7a78",rotation:200,opacity:50,mode:"plaid",width:75,gap:1,offset:0}],bg:"#ffffff"})});