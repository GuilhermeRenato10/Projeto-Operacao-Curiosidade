import { removerCuriosidade } from "../services/serviceCadastro.js";
import { buscarUsuarioById } from "../services/serviceUsuarios.js";

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close');
const sectionShare = document.querySelector('.tamanho');
const containerFrame = document.querySelector('#frameDel');
const buttonEdit = document.querySelector('.edit');
const secTamanho = document.querySelector('.tamanho');
const fundoFoscoModal = document.querySelector('.modalTamanho');
const btnVisudrop = document.querySelector('.visu');
const btnEditdrop = document.querySelectorAll('.edit')[1];
const iconEdit = document.querySelector('.iconBtnEdit');
const dropDownC = document.querySelector('.dropdown-content');
const ultimasCad = document.querySelectorAll('.group')[0];
const shareByMe = document.querySelectorAll('.group')[1];
const shareWithMe = document.querySelectorAll('.group')[2];
const frame = document.querySelector('.iframeBorder');
const abrirPerfil = document.querySelector('.openPerfil');
const perfilDrop = document.querySelector('.perfilDrop');
const settings = document.querySelectorAll('.listaDrop')[1];
const notificacoes = document.querySelector('#bell');
const dropNot = document.querySelector('#sizeNot');
const cadastroCC = document.querySelector('#cc');
const openNot = document.querySelector('.sizeNot');
const usuarioLogado = document.querySelector('.comando');

async function getUsuario() {
    const usuarioId = localStorage.getItem('authUsuarioId');
    const usuario = await buscarUsuarioById(usuarioId);
    usuarioLogado.innerHTML = `<p>${usuario.fatosDados.nome}</p>
    <p>${usuario.tipo ? '[Administrador]' : '[Operador]'}</p>`    
} 
getUsuario();

openNot.addEventListener('click', function (){
    modal.style.display = "none";
    dropNot.style.display = "none";
    shareWithMe.classList.add('selected');
    ultimasCad.classList.remove('selected');
    shareByMe.classList.remove('selected');
    frame.src = './telas-iframes/shareCom.html'
})

async function excluirCuriosidade(id) {
    console.log(id);
    await removerCuriosidade(id);
}

let curId = '';

window.addEventListener('message', function(event) {
    const { action, curiosidadeId } = event.data;
    if (action === 'openModal') {
        modal.style.display = 'flex';
        sectionShare.style.display = 'flex';
    }else if (action === 'openDel'){
        modal.style.display = 'flex';
        containerFrame.src = '../componentes/defDel/defdelete.html';
        containerFrame.width = 450; /*Colocar o valor necessário*/ 
        containerFrame.height = 200;
        containerFrame.style.display = 'flex';
        curId = curiosidadeId;
    }else if (action === 'cancelarDel'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
    }else if (action === 'removerOp') {
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
        excluirCuriosidade(curId);
        this.location.reload();
    }
    else if (action === 'openEdit'){
        modal.style.display = 'flex';
        containerFrame.style.display = 'flex';
        containerFrame.src = '../componentes/cadOpv2/cadOpc.html';
        containerFrame.width = 800;  
        containerFrame.height = 600;
        this.localStorage.setItem('curiosidadeUsuarioId', curiosidadeId);
        console.log(this.localStorage.getItem('curiosidadeUsuarioId'));
    }else if (action === 'closeEdit'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
    }else if (action === 'saveEdit'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
    }else if (action === 'closeEditOp'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
    }else if (action === 'salvarEdit'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
        this.location.reload();
    }
});

// Função para fechar a modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    sectionShare.style.display = "none";
}

// Fechar a modal clicando fora dela
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        sectionShare.style.display = "none";
        containerFrame.style.display = "none";
        dropNot.style.display = "none";
    }else if (event.target == fundoFoscoModal) {
        fundoFoscoModal.style.display = "none";
    }
}

buttonEdit.onclick = function() {
    fundoFoscoModal.style.display = "flex";
    dropDownC.style.display = "flex";
}

btnVisudrop.onclick = function(){
    buttonEdit.classList.remove('edit');
    buttonEdit.classList.add('visu');
    buttonEdit.innerHTML = 'Visualizar<img class="iconBtnEdit" src="../icons/keyboardp.svg" alt="Icone"> '; 
    fundoFoscoModal.style.display = "none";
    dropDownC.style.display = "none";
}

btnEditdrop.onclick = function(){
    buttonEdit.classList.remove('visu');
    buttonEdit.classList.add('edit');
    buttonEdit.innerHTML = 'Editar<img class="iconBtnEdit" src="../icons/keyboardw.svg" alt="Icone"> ';  
    fundoFoscoModal.style.display = "none";
    dropDownC.style.display = "none";
}

ultimasCad.onclick = function(){
    ultimasCad.classList.add('selected');
    shareByMe.classList.remove('selected');
    shareWithMe.classList.remove('selected');
    frame.src = './telas-iframes/ultimasC.html'
}

shareByMe.onclick = function(){
    shareByMe.classList.add('selected');
    shareWithMe.classList.remove('selected');
    ultimasCad.classList.remove('selected');
    frame.src = './telas-iframes/shareByMe.html'
}

shareWithMe.onclick = function(){
    shareWithMe.classList.add('selected');
    ultimasCad.classList.remove('selected');
    shareByMe.classList.remove('selected');
    frame.src = './telas-iframes/shareCom.html'
}

abrirPerfil.onclick = function(){
    if (perfilDrop.style.display === "flex"){
        perfilDrop.style.display = "none";
    }else {
        perfilDrop.style.display = "flex";
    }
}

notificacoes.onclick = function(){
    if (dropNot.style.display === "none"){
        dropNot.style.display = "flex";
        modal.style.display = "flex";
    }else {
        dropNot.style.display = "none";
        modal.style.display = "none";
    }
}

cadastroCC.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.src = '../componentes/cadOp/cadOp.html';
    containerFrame.width = 800;  
    containerFrame.height = 640;
    containerFrame.style.display = 'flex';
})
