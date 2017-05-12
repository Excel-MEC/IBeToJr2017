var flag=0;

$(document).ready(function(){
     $('.column').click(clickhandler);
     function clickhandler(){
     	var clickcolumn = $(this).attr('id');
     	if (clickcolumn=="IBeTo") {
     		if (flag==0) {
     		$('.ibeto').off('click');
    		$(".event,.rules,.timeline,.contact").css({"width":"0%","margin":"0"});
    		//$(".rules,.event,.timeline,.contact").css("border","none");
    		$(".event_head,.rules_head,.timeline_head,.contact_head").hide();
    		$(".ibeto").css("width","100%");
    		$(".ibeto_head").css("top","20%");
    		$(".ibeto_head").css("transform","translate(-50%,0)");
    		flag=1;
    		setTimeout(
  				function(){

    				$('.column').on('click',clickhandler);
    				$(".contentibeto").show();
  			}, 1000);
     		}
     		else{
	     		$(".ibeto,.event,.timeline,.rules,.contact").css({"width":"20%","margin":"10px"});
	    		//$(".rules,.event,.timeline,.contact").css("border","solid white 15px");
	    		$(".event_head,.rules_head,.timeline_head,.contact_head").show();
	    		$(".ibeto_head").css("top","50%");
	    		$(".ibeto_head").css("transform","translate(-50%,-50%)");
	    		flag=0;
	    		$(".contentibeto").hide();
     		}
     	}
     	else if (clickcolumn=="Event") {
     		if (flag==0) {
     			$('.column').off('click');
	     		$(".ibeto,.rules,.timeline,.contact").css({"width":"0%","margin":"0"});
	    		$(".ibeto,.rules,.timeline,.contact").css("border","none");
	    		$(".ibeto_head,.rules_head,.timeline_head,.contact_head").hide();
	    		$(".event").css("width","100%");
	    		$(".event_head").css("top","3%");
	    		$(".event_head").css("transform","translate(-50%,0)");
	    		flag=1;
	    		setTimeout(
	  				function(){
	  					$('.column').on('click',clickhandler);
	    				$(".contentevent").show();
	  			}, 1000);
     		}
     		else{
     		$(".ibeto,.event,.timeline,.rules,.contact").css({"width":"20%","margin":"10px"});
    		//$(".ibeto,.timeline,.contact").css("border","solid white 15px");
    		$(".ibeto_head,.rules_head,.timeline_head,.contact_head").show();
    		$(".event_head").css("top","50%");
    		$(".event_head").css("transform","translate(-50%,-50%)");
    		flag=0;
    		$(".contentevent").hide();
     		}
     	}
     	else if (clickcolumn=="Rules") {
     		if (flag==0) {
     			$('.column').off('click');
	     		$(".ibeto,.event,.timeline,.contact").css({"width":"0%","margin":"0"});
	    		$(".ibeto,.event,.timeline,.contact").css("border","none");
	    		$(".ibeto_head,.event_head,.timeline_head,.contact_head").hide();
	    		$(".rules").css("width","100%");
	    		$(".rules_head").css("top","3%");
	    		$(".rules_head").css("transform","translate(-50%,0)");
	    		flag=1;
	    		setTimeout(
	  				function(){
	  					$('.column').on('click',clickhandler);
	    				$(".contentrule").show();
	  			}, 1000);
     		}
     		else{
     		$(".ibeto,.event,.timeline,.rules,.contact").css({"width":"20%","margin":"10px"});
    		//$(".ibeto,.timeline,.contact").css("border","solid white 15px");
    		$(".ibeto_head,.event_head,.rules_head,.timeline_head,.contact_head").show();
    		$(".rules_head").css("top","50%");
    		$(".rules_head").css("transform","translate(-50%,-50%)");
    		flag=0;
    		$(".contentrule").hide();
     		}
     	}
     	else if (clickcolumn=="Timeline") {
     		if (flag==0) {
     			$('.column').off('click');
	     		$(".ibeto,.event,.rules,.contact").css({"width":"0%","margin":"0"});
	    		$(".ibeto,.event,.rules,.contact").css("border","none");
	    		$(".ibeto_head,.event_head,.rules_head,.contact_head").hide();
	    		$(".timeline").css("width","100%");
	    		$(".timeline_head").css("top","3%");
	    		$(".timeline_head").css("transform","translate(-50%,0)");
	    		flag=1;
	    		setTimeout(
	  				function(){
	  					$('.column').on('click',clickhandler);
	    				$(".contenttime").show();
	  			}, 1000);
     		}
     		else{
	     		$(".ibeto,.event,.timeline,.rules,.contact").css({"width":"20%","margin":"10px"});
	    		//$(".ibeto,.event,.rules,.contact").css("border","solid white 15px");
	    		$(".ibeto_head,.event_head,.rules_head,.timeline_head,.contact_head").show();
	    		$(".timeline_head").css("top","50%");
	    		$(".timeline_head").css("transform","translate(-50%,-50%)");
	    		flag=0;
	    		$(".contenttime").hide();
     		}
     	}
     	else{
     		if (flag==0) {
     			$('.column').off('click');
     			$(".ibeto,.event,.timeline,.rules").css({"width":"0%","margin":"0"});
	    		$(".ibeto,.event,.timeline,.rules").css("border","none");
	    		$(".ibeto_head,.event_head,.rules_head,.timeline_head").hide();
	    		$(".contact").css("width","100%");
	    		$(".contact_head").css("top","15%");
	    		$(".contact_head").css("transform","translate(-50%,0)");
	    		flag=1;
	    		setTimeout(
	  				function(){
	    				$(".contentcontact").show();
	    				$('.column').on('click',clickhandler);
	  			}, 1000);
     		}
     		else{
     			$(".ibeto,.event,.timeline,.rules,.contact").css({"width":"20%","margin":"10px"});
	    		//$(".ibeto,.event,.timeline,.rules").css("border","solid white 15px");
	    		$(".ibeto_head,.event_head,.rules_head,.timeline_head,.contact_head").show();
	    		$(".contact_head").css("top","50%");
	    		$(".contact_head").css("transform","translate(-50%,-50%)");
	    		flag=0;
	    		$(".contentcontact").hide();
     		}
     	}
     }

});
