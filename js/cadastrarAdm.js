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

//CADASTRAR
document.getElementById('btn-Cadastrar').addEventListener('click', function () {
    const email = document.querySelector("#inp-login").value;
    const senha = document.querySelector("#inp-senha").value;
    
    if (email === "" || senha === "") {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Por favor, verefique todos os campos.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }
    if (!email.value.includes("@")) {
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
    // Se a senha for válida cadastre o usuário
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            // O cadastro foi bem-sucedido
            Swal.fire({
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch((error) => {
            // Se houve um erro, mostre a mensagem
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Erro ao cadastrar: verifique o email e a senha inseridos!!!",
                showConfirmButton: false,
                timer: 2200
            });
        });
});

