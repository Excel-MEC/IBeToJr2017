var flag=0;

$(document).ready(function(){
     $('.column').on('click',clickhandler);
     function clickhandler(){
     	var clickcolumn = $(this).attr('id');
      console.log(clickcolumn);
     	if (clickcolumn=="IBeTo") {
     		if (flag==0) {
	     		$('.column').off('click');
          setTimeout(()=>{
            $(".event,.rules,.timeline,.contact").css({"width":"0%","height":"0","border":"none"});
  	    		$(".rules,.event,.timeline,.contact").css("border","none");
  	    		$(".head").hide();
  	    		if(screen.width >768)
  		    			$(".ibeto").css("width","100%");
  		    		else
  		    			$(".ibeto").css("height","100%");
  	    		flag=1;
  	    		setTimeout(
  	  				function(){
  	    				$('.column').on('click',clickhandler);
  	    				$(".contentibeto").fadeIn(500);
                // sr.reveal('.contentibeto',{duration: 1000,opacity:0},100);
  	  			}, 1000);
          },500);
     		}
     		else{
          $(".contentibeto").slideUp(500,()=>{
  	    		//$(".rules,.event,.timeline,.contact").css("border","solid white 15px");
  	    		$(".head").show();
  	    		flag=0;
       		});
          if(screen.width >768){
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","100%");
          }

          else{
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","100%");
          }
        }
     	}
     	else if (clickcolumn=="Event") {
     		if (flag==0) {
     			$('.column').off('click');
	     		$(".ibeto,.rules,.timeline,.contact").css("width","0%");
	     		$(".ibeto,.rules,.timeline,.contact").css("height","0%");
	    		$(".ibeto,.rules,.timeline,.contact").css("border","none");
	    		$(".head").hide();
	    		if(screen.width >768)
	    			$(".event").css("width","100%");
	    		else
	    			$(".event").css("height","100%");
	    		flag=1;
	    		setTimeout(
	  				function(){
	  					$('.column').on('click',clickhandler);
	    				$(".contentevent").fadeIn(500);
	  			}, 1000);
     		}
     		else{

          $('.contentevent').slideUp(500,()=>{
      		//$(".ibeto,.timeline,.contact").css("border","solid white 15px");
        		$(".head").show();
        		flag=0;
          });
          if(screen.width >768){
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","100%");
          }
          else{
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","100%");
          }
     		}
     	}
     	else if (clickcolumn=="Rules") {
     		if (flag==0) {
     			$('.column').off('click');
	     		$(".ibeto,.event,.timeline,.contact").css("width","0%");
	     		$(".ibeto,.event,.timeline,.contact").css("height","0%");
	    		$(".ibeto,.event,.timeline,.contact").css("border","none");
	    		$(".head").hide();
	    		if(screen.width >768)
	    			$(".rules").css("width","100%");
	    		else
	    			$(".rules").css("height","100%");
	    		flag=1;
	    		setTimeout(
	  				function(){
	  					$('.column').on('click',clickhandler);
	    				$(".contentrule").fadeIn(500);
	  			}, 1000);
     		}
     		else{
          $('.contentrule').slideUp(500,()=>{
        		//$(".ibeto,.timeline,.contact").css("border","solid white 15px");
        		$(".head").show();
        		flag=0;
        		$(".contentrule").hide();
          });
          if(screen.width >768){
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","100%");
          }
          else{
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","100%");
          }
     	  }
      }
     	else if (clickcolumn=="Timeline") {
        window.cname = "";
     		if (flag==0) {
     			$('.column').off('click');
	     		$(".ibeto,.event,.rules,.contact").css("width","0%");
	     		$(".ibeto,.event,.rules,.contact").css("height","0%");
	    		$(".ibeto,.event,.rules,.contact").css("border","none");
	    		$(".head").hide();
	    		if(screen.width >768){
	    			$(".timeline").css("width","100%");
            cname = ".paradesk";
          }
	    		else{
	    			$(".timeline").css("height","100%");
            cname = ".paramob";
          }
	    		flag=1;
	    		setTimeout(
	  				function(){
              console.log(cname);
	  					$('.column').on('click',clickhandler);
	    				$(cname).fadeIn(500);
	  			}, 1000);
     		}
     		else{
          $('.contenttime').fadeOut(500,()=>{
  	    		//$(".ibeto,.event,.rules,.contact").css("border","solid white 15px");
  	    		$(".head").show();
  	    		flag=0;
          });
          if(screen.width >768){
	     			$(".ibeto,.event,.timeline,.rules,.contact").css("width","20%");
	     			$(".ibeto,.event,.timeline,.rules,.contact").css("height","100%");
	     		}
     			else{
     				$(".ibeto,.event,.timeline,.rules,.contact").css("height","20%");
     				$(".ibeto,.event,.timeline,.rules,.contact").css("width","100%");
     			}
     		}
     	}
     	else{
     		if (flag==0) {
     			$('.column').off('click');
     			$(".ibeto,.event,.timeline,.rules").css("width","0%");
     			$(".ibeto,.event,.timeline,.rules").css("height","0%");
	    		$(".ibeto,.event,.timeline,.rules").css("border","none");
	    		$(".head").hide();
	    		if(screen.width >768)
	    			$(".contact").css("width","100%");
	    		else
	    			$(".contact").css("height","100%");
	    		flag=1;
	    		setTimeout(
	  				function(){
	    				$(".contentcontact").fadeIn(500);
	    				$('.column').on('click',clickhandler);
	  			}, 1000);
     		}
     		else{
          $('.contentcontact').slideUp(500,()=>{
  	    		//$(".ibeto,.event,.timeline,.rules").css("border","solid white 15px");
  	    		$(".head").show();
  	    		flag=0;
          });
          if(screen.width >768){
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","100%");
          }
          else{
            $(".ibeto,.event,.timeline,.rules,.contact").css("height","20%");
            $(".ibeto,.event,.timeline,.rules,.contact").css("width","100%");
          }
     		}
     	}
     }

});
