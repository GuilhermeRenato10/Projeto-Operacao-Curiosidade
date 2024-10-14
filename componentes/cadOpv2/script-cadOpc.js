import { buscarUsuarioById } from "../../services/serviceUsuarios.js";
import { buscarCuriosidadePorId, removerInteresse, removerSentimento, removerValor } from "../../services/serviceCadastro.js";


const saveAs = document.querySelector('#saveCadOp');
const closeEdit = document.querySelector('#closeEdit');
const catchToggle = document.querySelector('.toggleStatus');
const color = document.querySelector('.red');
const text = document.querySelector('#textStatus');

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

const listInputInteresse = document.querySelectorAll('#interesseInput');
const listInputSentimento = document.querySelectorAll('#sentimentoInput');
const listInputValores = document.querySelectorAll('#valorInput');

const listRemoveInteresse = document.querySelectorAll('#removeInteresse');
const listRemoveSentimento = document.querySelectorAll('#removeSentimento');
const listRemoveValor = document.querySelectorAll('#removeValor');

const usuarioId = localStorage.getItem('curiosidadeUsuarioId');
async function getInfo() {
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

    const curiosidade = await buscarCuriosidadePorId(usuarioId);

    listInputInteresse.forEach((inputInteresse, index) => {
        if (curiosidade.interesses[index]?.value) {
            inputInteresse.value = curiosidade.interesses[index].value;
        }
    });

    listInputSentimento.forEach((inputSentimento, index) => {
        if (curiosidade.sentimentos[index]?.value) {
            inputSentimento.value = curiosidade.sentimentos[index].value;
        }
    });

    listInputValores.forEach((inputValores, index) => {
        if (curiosidade.valores[index]?.value) {
            inputValores.value = curiosidade.valores[index].value;
        }
    });

    listRemoveInteresse.forEach((removeInteresse, index) => {
        removeInteresse.addEventListener('click', () => {
            removeInteresse(usuarioId, 'interesse', index);
        })
    });

    listInputSentimento.forEach((removeSentimento, index) => {
        removeSentimento.addEventListener('click', () => {
            removeSentimento(usuarioId, 'sentimento', index);
        })
    });

    listRemoveValor.forEach((removeValor, index) => {
        removeValor.addEventListener('click', () => {
            removeValor(usuarioId, 'valor', index);
        })
    });
}

getInfo();

saveAs.addEventListener('click', function () {
    window.parent.postMessage({ action: 'saveEdit' }, '*');
})

closeEdit.addEventListener('click', function () {
    window.parent.postMessage({ action: 'closeEditOp' }, '*');
})

catchToggle.addEventListener('click', function () {
    if (catchToggle.checked) {
        text.innerText = 'Ativo';
        color.classList.add('enable');
        color.classList.remove('disable');
        catchToggle.classList.add('enable');
        catchToggle.classList.remove('disable');
    } else {
        text.innerText = 'Inativo';
        color.classList.add('disable');
        color.classList.remove('enable');
        catchToggle.classList.add('disable');
        catchToggle.classList.remove('enable');
    }
})

