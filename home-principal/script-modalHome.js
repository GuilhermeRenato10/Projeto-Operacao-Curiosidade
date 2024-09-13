const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close');
const sectionShare = document.querySelector('.tamanho');
const containerFrame = document.querySelector('#frameDel');
const closeBtnEdit = document.querySelector('#closeEdit');


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
    }
}