class UpdateTxt extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    this.view.champTexte.value = observable.valeurDeBase;
  }
}

class UpdateDisable extends Observer {
  constructor(view) {
    super()
    this.view = view;
  }

  update(observable) {
    if (observable.valeurDeBase == Model.MAX) {
      this.view.boutonPlus.disabled = true;
    } else {
      this.view.boutonPlus.disabled = false;
    }
    if (observable.valeurDeBase == Model.MIN) {
      this.view.boutonMoins.disabled = true;
    } else {
      this.view.boutonMoins.disabled = false;
    }
  }
}

class UpdateHey extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }

  update(observable) {
    if (observable.textent == 'achtoung') {
      this.view.res.textContent = observable.textent;
      this.view.boutonMDR.disabled = true;
   }
  }
}



class Controler {

  constructor(model) {

    this.view = new View();
    this.model = model;

    // update
    let updateTxt = new UpdateTxt(this.view);
    this.model.addObservers(updateTxt);

    let updateDisable = new UpdateDisable(this.view);
    this.model.addObservers(updateDisable);

    let updateHey = new UpdateHey(this.view);
    this.model.addObservers(updateHey);

    //  action
    let actionPlus = (event) => {
      this.model.plus();
    }

    let actionMoins = (event) => {
      this.model.moins();
    }

    let changeTexte = (event) => {
      this.model.setTexte(this.view.champRNG.value);
    }

    this.view.boutonPlus.addEventListener('click', actionPlus);
    this.view.boutonMoins.addEventListener('click', actionMoins);
    this.view.champRNG(addEventListener('change', changeTexte));

  }
}
