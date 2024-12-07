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
const btnEnviar = document.querySelector("#btn-CadastrarFun");
const nome = document.querySelector("#inp-nomeFun");
const login = document.querySelector("#inp-loginFun");
const senha = document.querySelector("#inp-senhaFun");

async function post() {
    const url = "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com/funcionarios.json";
    const newData = {
        nome: nome.value,
        email: login.value,
        senha: senha.value
    };

    // Validações
    if (nome.value === '' || login.value === '' || senha.value === '') {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Por favor, preencha todos os campos.",
            showConfirmButton: false,
            timer: 1800
        });
        return;
    }

    if (!login.value.includes("@")) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "O email deve conter '@'.",
            showConfirmButton: false,
            timer: 1800
        });
        return;
    }

    if (senha.value.length < 6) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "A senha deve ter no mínimo 6 caracteres.",
            showConfirmButton: false,
            timer: 1800
        });
        return;
    }

    // Envia os dados para o Firebase
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
    const itemsRef = ref(db, 'funcionarios');
    try {
        const snapshot = await get(itemsRef);
        if (snapshot.exists()) {
            const items = snapshot.val();
            let foundKey = null;

            Object.keys(items).forEach((key) => {
                if (items[key].email === emailInput) {
                    foundKey = key;
                }
            });

            if (foundKey) {
                const itemRef = ref(db, `funcionarios/${foundKey}`);
                await remove(itemRef);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Funcionário excluído com sucesso!!!",
                    showConfirmButton: false,
                    timer: 1000
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Nenhum funcionário encontrado com o email fornecido.",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Nenhum funcionário encontrado!",
                showConfirmButton: false,
                timer: 1000
            });
        }
    } catch (error) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Erro ao excluir funcionário, revise o email inserido.",
            showConfirmButton: false,
            timer: 1000
        });
    }
};

btnDeletar.addEventListener('click', () => {
    const email = emailInput.value;
    deleteByEmail(email);
    console.log("CLICOU EM DELETAR");
});
