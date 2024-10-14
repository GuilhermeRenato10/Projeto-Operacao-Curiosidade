import { buscarUsuarioById, updateUsuario } from "../../services/serviceUsuarios.js";
import { validarNome, validarEmail, validarTelefone, validarSenha, validarIdade } from "../../Utils/Validators.js";

const nomeUser = document.querySelector('#nome');
const idadeUser = document.querySelector('#age');
const emailUser = document.querySelector('#email');
const nomeUsuarioUser = document.querySelector('#nUser');
const dataNascUser = document.querySelector('#dataNasc');
const estadoCivilUser = document.querySelector('#estCivil');
const telUser = document.querySelector('#tel');
const endUser = document.querySelector('#address');
const profUser = document.querySelector('#job');
const cargoUser = document.querySelector('#position');
const formacaoUser = document.querySelector('#acad');
const senhaUser = document.querySelector('#senhaCad');
const tipoUser = document.querySelector('#checkAdmin');

const saveCad = document.querySelector('#saveCad');
const closeCad = document.querySelector('#closeCad');

async function fetchUsuarios() {
    const usuarioId = localStorage.getItem('usuarioId');
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
    cargoUser.value = usuario.fatosDados.cargo;
    formacaoUser.value = usuario.fatosDados.formacaoAcademica;
    senhaUser.value = usuario.senha;
    tipoUser.checked = usuario.tipo;
}

fetchUsuarios();

saveCad.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o envio imediato do formulário 

    const isNomeValido = validarNome(nomeUser);
    const isEmailValido = validarEmail(emailUser);
    const isTelefoneValido = validarTelefone(telUser);
    const isSenhaValida = validarSenha(senhaUser);
    const isIdadeValida = validarIdade(idadeUser);

    if (isNomeValido && isEmailValido && isTelefoneValido && isSenhaValida && isIdadeValida) {
        const usuarioAtualizado = {
            fatosDados: {
                nome: nomeUser.value,
                idade: parseInt(idadeUser.value),
                email: emailUser.value,
                nomeUsuario: nomeUsuarioUser.value,
                dataNascimento: new Date(dataNascUser.value).toISOString(),
                estadoCivil: estadoCivilUser.value,
                telefone: telUser.value,
                endereco: endUser.value,
                profissao: profUser.value,
                cargo: cargoUser.value,
                formacaoAcademica: formacaoUser.value
            },
            senha: senhaUser.value,
            ativo: true,
            tipo: tipoUser.checked,
            dataCadastro: new Date().toISOString()
        }
        console.log(usuarioAtualizado);
        window.parent.postMessage({ action: 'editCad', novoUsuario: usuarioAtualizado }, '*');
    }
})

closeCad.addEventListener('click', function () {
    window.parent.postMessage({ action: 'fecharEditCad' }, '*');
})