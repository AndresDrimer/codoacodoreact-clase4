
const app = document.querySelector(".app")
const botoncito = document.querySelector(".botoncito")
const botonete = document.createElement("button");
const inpute = document.createElement("input");


class Button {
    constructor(parentID, text){
        this.parentID=parentID
        this.text=text
    }
    drawButton(){
        app.appendChild(botonete);
        botonete.innerText=this.text
    }
}

let boton = new Button(botoncito, "la mar estaba serena")

boton.drawButton()

class Inpute{
    constructor (parentId, text){
        this.parentId=parentId
        this.text=text
    }
    createInput(){
        app.appendChild(inpute);
        inpute.value=this.text
    }
}

const algo = new Inpute (app, "otro texto")
algo.createInput()