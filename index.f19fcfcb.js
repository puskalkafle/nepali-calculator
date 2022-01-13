class Calculator {
    constructor(size, characters){
        this.size = size;
        this.characters = characters;
    }
    name(params) {
        console.log(params);
    }
    getTemplate() {
        let tempExpression = "";
        let app = document.getElementById("app");
        let table = document.createElement("table");
        let tr = document.createElement("tr");
        let result = document.createElement("div");
        let wrap = document.createElement("div");
        wrap.classList.add("wrap");
        result.setAttribute("id", "result");
        this.characters.map((character, index)=>{
            let indexNumber = index + 1;
            let td = document.createElement("td");
            let button = document.createElement("button");
            let textnode = document.createTextNode(character.label);
            button.value = character.value;
            button.addEventListener("click", function(e) {
                let char = document.createTextNode(this.textContent);
                // const reg = new RegExp('^[0-9]+$');
                // this.value.match(reg) ? result.appendChild(char) : "";
                if (this.value === "AC") {
                    document.getElementById("result").innerHTML = "0";
                    tempExpression = "";
                } else if (this.value === "=") try {
                    document.getElementById("result").innerHTML = eval(tempExpression);
                } catch (err) {
                    document.getElementById("result").innerHTML = "Error";
                }
                else if (tempExpression.length <= 15) {
                    result.appendChild(char);
                    tempExpression = tempExpression.concat(this.value);
                }
            });
            character.value === "=" && button.classList.add("equalTo");
            button.appendChild(textnode);
            td.appendChild(button);
            tr.appendChild(td);
            if (indexNumber % 4 === 0) {
                table.appendChild(tr);
                // create new row
                tr = document.createElement("tr");
            }
            if (indexNumber === this.characters.length) //append remaining item at the end
            table.appendChild(tr);
        });
        app.appendChild(wrap);
        wrap.appendChild(result);
        wrap.appendChild(table);
    }
    removeCharacter() {
    }
}
let charactersArray = [
    {
        label: "(",
        value: "("
    },
    {
        label: ")",
        value: ")"
    },
    {
        label: "%",
        value: "%*"
    },
    {
        label: "AC",
        value: "AC"
    },
    {
        label: "7",
        value: "7"
    },
    {
        label: "8",
        value: "8"
    },
    {
        label: "9",
        value: "9"
    },
    {
        label: "÷",
        value: "/"
    },
    {
        label: "4",
        value: "4"
    },
    {
        label: "5",
        value: "5"
    },
    {
        label: "6",
        value: "6"
    },
    {
        label: "×",
        value: "*"
    },
    {
        label: "1",
        value: "1"
    },
    {
        label: "2",
        value: "2"
    },
    {
        label: "3",
        value: "3"
    },
    {
        label: "-",
        value: "-"
    },
    {
        label: "0",
        value: "0"
    },
    {
        label: ".",
        value: "."
    },
    {
        label: "=",
        value: "="
    },
    {
        label: "+",
        value: "+"
    }, 
];
let calc = new Calculator("normal", charactersArray);
calc.getTemplate();

//# sourceMappingURL=index.f19fcfcb.js.map
