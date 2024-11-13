class UpdateRemplissage extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    this.view.suggestionsList.innerHTML = ''; // Clear previous suggestions
    observable.listeVilles.forEach(ville => {
      let li = document.createElement('li');
      li.textContent = ville;
      li.addEventListener('click', () => {
        observable.setVille(ville);
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

class Controler {

  constructor(model) {

    this.view = new View();
    this.model = model;


    let updateRemplissage = new UpdateRemplissage(this.view);
    this.model.addObservers(updateRemplissage);

    let updateVille = new UpdateVille(this.view);
    this.model.addObservers(updateVille);

    //  action

    
    let actionChangeSuggestions = (event) => {
      this.model.updateSuggestions(event.target.value);
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