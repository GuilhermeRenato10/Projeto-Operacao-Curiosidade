const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close');
const sectionShare = document.querySelector('.tamanho');
const containerFrame = document.querySelector('#frameDel');
const closeBtnEdit = document.querySelector('#closeEdit');
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


window.addEventListener('message', function(event) {
    if (event.data === 'openModal') {
        modal.style.display = 'flex';
        sectionShare.style.display = 'flex';
    }else if (event.data === 'openDel'){
        modal.style.display = 'flex';
        containerFrame.src = '../componentes/defDel/defdelete.html';
        containerFrame.width = 450; /*Colocar o valor necessário*/ 
        containerFrame.height = 200;
        containerFrame.style.display = 'flex';
    }else if (event.data === 'cancelarDel'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
    }else if (event.data === 'openEdit'){
        modal.style.display = 'flex';
        containerFrame.style.display = 'flex';
        containerFrame.src = '../componentes/cadOp/cadOp.html';
        containerFrame.width = 800;  
        containerFrame.height = 640;
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
    perfilDrop.style.display = "flex";
}

settings.onclick = function(){
    
}
