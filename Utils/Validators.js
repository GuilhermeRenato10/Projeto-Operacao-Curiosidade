export function validarNome(nomeUser) {
    if(nomeUser.value.trim() === '') {
        adicionarErro(nomeUser, 'O nome não pode ser vazio.');
        return false;
    } else {
        removerErro(nomeUser);
        return true;
    }
}

export function validarNomeUsuario(nomeUsuarioUser) {
    if(nomeUsuarioUser.value.trim() === '') {
        adicionarErro(nomeUsuarioUser, 'O nome de usuário não pode ser vazio.');
        return false;
    } else {
        removerErro(nomeUsuarioUser);
        return true;
    }
}

export function validarIdade(idadeUser) {
    const idade = parseInt(idadeUser.value.trim(), 10);

    if(isNaN(idade) || idade <= 0) {
        adicionarErro(idadeUser);
        return false;
    } else {
        removerErro(idadeUser);
        return true;
    }
}

export function validarEmail(emailUser) {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(emailUser.value)) {
        adicionarErro(emailUser, 'O e-mail fornecido é inválido.');
        return false;
    } else {
        removerErro(emailUser);
        return true;
    }
}

export function validarTelefone(telUser) {
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    if(!phonePattern.test(telUser.value)) {
        adicionarErro(telUser, 'O número de telefone fornecido é inválido.');
        return false;
    } else {
        removerErro(telUser);
        return true;
    }
}

export function validarSenha(senhaUser) {
    if(senhaUser.value.length <= 6) {
        adicionarErro(senhaUser, 'A senha deve conter mais de 6 caracteres.');
    }else {
        removerErro(senhaUser);
        return true;
    }
}

export function verificacaoSenhaUsuario(senhaUser, inputSenha) {
    if(senhaUser.value != inputSenha) {
        adicionarErro(senhaUser, 'Senha inválida.');
    }else {
        removerErro(senhaUser);
        return true;
    }
}

export function validarUsuario(userInput, passwordInput) {
    console.log(userInput);
    console.log(passwordInput);
    const isUserValid = validarEmail(userInput) || validarNomeUsuario(userInput);
    const isPasswordValid = validarSenha(passwordInput);
    return isUserValid && isPasswordValid;
}

function adicionarErro(input, mensagem) {
    input.classList.add('error');
    let errorMessage = input.nextElementSibling;
    if(!errorMessage || !errorMessage.classList.contains('error-message')) {
        errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = mensagem;
        input.parentNode.appendChild(errorMessage);
    }
}

function removerErro(input) {
    input.classList.remove('error');
    let errorMessage = input.nextElementSibling;
    if(errorMessage && errorMessage.classList.contains('error-message')) {
        input.parentNode.removeChild(errorMessage);
    }
}