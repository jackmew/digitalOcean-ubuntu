$(function() {

$( window ).resize(function() {
  // $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
  	// console.log($( window ).width()-200);
   //  $('.jke-ecgChart').ecgChart({
   //      width: $( window ).width()-200
   //  });
});

// firefox not support zoom
if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
    // typing
    $(".typing-panel h1").css("font-size","24px");
    $(".typing-panel p").css("font-size","12px");
    // rotate z
    $("svg").width("150pt");
    $("svg").height("150pt");
    $("#smallDottedCircle").width("150px");
    $("#smallDottedCircle").height("150px");
    $(".dottedCircle").width("225px");
    $(".dottedCircle").height("225px");
    $(".ringLong").width("235px");
    $(".ringLong").height("235px");
    $(".ringPiece").width("300px");
    $(".ringPiece").height("300px");
    // firefox not support svg transform-origin..
    setTimeout(function() {
        $("#z-border").hide();
    }, 4000);

    // firefox svg pulse suck
    $(".jke-ecgChart").remove();
}

});