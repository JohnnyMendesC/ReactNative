"use strict";
let backend = {
    tecnologia: [
        {
            id: 100,
            nome: "Java",
            data: new Date(),
            preco: 1000,
            promocao: (preco) => (700),
        },
        {
            id: 200,
            nome: "C#",
            data: new Date(),
            preco: 800,
            promocao: () => console.log("teste"),
        },
    ]
};
function mostrarPromocao(preco) {
    console.log(`Promoção do curso: ${preco}`);
}
const novoCurso = {
    id: 1,
    nome: "Java+Javascript+MySQL",
    data: new Date(2024, 6, 10),
    preco: 3000,
    promocao: mostrarPromocao,
};
console.log(novoCurso);
novoCurso.promocao(900);
console.log(backend);
