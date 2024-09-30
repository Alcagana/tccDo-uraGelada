const btnAcessar = document.querySelector("#btn-acessar");
const DigLogin = document.querySelector("#Dig-login");
const DigSenha  = document.querySelector("#Dig-senha");


btnAcessar.addEventListener('click', function(){


if ( DigLogin.value === "DDçuragelada" && DigSenha.value === "2060"){

alert ("Bem Vindo!!!");

location.href ="../html/produtos.html"

}else {

alert ("Senha ou login incorretos, Por favor preenchar os dados acima!");


}});