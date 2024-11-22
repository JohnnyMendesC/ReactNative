"use strict";
//union type aceita mais de um tipo
let matricula;
let preco; //má pratica
let logado = true;
let situacao = 1;
logado = Boolean(situacao);
console.log("Logado:" + logado);
situacao = 0;
logado = Boolean(situacao);
console.log("Logado:" + logado);
situacao = 2;
logado = Boolean(situacao);
console.log("Logado:" + logado);
matricula = "456";
matricula = 123;
console.log(matricula);
console.log(typeof (matricula));
