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

// POST (enviando dados para o banco de dados)
const btnEnviar = document.querySelector("#btn-Cadastrar");
const nome = document.querySelector("#inp-nome");
const login = document.querySelector("#inp-login");
const senha = document.querySelector("#inp-senha");

async function post() {
  const url = "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com/funcionarios.json";
  const newData = {
    nome: nome.value, 
    email: login.value,
    senha: senha.value
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  // Corrigido Content-Type
    },
    body: JSON.stringify(newData)
  });

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Cadastro concluído com sucesso!!!",
    showConfirmButton: false,
    timer: 1000
  });
}

btnEnviar.addEventListener('click', post);

// DELETE (deletando dados do banco de dados)
const btnDeletar = document.querySelector("#btn-deletar");
const emailInput = document.querySelector("#inp-email1");

const deleteByEmail = async (email) => {
  const itemsRef = ref(db, 'funcionarios'); // Usando a referência correta
  try {
    const snapshot = await get(itemsRef);
    if (snapshot.exists()) {
      const items = snapshot.val();
      let foundKey = null;

      // Percorre os funcionários para encontrar pelo EMAIL
      Object.keys(items).forEach((key) => {
        if (items[key].email === email) {
          foundKey = key; // Salva a chave do documento encontrado
        }
      });

      if (foundKey) {
        const itemRef = ref(db, `funcionarios/${foundKey}`); // Referência ao item encontrado
        await remove(itemRef); // Remove o item
        console.log('Documento excluído com sucesso!');
      } else {
        console.log('Nenhum documento encontrado com o email:', email); // Corrigido para "email"
      }
    } else {
      console.log('Nenhum documento encontrado!');
    }
  } catch (error) {
    console.error('Erro ao excluir documento: ', error);
  }
};

// Adicionando o listener corretamente e chamando a função com o parâmetro 'email'
btnDeletar.addEventListener('click', () => {
  const email = emailInput.value; // Obtendo valor do input
  deleteByEmail(email); // Chama a função com o email correto
  console.log("CLICOU EM DELETAR");
});
  