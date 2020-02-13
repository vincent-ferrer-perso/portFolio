function goToSection(numSection) {
    id = '#section'+numSection;
    $('html, body').animate({ scrollTop: $(id).offset().top }, 800);
}


function apparaitreFormulaire() {

    setTimeout(function(){
        $('#section4 .blocprincipal form').fadeIn(0).animate({width:"+=60%"},800);
    }, 500 );
}


function showDivCompetences(id) {
    $("#blocCompetence div").css("display", "none");
    id = '#'+id;
    $(id).css("display", 'block');
}

function showDivCompetencesPrecise(idParent, id) {
    idParent = '#'+idParent+' div';
    $(idParent).css("display", "none");
    id = '#'+id;
    $(id).css("display", 'block');
}

function showDivExperiences(id) {
    $("#blocExperience div").css("display", "none");
    id = '#'+id;
    $(id).css("display", 'block');
}

function showDivExperiencesPrecise(idParent, id) {
    idParent = '#'+idParent+' div';
    $(idParent).css("display", "none");
    id = '#'+id;
    $(id).css("display", 'block');
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
            if(jQuery(this).scrollTop() >= 1500){
                apparaitreFormulaire();
            }
        });


        if (document.body.clientWidth < 1174) { // pas dynamique obligé de recharger pour appliquer le changement
            $('#section1 .titre').firstChild.remove();
            $('#section1 .titre').html(
                '<img id="photoProfil" src="Documents/profil_RC.png" alt="" />' +
                'VINCENT FERERR'
            );

        }
    });
})();
