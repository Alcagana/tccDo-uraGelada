// Importações corretas
import { getDatabase, ref, set, push, get, remove } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAIQ_gs6JfrAtIugERsfQY2GEhstt1C6gc",
  authDomain: "tccdocuragelada-ef726.firebaseapp.com",
  databaseURL: "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com",
  projectId: "tccdocuragelada-ef726",
  storageBucket: "tccdocuragelada-ef726.appspot.com",
  messagingSenderId: "739246134035",
  appId: "1:739246134035:web:603f9914afc49ce83f00e6"
};

// Inicialização do app Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(); // Obtendo a instância do banco de dados



// Função para logar o usuário
async function loginUser(email, senha) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      console.log("Usuário logado:", user.uid);
    } catch (error) {
      console.error("Erro ao fazer login: ", error.message);
    }
  }


auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("Usuário logado:", user.uid);
  
      // Pega dados do usuário no Realtime Database
      database.ref('users/' + user.uid).once('value')
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("Dados do usuário:", snapshot.val());
          } else {
            console.log("Nenhum dado de usuário encontrado!");
          }
        });
    } else {
      console.log("Nenhum usuário logado.");
    }
  });
