function goToS1() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 800);
}

function goToS2() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 800);
}

function goToS3() {
    $('html, body').animate({
        scrollTop: $("#section3").offset().top
    }, 800);
}

function disparaitre() {
    $('#damier').fadeOut(800).css('display', 'flex');
    $('.p').fadeOut(800);
    $('.i').fadeOut(800);
}

(function () {
    $(document).ready(function () {
        console.log("dom pret");
    });
})();
