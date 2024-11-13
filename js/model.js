class Model extends Observable {
    static MAX = 10;
    static MIN = 0;

    constructor(){
        super();
        // this.valeurDeBase = 0;
        // this.textent = '';
        this.nbInputs = 0;
        this.ville = '';
        this.inputs = [];
    }

    setNbInputs(nb) {
        this.nbInputs = nb;
        this.setChanged();
        this.notifyObservers();
    }

    setInputs(inputs) {
        this.inputs = inputs;
        this.setChanged();
        this.notifyObservers();
    }

    setVille(ville) {
        this.ville = ville;
        this.setChanged();
        this.notifyObservers();
    }




    // setValeurDeBase(val){
    //     if (val <= Model.MAX && val >= Model.MIN){
    //     this.valeurDeBase = val;
    //     this.setChanged();
    //     this.notifyObservers();
    //     }
    // }

    // plus() {
    //     this.setValeurDeBase(this.valeurDeBase + 1);
    // }

    // moins() {
    //     this.setValeurDeBase(this.valeurDeBase - 1);
    // }

    // setTexte(texte) {
    //     this.textent = texte.concat(', voici est le mot que tu as choisi.');
    //     this.setChanged();
    //     this.notifyObservers();
    //   }




}
