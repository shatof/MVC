class UpdateNbInputs extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    // Clear existing inputs
    observable.inputs.forEach(input => this.view.div.removeChild(input));
    observable.inputs = [];

    for (let i = 0; i < observable.nbInputs; i++) {
      let input = document.createElement('input');
      input.type = 'text';
      this.view.div.appendChild(input);
      observable.inputs.push(input);

      input.addEventListener('input', (event) => {
        observable.setTexte(input.value);
      });
    }
  }
}

class UpdateRemplissage extends Observer {
  constructor(view) {
    super();
    this.view = view;
    this.villes = [
      "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille",
      "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Angers", "Grenoble", "Dijon", "Nîmes", "Aix-en-Provence",
      "Saint-Quentin", "Brest", "Limoges", "Tours", "Amiens", "Metz", "Perpignan", "Besançon", "Orléans", "Rouen",
      "Mulhouse", "Caen", "Nancy", "Argenteuil", "Saint-Denis", "Montreuil", "Roubaix", "Dunkerque", "Tourcoing",
      "Nanterre", "Avignon", "Créteil", "Poitiers", "Versailles", "Pau", "Courbevoie", "Vitry-sur-Seine", "Colombes", "Aulnay-sous-Bois"
    ];
  }

  update(observable) {
    this.view.champRecherche.addEventListener('input', (event) => {
      let input = event.target.value.toLowerCase();
      let suggestions = this.villes.filter(ville => ville.toLowerCase().startsWith(input));
      this.displaySuggestions(suggestions);
    });
  }

  displaySuggestions(suggestions) {
    this.view.suggestionsList.innerHTML = ''; // Clear previous suggestions
    suggestions.forEach(suggestion => {
      let li = document.createElement('li');
      li.textContent = suggestion;
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
    if (observable.ville) {
      this.view.resVille.textContent = `Vous avez sélectionné la ville : ${observable.ville}`;
    }
  }
}

class Controler {

  constructor(model) {

    this.view = new View();
    this.model = model;

    // update
    let updateNbInputs = new UpdateNbInputs(this.view);
    this.model.addObservers(updateNbInputs);

    let updateRemplissage = new UpdateRemplissage(this.view);
    this.model.addObservers(updateRemplissage);

    let updateVille = new UpdateVille(this.view);
    this.model.addObservers(updateVille);

    //  action


    let actionCliqueMDR = (event) => {
      //changeTexte();
      actionChangeNbInputs();
    }

    // let changeTexte = (event) => {
    //   this.model.setTexte(this.view.champRNG.value);
    //  }

    let actionChangeNbInputs = (event) => {
      this.model.setNbInputs(this.view.nombreInputs.value);
    }

    this.view.boutonMDR.addEventListener('click', actionCliqueMDR);
    // this.view.boutonPlus.addEventListener('click', actionPlus);
    // this.view.boutonMoins.addEventListener('click', actionMoins);

  }
}

// class UpdateTxt extends Observer {
//   constructor(view) {
//     super();
//     this.view = view;
//   }

//   update(observable) {
//     this.view.champTexte.value = observable.valeurDeBase;
//   }
// }

// class UpdateDisable extends Observer {
//   constructor(view) {
//     super()
//     this.view = view;
//   }

//   update(observable) {
//     if (observable.valeurDeBase == Model.MAX) {
//       this.view.boutonPlus.disabled = true;
//     } else {
//       this.view.boutonPlus.disabled = false;
//     }
//     if (observable.valeurDeBase == Model.MIN) {
//       this.view.boutonMoins.disabled = true;
//     } else {
//       this.view.boutonMoins.disabled = false;
//     }
//   }
// }

// class UpdateHey extends Observer {
//   constructor(view) {
//     super();
//     this.view = view;
//   }

//   update(observable) {
//     this.view.res.textContent = observable.textent;
//   }
// }

    // let updateTxt = new UpdateTxt(this.view);
    // this.model.addObservers(updateTxt);

    // let updateDisable = new UpdateDisable(this.view);
    // this.model.addObservers(updateDisable);

    // let updateHey = new UpdateHey(this.view);
    // this.model.addObservers(updateHey);

        // let actionPlus = (event) => {
    //   this.model.plus();
    // }

    // let actionMoins = (event) => {
    //   this.model.moins();
    // }