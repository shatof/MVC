class UpdateRemplissage extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    this.view.suggestionsList.innerHTML = ''; // pour que les suggestions disparraissent après avoir choisi une ville
    // pour chaque suggestion, ça affiche ce qui correspond
    observable.suggestions.forEach(ville => {
      let li = document.createElement('li');
      li.textContent = ville;
      // ici je suis obligé de faire une ACTION dans le update car elles sont crées lors de leur création
      li.addEventListener('click', () => {
        observable.setVille(ville);
        this.view.champRecherche.value = ville; // quand je clique sur la ville ça remplace le champ recherche
      });
      this.view.suggestionsList.appendChild(li);
    });
  }
}

class UpdateVille extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    if (observable.ville) { // si une ville a été selectionné
      this.view.resVille.textContent = `Selectionnez votre salle de sport parmis les salles situées à ${observable.ville}`;
    } else {
      this.view.resVille.textContent = ''; // Vide le message si aucune ville n'est sélectionnée
    }
  }
}

class UpdateSalles extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    if (observable.ville === '') {
      this.view.sallesList.innerHTML = ''; // vide le champ si aucune ville n'est sélectionnée
      return;
    }
    this.view.sallesList.innerHTML = ''; // vide le champ
    observable.salles.forEach(salle => {
      let div = document.createElement('div');
      div.className = 'salle';

      let img = document.createElement('img');
      img.src = salle.logo;
      img.className = 'salle-logo';

      let name = document.createElement('h3');
      name.textContent = salle.name;
      name.className = 'salle-name';

      let address = document.createElement('p');
      address.textContent = salle.address;
      address.className = 'salle-address';

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(address);

      // Partie uniquement pour changer l'apparence de la salle sélectionnée
      if (observable.salleSelectionnee && observable.salleSelectionnee.name === salle.name) {
        div.classList.add('selected');
      }

      div.addEventListener('click', () => {
        // Supprime la classe 'selected' de toutes les autres salles
        Array.from(this.view.sallesList.children).forEach(child => {
          child.classList.remove('selected');
        });

        // Ajoute la classe 'selected' à la salle cliquée
        div.classList.add('selected');
        //////////////////////////////////////////////

        observable.setSalle(salle); // Actualise la salle choisie dans le modèle
      });

      this.view.sallesList.appendChild(div);
    });
  }
}


class UpdateAffichageSalleChoisie extends Observer {
  constructor(view) {
    super();
    this.view = view;

    this.notification = document.createElement('div');
    this.notification.className = 'notification';
    this.notification.style.display = 'none';
    document.body.appendChild(this.notification);
  }

  update(observable) {
    if (observable.messageaafficher) {
      this.notification.textContent = observable.messageaafficher;
      this.notification.style.display = 'block';
      this.notification.classList.add('show');

      setTimeout(() => {
        this.notification.style.display = 'none';
        this.notification.classList.remove('show');
        observable.messageaafficher = ''; // Réinitialise le message après l'affichage
      }, 3000);
    }
  }
}


class UpdateMusic extends Observer {
  constructor(view) {
    super();
    this.view = view;
    this.lastSuggestions = [];
  }

  update(observable) {
    const suggestionsChanged = JSON.stringify(observable.suggestionsMusique) !== JSON.stringify(this.lastSuggestions);

    if (suggestionsChanged) {
      this.view.suggestionsMusiqueList.innerHTML = '';

      observable.suggestionsMusique.forEach(musique => {
        let li = document.createElement('li');

        let img = document.createElement('img');
        img.src = musique.cover;
        img.alt = `${musique.title} cover`;
        img.className = 'music-cover';

        let text = document.createElement('span');
        text.textContent = `${musique.artist} - ${musique.title}`;

        li.appendChild(img);
        li.appendChild(text);

        li.addEventListener('click', () => {
          this.view.champMusique.value = '';
          observable.ajouterALaFile(musique);
          this.view.suggestionsMusiqueList.innerHTML = '';
        });

        this.view.suggestionsMusiqueList.appendChild(li);
      });

      // pour pas réouvrir les suggestions sans qu'on clique
      this.lastSuggestions = JSON.parse(JSON.stringify(observable.suggestionsMusique));
    }
  }
}


