class View {
  constructor() {
    this.div = document.createElement('div');

    this.subtitle = document.createElement('p');
    this.subtitle.textContent = 'Veuillez choisir votre salle d\'entraînement avant de démarrer votre expérience.';
    this.div.appendChild(this.subtitle);

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

    this.sallesList = document.createElement('div');
    this.div.appendChild(this.sallesList);

    this.salleChoisie = document.createElement('text');
    this.salleChoisie.textContent = '';
    this.div.appendChild(this.salleChoisie);

    this.confirmer = document.createElement('button');
    this.confirmer.textContent = 'Confirmer';
    this.div.appendChild(this.confirmer);

    this.champMusique = document.createElement('input');
    this.champMusique.type = 'text';
    this.champMusique.placeholder = 'Rechercher une musique';
    this.champMusique.style.display = 'none';
    this.div.appendChild(this.champMusique);

    this.suggestionsMusiqueList = document.createElement('ul');
    this.div.appendChild(this.suggestionsMusiqueList);

    this.fileAttente = document.createElement('ul');
    this.div.appendChild(this.fileAttente);

    this.fileAttenteTitle = document.createElement('h3');
    this.fileAttenteTitle.textContent = 'Musiques à suivre';
    this.fileAttenteTitle.style.display = 'none'; 

    this.fileAttenteTitle.className = 'file-attente-title'; 
    this.div.appendChild(this.fileAttenteTitle);

    this.fileAttenteContainer = document.createElement('div');
    this.fileAttenteContainer.appendChild(this.fileAttente); 
    this.fileAttenteContainer.style.display = 'none'; 
    this.div.appendChild(this.fileAttenteContainer);


    // pour le css

    this.div.className = 'div';
    this.confirmer.className = 'button';
    this.champRecherche.className = 'search-input';
    this.champMusique.className = 'search-input';
    this.suggestionsList.className = 'suggestionsList';
    this.sallesList.className = 'sallesList';
    this.suggestionsMusiqueList.className = 'suggestionsMusiqueList';
    this.fileAttente.className = 'file-attente';
    this.subtitle.className = 'subtitle-bar';
    this.fileAttenteContainer.className = 'file-attente-container'; // Classe pour le style



    let nodeParent = document.querySelector('#outer'); // je selectionne dans le HTML le div avec l'id outer
    nodeParent.appendChild(this.div);


  }
}
