$(function() {

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

        // pulse 
        $('.jke-ecgChart').ecgChart({
            // height equal to footer height
            height: 100,
            width: 400
        });
        startPulse();
    }, 4000);

    

});