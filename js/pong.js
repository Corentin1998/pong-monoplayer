let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));

let demarrer = false;

setInterval(function () {
    if(demarrer) {
        balle.bouge();
        raquetteGauche.bouge();
        raquetteDroite.bouge();
    }
}, 10);

$("#btn-jouer").on("mouseup", function (event) {
    event.preventDefault();
    demarrer=true;
    $("#ecran-debut").addClass("invisible");
});

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }
    if (event.key === "a") {
        raquetteGauche.monter();
    }
    if (event.key === "q") {
        raquetteGauche.descendre();
    }
    if (event.key === "p") {
        raquetteDroite.monter();
    }
    if (event.key === "m") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);


window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    if (event.key === "a" || event.key === "q") {
        raquetteGauche.arret();
    }
    if (event.key === "p" || event.key === "m") {
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);
