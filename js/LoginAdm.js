import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js"; 
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"; 
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js"; 

const firebaseConfig = {
apiKey: "AIzaSyAIQ_gs6JfrAtIugERsfQY2GEhstt1C6gc",
authDomain: "tccdocuragelada-ef726.firebaseapp.com",
databaseURL: "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com",
projectId: "tccdocuragelada-ef726",
storageBucket: "tccdocuragelada-ef726.appspot.com",
messagingSenderId: "739246134035",
appId: "1:739246134035:web:603f9914afc49ce83f00e6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtendo a instância de autenticação
const db = getDatabase(app); // Obtendo a instância do banco de dados

// Login
document.querySelector('#btn-acessarAdm').addEventListener('click', function() {
const email = document.getElementById('Dig-loginAdm').value; // variável que pega o valor do email
const senha = document.getElementById('Dig-senhaAdm').value; // variável que pega a senha

// AUTENTICAÇÃO DO USUÁRIO
signInWithEmailAndPassword(auth, email, senha) // Função do Firebase que autentica o usuário
.then(response => {
window.location.href = "./html/produtos.html"; // Redireciona para produtos.html
})

.catch(error => {
alert("Usuário não encontrado | email ou senha incorretos"); // Mostra erro em um alert!
console.log("Erro!", error);
});
});
