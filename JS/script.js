function goToS1() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 800);
}

function goToS2() {
    $('html, body').animate({ scrollTop: $("#section2").offset().top }, 800);
}

function goToS3() {
    $('html, body').animate({
        scrollTop: $("#section3").offset().top
    }, 800);
}


function apparaitreFormulaire() {

    setTimeout(function(){
        $('#section2 .blocprincipal form').fadeIn(0).animate({width:"+=60%"},800);
    }, 500 );
}

(function () {
    $(document).ready(function () {
        console.log("dom pret");

        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 100) {
                // Si un défillement de 100 pixels ou plus.
                // Ajoute le bouton
                $('#flecheHautPage').fadeIn(10);
            } else {
                // Sinon enlève le bouton
                $('#flecheHautPage').fadeOut(10);
            }
            if(jQuery(this).scrollTop() >= 500){
                apparaitreFormulaire();
            }
        });
    });
})();
