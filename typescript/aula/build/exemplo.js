"use strict";
//ex1:
// const aula= "Hello";    //tipou
// console.log(aula)       //chamou
//ex2:
class Pessoa {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
const pessoa1 = new Pessoa("Adriana", "adriana@mail");
