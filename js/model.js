class Model extends Observable {
    static MAX = 10;
    static MIN = 0;

    constructor(){
        super();
        this.valeurDeBase = 0;
        this.textent = '';
    }

    setValeurDeBase(val){
        if (val <= Model.MAX && val >= Model.MIN){
        this.valeurDeBase = val;
        this.setChanged();
        this.notifyObservers();
        }
    }

    plus() {
        this.setValeurDeBase(this.valeurDeBase + 1);
    }

    moins() {
        this.setValeurDeBase(this.valeurDeBase - 1);
    }

    setTexte(texte) {
        this.textent = texte//.concat('la merde');
        this.setChanged();
        this.notifyObservers();
      }


}
