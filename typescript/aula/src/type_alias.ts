//ex1
type Marca = { // tipa
    id: number,
    descricao: string,
};

const marca: Marca = { // define/atribui
    id: 1,
    descricao: "GM",
};


//ex2 juntando tipos
type Categoria = {
    tipo: string;
};

type marcaCategoria = Marca & Categoria;
const exemplo: marcaCategoria = {
    id: 2,
    descricao: "Fiat",
    tipo: "SUV",
};
console.log(exemplo);