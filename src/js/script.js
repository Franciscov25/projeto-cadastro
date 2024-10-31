// declarando as variáveis

const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')

// evento(metodo) que vai pegar o que acontecer no formulario
// e abreviação de evento

form.addEventListener('submit', (e)=>{
    // previnindo qualquer alteracao no formulario
    e.preventDefault()

    // chamar a funcao que vai checar os campos
    checarCampos()

})

// funcao checar campos
function checarCampos(){
    // declarando as variaveis
    const nomeValor = nome.value.trim() // metodo trim remove todos os espacos em branco no inicio e fim do texto
    const emailValor = nome.value.trim()
    const senhaValor = nome.value.trim()

    // se o campo nome campo estiver vazio
    if(nomeValor === ''){
        validarErro(nome,'Preencha o campo do nome')
    }
    else{
        validarSucesso(nome)
    }

    // se o campo email estiver vazio
    if(emailValor === ''){
        validarErro(email,'Preencha o campo email')
    }
    else{
        validarSucesso(email)
    }

    // se o campo senha estiver vazio
    if(senhaValor === ''){
        validarErro(senha,'Preencha o campo senha')
    }
    else if(senhaValor.length < 8){
        validarErro(senha,'A senha deve conter mais que 8 caracteres')
    }else{
        validarSucesso(senha)
    }
    
}

// validar erro
function validarErro(input,message){
    const controle = input.parentElement; // parentElement só deixa a msg aparecer embaixo do input se realmente tiver algo la
    const small = controle.querySelector('small') // querySelector seleciona o 1 elemento com o nome passado no parametro
    // pega a msg no campo em caso de erro
    small.innerText = message
    // pega as config css da classe controle e erro
    controle.className = 'controle erro'

}


// validar sucesso
function validarSucesso(){
    
}