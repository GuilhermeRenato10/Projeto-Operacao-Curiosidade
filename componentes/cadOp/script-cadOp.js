import { adicionarCuriosidade } from "../../services/serviceCadastro.js";
import { buscarUsuarioById } from "../../services/serviceUsuarios.js";

const btnCloseEdit = document.querySelector('#closeEdit');
const btnToggle = document.querySelector('.toggleStatus');
const color = document.querySelector('.red');
const text = document.querySelector('#textStatus');
const addFeelInt = document.querySelectorAll('.fundo-branco')[0];
const removeFeelInt = document.querySelectorAll('.fundo-branco')[1];
const addFeelSent = document.querySelectorAll('.fundo-branco')[2];
const removeFeelSent = document.querySelectorAll('.fundo-branco')[3];
const addFeelVal = document.querySelectorAll('.fundo-branco')[4];
const removeFeelVal = document.querySelectorAll('.fundo-branco')[5];
const listFeel = document.querySelectorAll('.interestList')[0];
const listFeelSent = document.querySelectorAll('.interestList')[1];
const listFeelVal = document.querySelectorAll('.interestList')[2];
const qtdFeel = document.querySelectorAll('.numberInt')[0];
const qtdFeelSent = document.querySelectorAll('.numberInt')[1];
const qtdFeelVal = document.querySelectorAll('.numberInt')[2];
const concluirEdit = document.querySelector('#saveCadOp');

const nomeUser = document.querySelector('#nome');
const idadeUser = document.querySelector('#age');
const emailUser = document.querySelector('#email');
const nomeUsuarioUser = document.querySelector('#nUser');
const dataNascUser = document.querySelector('#dataNasc');
const estadoCivilUser = document.querySelector('#estCivil');
const telUser = document.querySelector('#tel');
const endUser = document.querySelector('#address');
const profUser = document.querySelector('#job');
const formacaoUser = document.querySelector('#acad');

const usuarioId = localStorage.getItem('authUsuarioId');

async function getUsers() {
    const usuario = await buscarUsuarioById(usuarioId);
    nomeUser.value = usuario.fatosDados.nome;
    idadeUser.value = usuario.fatosDados.idade;
    emailUser.value = usuario.fatosDados.email;
    nomeUsuarioUser.value = usuario.fatosDados.nomeUsuario;
    dataNascUser.value = usuario.fatosDados.dataNascimento.substring(0, 10);
    estadoCivilUser.value = usuario.fatosDados.estadoCivil;
    telUser.value = usuario.fatosDados.telefone;
    endUser.value = usuario.fatosDados.endereco;
    profUser.value = usuario.fatosDados.profissao;
    formacaoUser.value = usuario.fatosDados.formacaoAcademica;
}

getUsers();

/*Post message -> Quando preciso interagir com algo dentro de um iframe que afetará o conteúdo ou algo
da página pai*/
btnCloseEdit.addEventListener('click', function () {
    window.parent.postMessage({ action: 'closeEdit' }, '*');
})

let contadorInt = 5;
let listInputInteresse = document.querySelectorAll('#interesseInput');
addFeelInt.addEventListener('click', function () {
    const container = `<div class="numberCircle">${contadorInt}</div>
                <input class="interestInput" id="interesseInput" type="text"> `
    qtdFeel.innerText = contadorInt;
    const newList = document.createElement('li');
    newList.className = 'interestItem';
    newList.innerHTML = container;
    listFeel.appendChild(newList);
    contadorInt++;

    listInputInteresse = document.querySelectorAll('#interesseInput');
})

removeFeelInt.addEventListener('click', function () {
    const qtdLine = listFeel.children.length;
    if (qtdLine === 1) {
        return;
    }
    listFeel.removeChild(listFeel.lastElementChild);
    contadorInt--;
    qtdFeel.innerText = qtdLine - 1;

    listInputInteresse = document.querySelectorAll('#interesseInput');
})

let contadorSent = 5;
let listInputSentimento = document.querySelectorAll('#sentimentoInput');
addFeelSent.addEventListener('click', function () {
    const container = `<div class="numberCircle">${contadorSent}</div>
                <input class="interestInput" id="sentimentoInput" type="text"> `
    qtdFeelSent.innerText = contadorSent;
    const newList = document.createElement('li');
    newList.className = 'interestItem';
    newList.innerHTML = container;
    listFeelSent.appendChild(newList);
    contadorSent++;
    listInputSentimento = document.querySelectorAll('#sentimentoInput');
})

removeFeelSent.addEventListener('click', function () {
    const qtdLine = listFeelSent.children.length;
    if (qtdLine === 1) {
        return;
    }
    listFeelSent.removeChild(listFeelSent.lastElementChild);
    contadorSent--;
    qtdFeelSent.innerText = qtdLine - 1;
    listInputSentimento = document.querySelectorAll('#sentimentoInput');
})

let contadorVal = 5;
let listInputValores = document.querySelectorAll('#valorInput');
addFeelVal.addEventListener('click', function () {
    const container = `<div class="numberCircle">${contadorVal}</div>
                <input class="interestInput" id="valorInput" type="text"> `
    qtdFeelVal.innerText = contadorVal;
    const newList = document.createElement('li');
    newList.className = 'interestItem';
    newList.innerHTML = container;
    listFeelVal.appendChild(newList);
    contadorVal++;
    listInputValores = document.querySelectorAll('#valorInput');
})

removeFeelVal.addEventListener('click', function () {
    const qtdLine = listFeelVal.children.length;
    if (qtdLine === 1) {
        return;
    }
    listFeelVal.removeChild(listFeelVal.lastElementChild);
    contadorVal--;
    qtdFeelVal.innerText = qtdLine - 1;
    listInputValores = document.querySelectorAll('#valorInput');
})

concluirEdit.addEventListener('click', function () {

    let novaCuriosidade = {
        interesses: [],
        sentimentos: [],
        valores: [],
    }

    listInputInteresse.forEach((inputInt) => {
        const inputValue = inputInt.value;
        if (inputValue) {
            novaCuriosidade.interesses.push({ value: inputValue });
        }
    })

    listInputSentimento.forEach((inputSen) => {
        const inputValue = inputSen.value;
        if (inputValue) {
            novaCuriosidade.sentimentos.push({ value: inputValue });
        }
    })

    listInputValores.forEach((inputVal) => {
        const inputValue = inputVal.value;
        if (inputValue) {
            novaCuriosidade.valores.push({ value: inputValue });
        }
    })

    console.log(novaCuriosidade);

    adicionarCuriosidade(usuarioId,novaCuriosidade);
    window.parent.postMessage({ action: 'salvarEdit' }, '*');
})
