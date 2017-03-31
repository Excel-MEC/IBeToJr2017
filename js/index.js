var flag=0;

$(document).ready(function(){

	$(".ibeto").click(function(){
    	if (flag==0) {
    		$(".rules,.timeline,.contract").hide();
    		$(".ibeto").css("width","100%");
    		flag=1;
    	}
    	else{
    		$(".rules,.timeline,.contract").show();
    		$(".ibeto").css("width","25%");
    		flag=0;
    	}
    });
    $(".rules").click(function(){
    	if (flag==0) {
    		$(".ibeto,.timeline,.contract").hide();
    		$(".rules").css("width","100%");
    		flag=1;
    	}
    	else{
    		$(".ibeto,.timeline,.contract").show();
    		$(".rules").css("width","25%");
    		flag=0;
    	}
    });
     $(".timeline").click(function(){
    	if (flag==0) {
    		$(".ibeto,.rules,.contract").hide();
    		$(".timeline").css("width","100%");
    		flag=1;
    	}
    	else{
    		$(".ibeto,.rules,.contract").show();
    		$(".timeline").css("width","25%");
    		flag=0;
    	}
    });
      $(".contract").click(function(){
    	if (flag==0) {
    		$(".ibeto,.timeline,.rules").hide();
    		$(".contract").css("width","100%");
    		flag=1;
    	}
    	else{
    		$(".ibeto,.timeline,.rules").show();
    		$(".contract").css("width","25%");
    		flag=0;
    	}
    });
	
});	