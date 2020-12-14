class Terrain {
    constructor($element) {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    tiltHaut() {
        this.$element.addClass("tiltHaut");
        let buffer = this;

        setTimeout(
            function () {
                buffer.$element.removeClass("tiltHaut");
            }, 200
        );
    }

    tiltBas() {
        this.$element.addClass("tiltBas");
        let buffer = this;

        setTimeout(
            function () {
                buffer.$element.removeClass("tiltBas");
            }, 200
        );
    }

    tiltDroite() {
        this.$element.addClass("tiltDroite");
        let buffer = this;

        setTimeout(
            function () {
                buffer.$element.removeClass("tiltDroite");
            }, 200
        );
    }

    tiltGauche() {
        this.$element.addClass("tiltGauche");
        let buffer = this;

        setTimeout(
            function () {
                buffer.$element.removeClass("tiltGauche");
            }, 200
        );
    }
    masqueEcranDebut(){
        this.$ecranDebut.addClass("invisible");
    }
}