var flag=0;

$(document).ready(function(){
    $('.column').on('click',clickhandler);
    $('.close_button').on('click',handleClose);
});

function clickhandler(){
 $('.column').off('click');
 $('.close_button').on('click',handleClose);
 if(screen.width<768)
     $('.overlay').css({opacity:0});
 else
     $('.overlay').css({opacity:0.9});
 var clickcolumn = $(this).attr('id');
 console.log(clickcolumn);
 if (clickcolumn=="IBeTo") {
     // setTimeout(()=>{
       $(".event,.rules,.timeline,.contact").css({"width":"0%","height":"0","border":"none"});
       $(".rules,.event,.timeline,.contact").css("border","none");
       $(".head").hide();
       if(screen.width >768)
           $(".ibeto").css("width","100%");
         else
           $(".ibeto,.overlay").css("height","100%");
       setTimeout(
         function(){
           $(".contentibeto").fadeIn(500);
           $('#ibetoClose').fadeIn(500);
           // sr.reveal('.contentibeto',{duration: 1000,opacity:0},100);
       }, 1000);
     // },500);
 }
 else if (clickcolumn=="Event") {
     $(".ibeto,.rules,.timeline,.contact").css("width","0%");
     $(".ibeto,.rules,.timeline,.contact").css("height","0%");
     $(".ibeto,.rules,.timeline,.contact").css("border","none");
     $(".head").hide();
     if(screen.width >768)
       $(".event").css("width","100%");
     else
       $(".event").css("height","100%");
     setTimeout(
       function(){
         $(".contentevent").fadeIn(500);
         $('#eventClose').fadeIn(500);
     }, 1000);
 }
 else if (clickcolumn=="Rules") {
     $(".ibeto,.event,.timeline,.contact").css("width","0%");
     $(".ibeto,.event,.timeline,.contact").css("height","0%");
     $(".ibeto,.event,.timeline,.contact").css("border","none");
     $(".head").hide();
     if(screen.width >768)
       $(".rules").css("width","100%");
     else
       $(".rules").css("height","100%");
     ;
     setTimeout(
       function(){
         $(".contentrule").fadeIn(500);
         $('#rulesClose').fadeIn(500);
     }, 1000);
 }
 else if (clickcolumn=="Timeline") {
   window.cname = "";
   window.closeButton = "";
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
     ;
     setTimeout(
       function(){
         console.log(cname);
         $(cname).fadeIn(500);
         $(closeButton).fadeIn(500);
     }, 1000);
 }
 else{
     $(".ibeto,.event,.timeline,.rules").css("width","0%");
     $(".ibeto,.event,.timeline,.rules").css("height","0%");
     $(".ibeto,.event,.timeline,.rules").css("border","none");
     $(".head").hide();
     if(screen.width >768)
       $(".contact").css("width","100%");
     else
       $(".contact").css("height","100%");
     ;
     setTimeout(
       function(){
         $(".contentcontact").fadeIn(500);
         $('#contactClose').fadeIn(500);
     }, 1000);
 }
}


function handleClose(e){
  var clickButton = e.target.id;
  $('.close_button').off('click');
  $('.overlay').css({opacity:0.7});
  console.log(clickButton);
  if(clickButton=="ibetoClose"){
    $('#ibetoClose').fadeOut(200);
    $(".contentibeto").slideUp(500,()=>{
      //$(".rules,.event,.timeline,.contact").css("border","solid white 15px");
      $(".head").show();
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
  else if(clickButton=="eventClose"){
    $('#eventClose').fadeOut(200);
    $('.contentevent').slideUp(500,()=>{
    //$(".ibeto,.timeline,.contact").css("border","solid white 15px");
      $(".head").show();
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
  else if(clickButton=="rulesClose"){
    $('#rulesClose').fadeOut(200);
    $('.contentrule').slideUp(500,()=>{
      //$(".ibeto,.timeline,.contact").css("border","solid white 15px");
      $(".head").show();
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
  else if(clickButton=="timelineClose"){
    $(closeButton).fadeOut(200);
    $(cname).fadeOut(500,()=>{
      //$(".ibeto,.event,.rules,.contact").css("border","solid white 15px");
      $(".head").show();
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
  else{
    $('#contactClose').fadeOut(200);
    $('.contentcontact').slideUp(500,()=>{
      //$(".ibeto,.event,.timeline,.rules").css("border","solid white 15px");
      $(".head").show();
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
  setTimeout(function(){$('.column').on('click',clickhandler)},500);
}
