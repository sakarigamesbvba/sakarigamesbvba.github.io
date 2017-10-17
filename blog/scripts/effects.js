window.addEvent('domready', function(){

	var list = $$('ul.linklist li,div#video-nav a');
	list.each(function(element) {
	 
		var fx = new Fx.Styles(element, {duration:100, wait:false});
	 
		element.addEvent('mouseenter', function(){
			fx.start({
				'background-color': '#504642'
			});
		});
	 
		element.addEvent('mouseleave', function(){
			fx.start({
				'background-color': '#3c312d'
			});
		});
	 
	});
	
});