class UpdateFileDattente extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    this.view.fileAttente.innerHTML = '';

    observable.fileAttente.forEach((musique, index) => {
      let li = document.createElement('li');

      let img = document.createElement('img');
      img.src = musique.cover;
      img.alt = `${musique.title} cover`;
      img.className = 'music-cover';

      let title = document.createElement('span');
      title.textContent = musique.title;

      let artist = document.createElement('span');
      artist.textContent = musique.artist;

      let scoreText = document.createElement('span');
      scoreText.textContent = `Score: ${musique.score}`;
      scoreText.className = 'music-score';

      let btnPlus = document.createElement('button');
      btnPlus.textContent = '+';
      btnPlus.className = 'btn-plus';
      btnPlus.disabled = musique.hasVoted;

      let btnMinus = document.createElement('button');
      btnMinus.textContent = '-';
      btnMinus.className = 'btn-minus';
      btnMinus.disabled = musique.hasVoted;

      btnPlus.addEventListener('click', () => {
        observable.plus(index);
      });

      btnMinus.addEventListener('click', () => {
        observable.moins(index);
      });

      let buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
      buttonContainer.appendChild(btnPlus);
      buttonContainer.appendChild(btnMinus);

      li.appendChild(img);
      li.appendChild(title);
      li.appendChild(artist);
      li.appendChild(scoreText);
      li.appendChild(buttonContainer);

      this.view.fileAttente.appendChild(li);
    });
  }
}










class Controler {
  constructor(model) {
    this.view = new View();
    this.model = model;

    let updateRemplissage = new UpdateRemplissage(this.view);
    this.model.addObservers(updateRemplissage);

    let updateVille = new UpdateVille(this.view);
    this.model.addObservers(updateVille);

    let updateSalle = new UpdateSalles(this.view);
    this.model.addObservers(updateSalle);

    let updateAffichageSalleChoisie = new UpdateAffichageSalleChoisie(this.view);
    this.model.addObservers(updateAffichageSalleChoisie);

    let updateMusic = new UpdateMusic(this.view);
    this.model.addObservers(updateMusic);

    let updateFileDattente = new UpdateFileDattente(this.view);
    this.model.addObservers(updateFileDattente);


    let actionChangeSuggestions = (event) => {
      this.model.changeSuggestions(event.target.value);
    };

    this.view.champRecherche.addEventListener('input', actionChangeSuggestions);

    this.view.confirmer.addEventListener('click', () => {
      if (this.model.salleChoisie && this.model.ville) {
        this.model.setMessageAffichage();
        document.title = `${this.model.salleChoisie.name} à ${this.model.ville}`;
        this.view.sallesList.style.display = 'none'; // vire les salles
        this.view.salleChoisie.style.display = 'none'; // vire la salle choisie
        this.view.confirmer.style.display = 'none'; // vire le bouton confirmer
        this.view.champRecherche.style.display = 'none'; // vire le champ de recherche
        this.view.resVille.style.display = 'none'; // vire le message de sélection de ville
        this.view.champMusique.style.display = 'block'; // affiche le champ de recherche de musique
        this.view.subtitle.textContent = `Connecté à ${this.model.salleChoisie.name} de ${this.model.ville}`;
        this.view.fileAttenteContainer.style.display = 'flex';
        this.view.fileAttenteTitle.style.display = 'block';

        document.getElementById('title').textContent = 'Accueil';

      } else {
        alert("Veuillez sélectionner une ville et une salle avant de confirmer.");
      }
    });

    let actionChangeSuggestionsMusique = (event) => {
      this.model.changeSuggestionsMusique(event.target.value);
    };

    this.view.champMusique.addEventListener('input', actionChangeSuggestionsMusique);




  }



}

