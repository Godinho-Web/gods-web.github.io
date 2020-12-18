// Declara as variáveis para as TAGs
let lblLogin, btnSair;
// Define os comandos que serão executados quando a página index for carregada
window.onload = function () {
   
    if (localStorage.getItem(`login`) == null) {  // armazenado no sessionStorage
        // O usuário não realizou o login no site
        // lblLogin.innerHTML = `Olá ${sessionStorage.getItem(`login`)}!!!`;
        if (sessionStorage.getItem(`login`) == null){
            alert(`Página com acesso restrito. Para acessar essa página é necessário realizar o login.`);
            location.href = "./login.html";
        }
        else {
            lblLogin = document.getElementById(`lblLogin`);
            btnSair = document.getElementById(`btnSair`);
            // Adicionar uma função ao botão 
            btnSair.addEventListener("click", sair);
            // Recuperar e exibir o valor armazenado no localStorage
            lblLogin.innerHTML = `Bem vindo ${sessionStorage.getItem(`login`)} !`;
            // Exibir novamente a página de login
        }
        
        
    }
    
    else {// Existe um login armazenado no localStorage
        // Pega as TAGs necessárias
        lblLogin = document.getElementById(`lblLogin`);
        btnSair = document.getElementById(`btnSair`);
        // Adicionar uma função ao botão 
        btnSair.addEventListener("click", sair);
        // Recuperar e exibir o valor armazenado no localStorage
        lblLogin.innerHTML = `Bem vindo ${localStorage.getItem(`login`)} !`;
        
    }
    
};

function sair() {
    // limpar o login e a senha do sessionStorage
    sessionStorage.removeItem(`login`);
    sessionStorage.removeItem("senha");
    // Redireciona o site para a página de login
    location.href = `./login.html`;
}

