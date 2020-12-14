class Balle{ // class Balle
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
        this.positionX=parseInt($element.css("left"));
        this.positionY=parseInt($element.css("top"));
        this.vitesseX=2;
        this.vitesseY=1.5;
        this.angle = Math.random() * 2 * Math.PI;
    }

    get bas() {
        return this.positionY + this.hauteur;
    }

    set bas(value) {
        this.positionY = value - this.hauteur;
    }

    get droite() {
        return this.positionX + this.largeur;
    }

    set droite(value) {
        this.positionX = value - this.largeur;
    }

    bouge() {
        this.positionX += Math.cos(this.angle) * this.vitesseX;
        this.positionY += Math.sin(this.angle) * this.vitesseY;

        this.limite();
        this.majHTML();
    }

    limite() {
        //droite
        if ((this.droite) > terrain.largeur) {
            terrain.tiltDroite();
            this.droite = terrain.largeur;
            this.vitesseX *= -1;
            this.recentrer();
        }
        //gauche
        if (this.positionX < 0) {
            terrain.tiltGauche();
            this.positionX = 0;
            this.vitesseX *= -1;
            this.recentrer();
        }
        //bas
        if (this.bas > terrain.hauteur) {
            terrain.tiltBas();
            this.bas = terrain.hauteur;
            this.vitesseY *= -1;
        }
        //haut
        if (this.positionY < 0) {
            terrain.tiltHaut();
            this.positionY = 0;
            this.vitesseY *= -1;
        }
        //Rebonds sur les raquettes
        //Gauche
        if(this.positionX < raquetteGauche.droite){ //si la balle dépasse à gauche de la raquette gauche
            if(this.bas > raquetteGauche.positionY){ //et si la balle est plus basse que le haut de la raquette
                if(this.positionY < raquetteGauche.bas){ // et si la balle est plus haute que le bas de la raquette
                    this.vitesseX *= -1;
                }
            }
        }
        //Droite
        if(this.droite > raquetteDroite.positionX){ //si la balle dépasse à droite la raquette droite
            if(this.bas > raquetteDroite.positionY){ //et si la balle est plus basse que le haut de la raquette
                if(this.positionY < raquetteDroite.bas){ // et si la balle est plus haute que le bas de la raquette
                    this.vitesseX *= -1;
                }
            }
        }
    }

    recentrer() {
        this.positionX = terrain.largeur / 2 - this.largeur / 2;
        this.positionY = terrain.hauteur / 2 - this.hauteur / 2;
    }

    majHTML() {
        this.$element.css("left", balle.positionX);
        this.$element.css("top", balle.positionY);
    }
}