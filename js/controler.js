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

      // Applique la classe 'selected' si cette salle est la salle sélectionnée
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

    // Création de l'élément de notification
    this.notification = document.createElement('div');
    this.notification.className = 'notification';
    this.notification.style.display = 'none';
    document.body.appendChild(this.notification);
  }

  update(observable) {
    // Affiche la notification si un message est défini dans le modèle
    if (observable.messageaafficher) {
      this.notification.textContent = observable.messageaafficher;
      this.notification.style.display = 'block';
      this.notification.classList.add('show');

      // Masquer la notification après quelques secondes
      setTimeout(() => {
        this.notification.style.display = 'none';
        this.notification.classList.remove('show');
        observable.messageaafficher = ''; // Réinitialise le message après l'affichage
      }, 3000);
    }
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



    // Action pour le champ de recherche
    let actionChangeSuggestions = (event) => {
      this.model.changeSuggestions(event.target.value);
    };
    // quand j'écris dans le champ de recherche, ça change les suggestions
    this.view.champRecherche.addEventListener('input', actionChangeSuggestions);

    // Action pour le bouton "Confirmer"
    // Action pour le bouton "Confirmer"
    this.view.confirmer.addEventListener('click', () => {
      this.model.setMessageAffichage();
    });
  }



}

//on peut ajouter un attribut this.page dans le model puis le modifier via une fonction setPage, ainsi qu'utiliser une classe updatePage extends Observer