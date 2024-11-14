class UpdateRemplissage extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    this.view.suggestionsList.innerHTML = ''; // vide le champ

    observable.suggestions.forEach(ville => {
      let li = document.createElement('li');
      li.textContent = ville;
      li.addEventListener('click', () => {
        observable.setVille(ville);
        this.view.champRecherche.value = ville; // Met à jour le champ de recherche

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
    this.view.resVille.textContent = `Vous avez sélectionné la ville : ${observable.ville}`;
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
      

      div.addEventListener('click', () => {
        observable.setSalle(salle); // Actualise la salle choisie dans le modèle
      });

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(address);
      this.view.sallesList.appendChild(div);



    });
  }
}

// class UpdateSalleChoisie extends Observer {
//   constructor(view) {
//     super();
//     this.view = view;
//   }

//   update(observable) {
//     this.view.salleChoisie.innerHTML = ''; // Vide l'affichage précédent

//     if (observable.salleChoisie) {
//       const salle = observable.salleChoisie;

//       let div = document.createElement('div');
//       div.className = 'salle-choisie';

//       let img = document.createElement('img');
//       img.src = salle.logo;
//       img.className = 'salle-logo';

//       let name = document.createElement('h3');
//       name.textContent = salle.name;
//       name.className = 'salle-name';

//       let address = document.createElement('p');
//       address.textContent = salle.address;
//       address.className = 'salle-address';

//       div.appendChild(img);
//       div.appendChild(name);
//       div.appendChild(address);
//       this.view.salleChoisie.appendChild(div);
//     }
//   }
// }



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

    // let updateSalleChoisie = new UpdateSalleChoisie(this.view);
    // this.model.addObservers(updateSalleChoisie);

    //  action
  
    
    let actionChangeSuggestions = (event) => {
      this.model.changeSuggestions(event.target.value);
    }

  this.view.champRecherche.addEventListener('input', actionChangeSuggestions);
  
  }
}

// class UpdateNbInputs extends Observer {
//   constructor(view) {
//     super();
//     this.view = view;
//   }

//   update(observable) {
//     // Clear existing inputs
//     observable.inputs.forEach(input => this.view.div.removeChild(input));
//     observable.inputs = [];

//     for (let i = 0; i < observable.nbInputs; i++) {
//       let input = document.createElement('input');
//       input.type = 'text';
//       this.view.div.appendChild(input);
//       observable.inputs.push(input);

//       input.addEventListener('input', (event) => {
//         observable.setTexte(input.value);
//       });
//     }
//   }
// }

  // let actionChangeNbInputs = (event) => {
    //   this.model.setNbInputs(this.view.nombreInputs.value);
    // }