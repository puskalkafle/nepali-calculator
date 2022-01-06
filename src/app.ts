class Calculator {
  size: string;
  characters: Array<string>;

  constructor(size: string, characters: Array<string>) {
    this.size = size;
    this.characters = characters;
  }
  name(params: string): void {
    console.log(params);
  }
  getTemplate(): void{
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("Calculator");        
    console.log(node,textnode); 
    node.appendChild(textnode);                              
    document.getElementById("app").appendChild(node); 
  }
  private removeCharacter(){

  }
}

let calc = new Calculator('normal',['1','2','3']);

calc.getTemplate();
