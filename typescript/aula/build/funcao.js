"use strict";
//ex1
function login(username) {
    let message = "Bem vindo " + username;
    console.log(message);
}
login("Fulano");
//ex2
function login2(username) {
    let message = "Bem vindo " + username;
    console.log(message);
    return true;
}
console.log(login2("Fulano"));
