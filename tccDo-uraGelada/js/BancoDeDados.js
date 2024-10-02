const btnEnviar = document.querySelector("#btn-Cadastrar")
const nome = document.querySelector("#inp-nome")
const login = document.querySelector("#inp-login")
const senha = document.querySelector("#inp-senha")

async function  post() {


    const url = "https://tccdocuragelada-ef726-default-rtdb.firebaseio.com/funcionarios.json"
    const newData = {
        funcionarios: nome.value, 
        login: login.value,
        senha: senha.value
    }
     const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Ttype': 'application/json'
      },
      body: JSON.stringify(newData)
      
     }) 
     Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Cadastro concluído com sucesso!!!",
      showConfirmButton: false,
      timer: 1500
    });
   }

   btnEnviar.addEventListener('click', post)  
   





