import { buscarUsuarioById, updateUsuario } from "../../services/serviceUsuarios.js";

const cancelarOperacao = document.querySelector('#delCancel');
const desabilitar = document.querySelector('#delDisable');

async function inativarUsuario() {
    const usuarioId = localStorage.getItem('usuarioId');
    let usuario = await buscarUsuarioById(usuarioId);
    usuario.ativo = !usuario.ativo;
    console.log(usuario);
    updateUsuario(usuarioId, usuario);
}   

cancelarOperacao.addEventListener('click', function(){
    window.parent.postMessage({action: 'cancelarDel'}, '*')
})

desabilitar.addEventListener('click', async function(){
    await inativarUsuario();
    window.parent.postMessage({action: 'desabilitar'}, '*')
})