/* Author: Nachoelg   */

$(function(){

 //alert("esto funciona");
 $('#carrusel').carrusel();
	
});


$.fn.carrusel=function(){
	var that=this
		,$carWrap
		,$img
		,num
		,act
		,leftpos=[]
		,$but
		,interv;

	if(this.length < 1){return;}
	$img=this.find('img');
	if(num=$img.length < 1){return;}
	init();

    function init(){
		var wimg=$img.eq(0).width(),
			himg =$img.eq(0).height();
		that.wrapInner('<div id="wrapCar" style="width:'+(wimg*$img.length)+'px;position:absolute;"></div>')
			.css({'position':'absolute','overflow':'hidden','width':wimg,'height':himg});
		$carWrap=$('#wrapCar');
		$img.show();
		buttons();
        $but=$('.dot').click(handlerClick);
		timer();

    }
	
   function buttons() {
   		var $divbut=$('<div id="dots"></div>');
		$img.each(function(i){
			//leftpos.push($(this).position().left);
            $('<span class="dot"></span>').data('pos',$(this).position().left)
										.appendTo($divbut);
		});
        that.append($divbut);
   
   } 
	
   function handlerClick(e,notDeleteInt){
	   	var $this=$(this),
			left=$this.data('pos');
    	that.stop(true,true)
	    if(notDeleteInt===undefined) clearInterval(interv);
		$but.removeClass('active');
		$this.addClass('active');
		$carWrap.animate({'left':-left},1000);

   }
   function timer(){
		var i=0;
		interv=setInterval(function(){
			console.log(i);
			$but.eq(i).trigger('click',[true]);
			i=i+1;
			if(i==$but.length)
				i=0;


		},4000);   
	}
	
};


