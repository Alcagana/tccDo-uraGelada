const firebaseConfig = {
    apiKey: "AIzaSyAIQ_gs6JfrAtIugERsfQY2GEhstt1C6gc",
    authDomain: "tccdocuragelada-ef726.firebaseapp.com",
    databaseURL: "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com",
    projectId: "tccdocuragelada-ef726",
    storageBucket: "tccdocuragelada-ef726.appspot.com",
    messagingSenderId: "739246134035",
    appId: "1:739246134035:web:603f9914afc49ce83f00e6" };
  
  firebase.initializeApp(firebaseConfig);
  


const cadastrarFuncionario = document.querySelector("#btn-cadaFun")
cadastrarFuncionario.addEventListener('click', function(){
  

    firebase.auth().onAuthStateChanged(function(user) {
        if (user.email === "cleidetejano1504@gmail.com") {
          // Usuário está logado
          window.location.href="cadastro.html"
        } else {
         
            alert("Você não está autorizado a entrar nessa página")
         
        }
      });
})


