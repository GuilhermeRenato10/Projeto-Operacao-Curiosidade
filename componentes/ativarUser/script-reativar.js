import { buscarUsuarioById, updateUsuario } from "../../services/serviceUsuarios.js";

const cancelarOperacao = document.querySelector('#delCancel');
const habilitar = document.querySelector('#enableUser');
console.log(habilitar);

async function ativarUsuario() {
    const usuarioId = localStorage.getItem('usuarioId');
    let usuario = await buscarUsuarioById(usuarioId);
    usuario.ativo = !usuario.ativo;
    console.log(usuario);
    updateUsuario(usuarioId, usuario);
}   

cancelarOperacao.addEventListener('click', function(){
    window.parent.postMessage({action: 'cancelarAtivacao'}, '*')
})

habilitar.addEventListener('click', async function(){
    await ativarUsuario();
    window.parent.postMessage({action: 'habilitar'}, '*')
})