/**
 * Class: Calculator
 * functions
 * clear
 * operation
 * backSpace
 * generateTemplate
 * languageSWitcher
 * executeResult
 * 
 * 
 *  **/
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
    let app = document.getElementById("app");
    let table = document.createElement("table");                 
    let tr = document.createElement("tr");                 
    let result = document.createElement("div");
    let wrap = document.createElement("div");
        wrap.classList.add("wrap");                 
        result.classList.add("result");                 
    
    this.characters.map((character,index)=>{
        let indexNumber = index+1;
        
        let td = document.createElement("td");                 
        let button = document.createElement("button");                 
        let textnode = document.createTextNode(character);
        
        button.value=character;
        button.addEventListener("click", function () {
            let char = document.createTextNode(this.value);
            const reg = new RegExp('^[0-9]+$');
            this.value.match(reg) ? result.appendChild(char) : "";
        });
        
        character === "=" ? button.classList.add("equalTo") : "";
        button.appendChild(textnode);  
        td.appendChild(button);                              
        tr.appendChild(td);
        
        if(indexNumber%4===0){             
            table.appendChild(tr);  
            // create new row
            tr = document.createElement("tr");   
        }  
        if(indexNumber===this.characters.length){
            //append remaining item at the end 
            table.appendChild(tr); 
            
        }                                
    });     

    app.appendChild(wrap);                       
    wrap.appendChild(result);                       
    wrap.appendChild(table); 
  }
  private removeCharacter(){

  }
}
let charactersArray = [
    '(',')','%','AC',
    '7','8','9','÷',
    '4','5','6','×',
    '1','2','3','-',
    '0','.','=','+'
];
let calc = new Calculator('normal',charactersArray);

calc.getTemplate();
