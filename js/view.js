class View {
  constructor() {
    this.div = document.createElement('div');
    this.div.className = 'div'; // pour le css

    // Add title
    this.title = document.createElement('h1');
    this.title.textContent = 'CHOIX SALLE';
    this.div.appendChild(this.title);

    // Add subtitle
    this.subtitle = document.createElement('p');
    this.subtitle.textContent = 'Veuillez choisir votre salle d\'entraînement avant de démarrer votre expérience.';
    this.div.appendChild(this.subtitle);

    this.res = document.createElement('text');
    this.res.textContent = '';
    this.div.appendChild(this.res);

    this.champRecherche = document.createElement('input');
    this.champRecherche.type = 'text';
    this.champRecherche.placeholder = 'Rechercher une ville';
    this.div.appendChild(this.champRecherche);

    this.suggestionsList = document.createElement('ul');
    this.suggestionsList.className = 'suggestionsList'; // pour le css
    this.div.appendChild(this.suggestionsList);

    this.resVille = document.createElement('text');
    this.resVille.textContent = '';
    this.div.appendChild(this.resVille);

    this.resSalle = document.createElement('text');
    this.resSalle.textContent = '';
    this.div.appendChild(this.resSalle);

    this.sallesList = document.createElement('div');
    this.sallesList.className = 'sallesList';
    this.div.appendChild(this.sallesList);

    this.salleChoisie = document.createElement('text');
    this.salleChoisie.textContent = '';
    this.div.appendChild(this.salleChoisie);

    this.confirmer = document.createElement('button');
    this.confirmer.textContent = 'Confirmer';
    this.div.appendChild(this.confirmer);

    let nodeParent = document.querySelector('#outer'); // je selectionne dans le HTML le div avec l'id outer
    nodeParent.appendChild(this.div);
  }
}