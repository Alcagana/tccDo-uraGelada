(() => {
    // Verifica se o Firebase já foi inicializado
    if (!firebase.apps.length) {
        const firebaseConfig = {
            apiKey: "AIzaSyAIQ_gs6JfrAtIugERsfQY2GEhstt1C6gc",
            authDomain: "tccdocuragelada-ef726.firebaseapp.com",
            databaseURL: "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com",
            projectId: "tccdocuragelada-ef726",
            storageBucket: "tccdocuragelada-ef726.appspot.com",
            messagingSenderId: "739246134035",
            appId: "1:739246134035:web:603f9914afc49ce83f00e6"
        };
        firebase.initializeApp(firebaseConfig);
    }

    // Evento de DOMContentLoaded para garantir que o DOM esteja carregado
    document.addEventListener('DOMContentLoaded', () => {
        // Adiciona evento de clique no botão de cadastro
        document.getElementById('btn-Cadastrar').addEventListener('click', function () {
            const email = document.querySelector("#inp-login").value.trim(); // Remove espaços desnecessários
            const senha = document.querySelector("#inp-senha").value.trim();

            // Validações básicas
            if (email === "" || senha === "") {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Por favor, verifique todos os campos.",
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }

            if (!email.includes("@")) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "O email deve conter '@'.",
                    showConfirmButton: false,
                    timer: 1800
                });
                return;
            }

            if (senha.length < 6) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "A senha deve ter no mínimo 6 caracteres.",
                    showConfirmButton: false,
                    timer: 1800
                });
                return;
            }

            // Cadastra o usuário no Firebase
            firebase.auth().createUserWithEmailAndPassword(email, senha)
                .then((userCredential) => {
                    // Cadastro bem-sucedido
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Cadastro concluído com sucesso!!!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                })
                .catch((error) => {
                    // Mensagem de erro do Firebase
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: `Erro ao cadastrar: ${error.message}`,
                        showConfirmButton: false,
                        timer: 5000
                    });
                });
        });
    });
})();
