class Model extends Observable {


    constructor() {
        super();
        //this.nbInputs = 0;       
        //this.inputs = [];
        this.ville = '';
        this.listeVilles = [
            "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille",
            "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Angers", "Grenoble", "Dijon", "Nîmes", "Aix-en-Provence",
            "Saint-Quentin", "Brest", "Limoges", "Tours", "Amiens", "Metz", "Perpignan", "Besançon", "Orléans", "Rouen",
            "Mulhouse", "Caen", "Nancy", "Argenteuil", "Saint-Denis", "Montreuil", "Roubaix", "Dunkerque", "Tourcoing",
            "Nanterre", "Avignon", "Créteil", "Poitiers", "Versailles", "Pau", "Courbevoie", "Vitry-sur-Seine", "Colombes", "Aulnay-sous-Bois"
        ];
        this.suggestions = [];
        this.salles = [
            {
                name: 'Basic-Fit',
                logo: 'logo/basicfit.png',
                address: ''
            },
            {
                name: 'KeepCool',
                logo: 'logo/keepcool.png',
                address: ''
            },
            {
                name: "L'Orange Bleue",
                logo: 'logo/orangebleue.png',
                address: ''
            },
            {
                name: 'Fitness Park',
                logo: 'logo/fitnesspark.png',
                address: ''
            }
        ];
        this.salleChoisie = '';
    }

    changeSuggestions(input) {
        if (input === '') {
            this.suggestions = [];
        } else {
            this.suggestions = this.listeVilles.filter(ville => ville.toLowerCase().startsWith(input.toLowerCase()));
        }
        this.setChanged();
        this.notifyObservers();
    }


    setVille(ville) {
        this.ville = ville;
        this.suggestions = [];
        this.salles.forEach((salle, index) => {
            salle.address = `${index + 1} rue de ${ville}`;
        });
        this.setChanged();
        this.notifyObservers();
    }

    setSalle(salle) {
        this.salleChoisie = salle;
        this.setChanged();
        this.notifyObservers();
    }
}
