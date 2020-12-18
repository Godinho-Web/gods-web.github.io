
var txtLogin = document.getElementById(`txtLogin`);
var txtSenha = document.getElementById(`txtSenha`);
var btnEntrar = document.getElementById(`btnEntrar`);
var txtcheckin = document.getElementById(`txtcheckin`);
// Definir a função que será executada quando clicar no botão
btnEntrar.addEventListener("click", acessar);

// Função que realiza o login e armazena o login no localStorage
function acessar() {
    // Verifica se o txtLogin e txtSenha não estão vazios
    if ((txtLogin.value == `luiz`) && (txtSenha.value == "2550")) {
        if (txtcheckin.checked){
            localStorage.setItem(`login`, txtLogin.value);
            localStorage.setItem(`senha`, txtSenha.value);
            location.href = `./index.html`;
        }
        else{
            sessionStorage.setItem(`login`, txtLogin.value);
            sessionStorage.setItem(`senha`, txtSenha.value);
            location.href = `./index.html`;
        }
        // Exibir a página inicial do sistema (acesso restrito)
        
    }
    else{
        alert(`usuário ou senha incorretos`);
    }
}