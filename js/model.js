class Model extends Observable {
    static MAX = 10;
    static MIN = 0;

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
    }

    changeSuggestions(input) {
        // Filtrer sans modifier la liste complète des villes
        this.suggestions = this.listeVilles.filter(ville => ville.toLowerCase().startsWith(input.toLowerCase()));
        this.setChanged();
        this.notifyObservers();
    }

    setVille(ville) {
        this.ville = ville;
        this.setChanged();
        this.notifyObservers();
    }
}
