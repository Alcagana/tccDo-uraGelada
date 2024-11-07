// Importações corretas
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Função de login
document.querySelector('#btn-acessarFun').addEventListener('click', async function() {
    const email = document.getElementById('Dig-loginFun').value; // Obtém o valor do email
    const senha = document.getElementById('Dig-senhaFun').value; // Obtém o valor da senha

    // Verifica os dados no Realtime Database na coleção "funcionarios"
    const getItemByEmailAndPassword = async (email, senha) => {
        const itemsRef = ref(db, 'funcionarios'); // Referência à coleção "funcionários"
        try {
            const snapshot = await get(itemsRef);
            if (snapshot.exists()) {
                const items = snapshot.val(); // Obtenha todos os dados como um objeto
                let foundItem = null;

                // Percorre sua coleção para encontrar pelo email e senha
                Object.keys(items).forEach((key) => {
                    if (items[key].email === email && items[key].senha === senha) {
                        foundItem = { key, ...items[key] }; // Salva o documento encontrado
                    }
                });

                if (foundItem) {
                    window.location.href = "./html/produtos.html"; // Redireciona para produtos.html
                } else {
                    alert('Nenhum documento encontrado com o email e senha fornecidos.');
                }
            } else {
                alert('Nenhum documento encontrado!');
            }
        } catch (error) {
            console.error('Erro ao obter documentos: ', error); // Log de erro mais detalhado
            alert('Erro ao obter documentos: ' + error.message); // Mostra o erro ao usuário
        }
    };

    // Chama a função passando os valores de email e senha
    await getItemByEmailAndPassword(email, senha);
});
