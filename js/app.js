		$(document).ready(function() {

	    	$('#pagepiling').pagepiling({
			    sectionsColor: ['#181A1A','#732BC4','#EEEEEE', '#181A1A'],
				keyboardScrolling: true,
				css3: true,
				loopBottom: true,
				loopTop: true,
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Title', 'Dev-Blog', 'Keeper', 'Contact-Me'],
					'bulletsColor': 'white'
			   	},
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    }
			});
        })