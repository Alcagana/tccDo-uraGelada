const firebaseConfig = {
    apiKey: "AIzaSyAIQ_gs6JfrAtIugERsfQY2GEhstt1C6gc",
    authDomain: "tccdocuragelada-ef726.firebaseapp.com",
    databaseURL: "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com",
    projectId: "tccdocuragelada-ef726",
    storageBucket: "tccdocuragelada-ef726.appspot.com",
    messagingSenderId: "739246134035",
    appId: "1:739246134035:web:603f9914afc49ce83f00e6" };
  
  firebase.initializeApp(firebaseConfig);
  
//Login

document.querySelector('#btn-acessar').addEventListener('click', function() {
    const email = document.getElementById('Dig-login').value; //variável que pega o valor do email
    const senha = document.getElementById('Dig-senha').value; //variável que pega a senha

    // AUTENTICAÇÃO DO USUÁRIO
    firebase.auth().signInWithEmailAndPassword(email, senha) //função do FIREBASE que pega o email e a senha
    .then(response => {
        window.location.href = "produtos.html"; // Redireciona para index2.html
    })
    .catch(error => {
        alert("Usuário não encontrado | email ou senha incorretos"); // Mostra erro em um alert!
        console.log("Erro!", error);
    });
});
