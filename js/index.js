var flag=0;

$(document).ready(function(){
	
	$(".ibeto").click(function(){
    	if (flag==0) {
    		$(".rules,.timeline,.contact").hide();
    		$(".ibeto").css("width","100%");
    		$(".ibeto_head").css("top","20%");
    		$(".ibeto_head").css("transform","translate(-50%,0)");
    		flag=1;
    		setTimeout(
  				function(){
    				$(".contentibeto").show();
  			}, 1000);	
 	  	}
    	else{
    		$(".rules,.timeline,.contact").show();
    		$(".ibeto").css("width","25%");
    		$(".ibeto_head").css("top","50%");
    		$(".ibeto_head").css("transform","translate(-50%,-50%)");
    		flag=0;
    		$(".contentibeto").hide();
    	}
    });
    $(".rules").click(function(){
    	if (flag==0) {
    		$(".ibeto,.timeline,.contact").hide();
    		$(".rules").css("width","100%");
    		$(".rules_head").css("top","3%");
    		$(".rules_head").css("transform","translate(-50%,0)");
    		flag=1;
    		setTimeout(
  				function(){
    				$(".contentrule").show();
  			}, 1000);	
    	}
    	else{
    		$(".ibeto,.timeline,.contact").show();
    		$(".rules").css("width","25%");
    		$(".rules_head").css("top","50%");
    		$(".rules_head").css("transform","translate(-50%,-50%)");
    		flag=0;
    		$(".contentrule").hide();
    	}
    });
     $(".timeline").click(function(){
    	if (flag==0) {
    		$(".ibeto,.rules,.contact").hide();
    		$(".timeline").css("width","100%");
    		$(".timeline_head").css("top","3%");
    		$(".timeline_head").css("transform","translate(-50%,0)");
    		flag=1;
    		setTimeout(
  				function(){
    				$(".contenttime").show();
  			}, 1000);	
    	}
    	else{
    		$(".ibeto,.rules,.contact").show();
    		$(".timeline").css("width","25%");
    		$(".timeline_head").css("top","50%");
    		$(".timeline_head").css("transform","translate(-50%,-50%)");
    		flag=0;
    		$(".contenttime").hide();
    	}
    });
      $(".contact").click(function(){
    	if (flag==0) {
    		$(".ibeto,.timeline,.rules").hide();
    		$(".contact").css("width","100%");
    		$(".contact_head").css("top","15%");
    		$(".contact_head").css("transform","translate(-50%,0)");
    		flag=1;
    		setTimeout(
  				function(){
    				$(".contentcontact").show();
  			}, 1000);	
    	}
    	else{
    		$(".ibeto,.timeline,.rules").show();
    		$(".contact").css("width","25%");
    		$(".contact_head").css("top","50%");
    		$(".contact_head").css("transform","translate(-50%,-50%)");
    		flag=0;
    		$(".contentcontact").hide();
    	}
    });
	
});	