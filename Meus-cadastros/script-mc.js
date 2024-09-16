const modal = document.querySelector('.modal');
const sectionShare = document.querySelector('.tamanho');
const containerFrame = document.querySelector('.framesMC');
const abrirPerfil = document.querySelector('.expand');
const perfilDrop = document.querySelector('.perfilDrop');
const notificacoes = document.querySelector('#bell');
const dropNot = document.querySelector('#sizeNot');
const listaOptions = document.querySelector('#options');
const editDrop = document.querySelector('#altDrop');
const shareDrop = document.querySelector('#shareDrop');
const removeDrop = document.querySelector('#removeDrop');
const btnDetails = document.querySelector('.details');

// Fechar a modal clicando fora dela
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        dropNot.style.display = "none";
        listaOptions.style.display = "none";
    }
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

btnDetails.addEventListener('click', function(){
    listaOptions.style.display = 'block';
    modal.style.display = 'flex';
})

editDrop.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
    containerFrame.src = '../componentes/cadOpv2/cadOpc.html';
    containerFrame.width = 800;  
    containerFrame.height = 600;
})

shareDrop.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
    containerFrame.src = '../componentes/defshare/defshare.html';
    containerFrame.width = 450;  
    containerFrame.height = 450;
})

removeDrop.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.src = '../componentes/defDel/defdelete.html';
    containerFrame.width = 450; /*Colocar o valor necessário*/ 
    containerFrame.height = 200;
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
})

window.addEventListener('message', function(event) {
     if (event.data === 'closeEdit'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
        listaOptions.style.display = "none";
        listaOptions.style.zIndex = '10';
    }else if (event.data === 'closeEditOp'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
        listaOptions.style.display = "none";
        listaOptions.style.zIndex = '10';
    }else if (event.data === 'saveEdit'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
        listaOptions.style.display = "none";
        listaOptions.style.zIndex = '10';
    }else if (event.data === 'cancelarDel'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
        listaOptions.style.display = "none";
        listaOptions.style.zIndex = '10';
    }else if (event.data === 'fecharJanela'){
        modal.style.display = 'none';
        containerFrame.style.display = 'none';
        listaOptions.style.display = "none";
        listaOptions.style.zIndex = '10';
    }
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        sectionShare.style.display = "none";
        containerFrame.style.display = "none";
        dropNot.style.display = "none";
        listaOptions.style.display = 'none';
    }
}