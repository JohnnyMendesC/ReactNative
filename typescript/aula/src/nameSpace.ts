//namespace serve para evitar conflitos de variaveis
namespace terrestre{
    export interface animal{
        especie: string;
        nome: string;
    }    
}
namespace aquatico{
    export interface animal{
        especie: string;
        nome: string;
    }    
}
namespace aereo{
    export interface animal{
        especie: string;
        nome: string;
    }
}

let a: terrestre.animal = {
    especie: "Cachorro",
    nome: "Bob",
};
let b: aquatico.animal = {
    especie: "Peixe",
    nome: "Nemo",
};
let c: aereo.animal = {
    especie: "Arara",
    nome: "Rio",
};
console.log(a);
console.log(b);
console.log(c);