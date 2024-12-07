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


const btnSair = document.querySelector("#btn-sair")
btnSair.addEventListener('click', logout)
function logout() {
    firebase.auth().signOut().then(() => {
        alert("Conta deslogada com sucesso!")
        window.location.href = "../index.html"
        history.replaceState(null, "", "../index.html")
    }).catch(() => {
        alert("Erro ao sair da conta.")
    })
}