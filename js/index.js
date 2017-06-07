var flag=0;

$(document).ready(function(){
     $('.column').on('click',clickhandler);
     function clickhandler(){
      if(screen.width<768)
        if( flag ==0 ){
          $('.overlay').css({opacity:0});
        }
        else{
          $('.overlay').css({opacity:0.7});
        }
      else
        if( flag ==0 ){
          $('.overlay').css({opacity:0.9});
        }
        else{
          $('.overlay').css({opacity:0.7});
        }
      var clickcolumn = $(this).attr('id');
      console.log(clickcolumn);
     	if (clickcolumn=="IBeTo") {
     		if (flag==0) {
	     		$('.column').off('click');
          // setTimeout(()=>{
            $(".event,.rules,.timeline,.contact").css({"width":"0%","height":"0","border":"none"});
  	    		$(".rules,.event,.timeline,.contact").css("border","none");
  	    		$(".head").hide();
  	    		if(screen.width >768)
  		    			$(".ibeto").css("width","100%");
  		    		else
  		    			$(".ibeto,.overlay").css("height","100%");
  	    		flag=1;
  	    		setTimeout(
  	  				function(){
  	    				$('.column').on('click',clickhandler);
  	    				$(".contentibeto").fadeIn(500);
                $('#ibetoClose').fadeIn(500);
                // sr.reveal('.contentibeto',{duration: 1000,opacity:0},100);
  	  			}, 1000);
          // },500);
     		}
     		else{
          $('#ibetoClose').fadeOut(200);
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
              $('#eventClose').fadeIn(500);
	  			}, 1000);
     		}
     		else{
          $('#eventClose').fadeOut(200);
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
              $('#rulesClose').fadeIn(500);
	  			}, 1000);
     		}
     		else{
          $('#rulesClose').fadeOut(200);
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
        window.closeButton = "";
     		if (flag==0) {
     			$('.column').off('click');
	     		$(".ibeto,.event,.rules,.contact").css("width","0%");
	     		$(".ibeto,.event,.rules,.contact").css("height","0%");
	    		$(".ibeto,.event,.rules,.contact").css("border","none");
	    		$(".head").hide();
	    		if(screen.width >768){
	    			$(".timeline").css("width","100%");
            cname = ".paradesk";
            closeButton = "#timelineCloseH";
          }
	    		else{
	    			$(".timeline").css("height","100%");
            cname = ".paramob";
            closeButton = "#timelineCloseL";
          }
	    		flag=1;
	    		setTimeout(
	  				function(){
              console.log(cname);
	  					$('.column').on('click',clickhandler);
	    				$(cname).fadeIn(500);
              $(closeButton).fadeIn(500);
	  			}, 1000);
     		}
     		else{
          $(closeButton).fadeOut(200);
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
              $('#contactClose').fadeIn(500);
	  			}, 1000);
     		}
     		else{
          $('#contactClose').fadeOut(200);
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
