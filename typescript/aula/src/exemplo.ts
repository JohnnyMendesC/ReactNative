//ex1:
// const aula= "Hello";    //tipou
// console.log(aula)       //chamou
//ex2:
class Pessoa {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}

const pessoa1 = new Pessoa("Adriana", "adriana@mail");