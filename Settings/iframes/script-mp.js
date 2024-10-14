import { buscarUsuarioById } from "../services/serviceUsuarios.js";

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