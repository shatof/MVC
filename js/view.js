
class View {

  constructor(){

    this.div = document.createElement('div');

    this.champTexte = document.createElement('input');
    this.champTexte.type = 'text';
    this.champTexte.value = 0;
    this.champTexte.disabled = true;
    this.div.appendChild(this.champTexte);

    this.boutonPlus = document.createElement('button');
    this.boutonPlus.textContent = '+';
    this.div.appendChild(this.boutonPlus);

    this.boutonMoins = document.createElement('button');
    this.boutonMoins.textContent = '-';
    this.div.appendChild(this.boutonMoins);

    this.champRNG = document.createElement('input');
    this.champRNG.type = 'text';
    this.champRNG.value = 'hey';
    this.div.appendChild(this.champRNG);

    this.res = document.createElement('text');
    this.res.textContent = '';
    this.div.appendChild(this.res);

    this.boutonMDR = document.createElement('button');
    this.boutonMDR.textContent = 'MDR';
    this.div.appendChild(this.boutonMDR);

    let nodeParent = document.querySelector('#outer'); // je selectionne dans le HTML le div avec l'id outer
    nodeParent.appendChild(this.div);
  }

    createInputs(number) {
      // Clear existing inputs
      this.inputs.forEach(input => this.div.removeChild(input));
      this.inputs = [];
  
      // Create new inputs
      for (let i = 0; i < number; i++) {
        let input = document.createElement('input');
        input.type = 'text';
        this.div.appendChild(input);
        this.inputs.push(input);
      }
  }
}