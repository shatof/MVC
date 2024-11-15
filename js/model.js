class Model extends Observable {


    constructor() {
        super();
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
            { name: 'Basic-Fit', logo: 'logo/basicfit.png', address: '' },
            { name: 'KeepCool', logo: 'logo/keepcool.png', address: '' },
            { name: "L'Orange Bleue", logo: 'logo/orangebleue.png', address: '' },
            { name: 'Fitness Park', logo: 'logo/fitnesspark.png', address: '' }
        ];
        this.salleChoisie = '';
        this.messageaafficher = ''
        this.salleSelectionnee = null
        this.suggestionsMusique = [];
        this.fileAttente = []; 
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
        this.salleSelectionnee = salle; 
        this.setChanged();
        this.notifyObservers();
    }

    setMessageAffichage() {
        if (this.salleChoisie) {
            this.messageaafficher = `Vous avez sélectionné votre salle : ${this.salleChoisie.name} à ${this.salleChoisie.address}`;
            this.setChanged();
            this.notifyObservers();
        }
    }

    // methode utilisant l'appli itnues pour recuperer des suggestions de musique
    async changeSuggestionsMusique(input) {
        if (input === '') {
            this.suggestionsMusique = [];
        } else {
            try {
                let response = await fetch(`https://itunes.apple.com/search?term=${input}&limit=5`);               
                let data = await response.json();

                this.suggestionsMusique = data.results.map(musique => ({
                    artist: musique.artistName,
                    title: musique.trackName,
                    cover: musique.artworkUrl100  
                }));

            } catch (error) {
                console.error('Erreur lors de la récupération des suggestions de musique:', error);
                this.suggestionsMusique = [];
            }
        }
        this.setChanged();
        this.notifyObservers();
    }
    
    ajouterALaFile(musique) {
        this.fileAttente.push({
            title: musique.title,
            artist: musique.artist,
            cover: musique.cover,
            score: 0,         
        });
        this.setChanged();
        this.notifyObservers();
    }

    plus(index) {
        const musique = this.fileAttente[index];
        if (!musique.hasVoted) {
            musique.score += 1;
            musique.hasVoted = true;
            this.setChanged();
            this.notifyObservers();
        }
    }

    moins(index) {
        const musique = this.fileAttente[index];
        if (!musique.hasVoted) {
            musique.score -= 1;
            musique.hasVoted = true;
            this.setChanged();
            this.notifyObservers();
        }
    }

    
    
}
