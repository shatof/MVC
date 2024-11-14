class View {
  constructor() {
    this.div = document.createElement('div');

    //Si on est dans l'indexe
    this.title = document.createElement('h1');
    this.title.textContent = 'CHOIX SALLE';
    this.div.appendChild(this.title);

    // Add sous-titre
    this.subtitle = document.createElement('p');
    this.subtitle.textContent = 'Veuillez choisir votre salle d\'entraînement avant de démarrer votre expérience.';
    this.div.appendChild(this.subtitle);

    // Champ de recherche
    this.champRecherche = document.createElement('input');
    this.champRecherche.type = 'text';
    this.champRecherche.placeholder = 'Rechercher une ville';
    this.div.appendChild(this.champRecherche);

    // Liste des suggestions des villes
    this.suggestionsList = document.createElement('ul');
    this.div.appendChild(this.suggestionsList);

    // Résultat ville "vous avez choisi la ville x" 
    this.resVille = document.createElement('text');
    this.resVille.textContent = '';
    this.div.appendChild(this.resVille);

    // Résultat salle "vous avez choisi la salle y"
    // this.resSalle = document.createElement('text');
    // this.resSalle.textContent = '';
    // this.div.appendChild(this.resSalle);

    // Liste des suggestions des salles
    this.sallesList = document.createElement('div');
    this.div.appendChild(this.sallesList);

    // Résultat salle choisie
    this.salleChoisie = document.createElement('text');
    this.salleChoisie.textContent = '';
    this.div.appendChild(this.salleChoisie);

    // Bouton confirmer
    this.confirmer = document.createElement('button');
    this.confirmer.textContent = 'Confirmer';
    this.div.appendChild(this.confirmer);

    // Champ recherche musique
    this.champMusique = document.createElement('input');
    this.champMusique.type = 'text';
    this.champMusique.placeholder = 'Rechercher une musique';
    this.champMusique.style.display = 'none';
    this.div.appendChild(this.champMusique);

    this.suggestionsMusiqueList = document.createElement('ul');
    this.div.appendChild(this.suggestionsMusiqueList);

    this.fileAttente = document.createElement('ul');
    this.div.appendChild(this.fileAttente);

    // pour le css
    
    this.div.className = 'div';
    this.confirmer.className = 'button';
    this.suggestionsList.className = 'suggestionsList';
    this.sallesList.className = 'sallesList';
    this.suggestionsMusiqueList.className = 'suggestionsMusiqueList';
    this.fileAttente.className = 'file-attente'; // Ajoute la classe CSS




    let nodeParent = document.querySelector('#outer'); // je selectionne dans le HTML le div avec l'id outer
    nodeParent.appendChild(this.div);


  }
}
