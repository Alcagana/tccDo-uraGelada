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

const deleteByEmail = async (emailInput) => {
  const itemsRef = ref(db, 'funcionarios'); // Altere 'Alunos' para o caminho desejado
  try {
      const snapshot = await get(itemsRef);
      if (snapshot.exists()) {
          const items = snapshot.val();
          let foundKey = null;

          // Percorre os alunos paemailInput encontra pelo email
          Object.keys(items).forEach((key) => {

              if (items[key].email === emailInput) {
                  foundKey = key; // Salva a chave do documento encontra
              }

          });

          if (foundKey) {
              const itemRef = ref(db, `funcionarios/${foundKey}`); // Referência ao item encontra
              await remove(itemRef); // Remove o item
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Funcionário excluido com sucesso!!!",
                showConfirmButton: false,
                timer: 1000
              });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Nenhum documento encontra com o email:",
              showConfirmButton: false,
              timer: 1000
            });
          }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Nenhum documento encontrado!",
          showConfirmButton: false,
          timer: 1000
        });
    
      }
  } catch (error) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Erro ao excluir documento revise o email inserido:",
      showConfirmButton: false,
      timer: 1000
    });
  }
};




// Adicionando o listener corretamente e chamando a função com o parâmetro 'email'
btnDeletar.addEventListener('click', () => {
  const email = emailInput.value; // Obtendo valor do input
  deleteByEmail(email); // Chama a função com o email correto
  console.log("CLICOU EM DELETAR");
});















teste de bloquear botões:

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
firebase.initializeApp(firebaseConfig);

// Obtém o botão de cadastro
const cadastrarFuncionario = document.querySelector("#btn-cadaFun");

// Evento de clique para cadastrar funcionário
cadastrarFuncionario.addEventListener('click', function() {

    // Verifica se o usuário está autenticado
    firebase.auth().onAuthStateChanged(function(user) {
        if (user && user.email === "cleidetejano1504@gmail.com") {
            // Usuário autorizado
            window.location.href = "cadastro.html";

            // Exemplo de dados do funcionário que serão cadastrados
            const funcionario = {
                nome: "Nome do Funcionário",
                cargo: "Cargo do Funcionário",
                salario: 3000
            };

            // Envia os dados para a coleção 'funcionarios' no Realtime Database
            firebase.database().ref('funcionarios').push(funcionario)
                .then(() => {
                    alert("Funcionário cadastrado com sucesso!");
                })
                .catch((error) => {
                    console.error("Erro ao cadastrar funcionário: ", error);
                    alert("Erro ao cadastrar funcionário.");
                });
        } else {
            // Usuário não autorizado
            alert("Você não está autorizado a entrar nessa página");
        }
    });
});

  