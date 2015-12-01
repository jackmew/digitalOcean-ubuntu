$(function() {
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
    }


    var borderPath = document.querySelector('#z-border');
    $("#borlder-length").text(borderPath.getTotalLength()); 

    var circlePath = document.querySelector('#z-circle');
    $("#circle-length").text(circlePath.getTotalLength());

    var letterPath = document.querySelector('#z-letter');
    $("#letter-length").text(letterPath.getTotalLength());


    var z_border_element = document.getElementById("z-border");
    z_border_element.setAttribute("class", "z-border-showing");

    var z_letter_element = document.getElementById("z-letter");
    z_letter_element.setAttribute("class", "z-letter-showing");


    function rotate() {
        z_border_element.setAttribute("class", "z-border-showing z-border-spin");
        z_letter_element.setAttribute("class", "z-letter-showing z-letter-pulse");
    }

    setTimeout(function() {
    
        $("#circleDiv").removeClass("hideCircleDiv");
        $("#circleDiv").addClass("good");

        rotate();
    }, 4000);

    

});