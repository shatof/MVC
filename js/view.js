
class View {

  constructor(){

    this.div = document.createElement('div');

    // this.champTexte = document.createElement('input');
    // this.champTexte.type = 'text';
    // this.champTexte.value = 0;
    // this.champTexte.disabled = true;
    // this.div.appendChild(this.champTexte);

    // this.boutonPlus = document.createElement('button');
    // this.boutonPlus.textContent = '+';
    // this.div.appendChild(this.boutonPlus);

    // this.boutonMoins = document.createElement('button');
    // this.boutonMoins.textContent = '-';
    // this.div.appendChild(this.boutonMoins);

    // this.champRNG = document.createElement('input');
    // this.champRNG.type = 'text';
    // this.champRNG.value = 'hey';
    // this.div.appendChild(this.champRNG);

    

    this.boutonMDR = document.createElement('button');
    this.boutonMDR.textContent = 'MDR';
    this.div.appendChild(this.boutonMDR);

    this.nombreInputs = document.createElement('input');
    this.nombreInputs.type = 'text';
    this.nombreInputs.placeholder = 'combien d\'inputs?';
    this.div.appendChild(this.nombreInputs);

    this.res = document.createElement('text');
    this.res.textContent = '';
    this.div.appendChild(this.res);

    this.champRecherche = document.createElement('input');
    this.champRecherche.type = 'text';
    this.champRecherche.placeholder = 'Rechercher une ville';
    this.div.appendChild(this.champRecherche);

    this.resVille = document.createElement('text');
    this.resVille.textContent = '';
    this.div.appendChild(this.resVille);

    this.suggestionsList = document.createElement('ul');
    this.div.appendChild(this.suggestionsList);

    let nodeParent = document.querySelector('#outer'); // je selectionne dans le HTML le div avec l'id outer
    nodeParent.appendChild(this.div);
    
  }
}
