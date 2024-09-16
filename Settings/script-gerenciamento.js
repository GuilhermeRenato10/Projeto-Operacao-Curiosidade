const createUser = document.querySelector('#buttonUser');
const modal = document.querySelector('.modal');
const divs = document.querySelectorAll('#overflow');
let startX, scrollLeft;

/* Constantes drop details */ 
const containerFrame = document.querySelector('#frameCad');
const listaOptions = document.querySelector('#options');
const editDrop = document.querySelector('#altDrop');
const shareDrop = document.querySelector('#shareDrop');
const removeDrop = document.querySelector('#removeDrop');
const btnDetails = document.querySelector('.details');
const dropOptions = document.querySelector('#options');
const habilitar = document.querySelector('.statusLayoutRed');
const desabilitar = document.querySelector('.statusLayout1');

divs.forEach(div => {
    div.addEventListener('mousedown', (e) => {
        startX = e.pageX - div.offsetLeft;
        scrollLeft = div.scrollLeft;
        div.style.cursor = 'grabbing';
        div.addEventListener('mousemove', handleMouseMove);
    });

    div.addEventListener('mouseup', () => {
        div.style.cursor = 'grab';
        div.removeEventListener('mousemove', handleMouseMove);
    });

    div.addEventListener('mouseleave', () => {
        div.style.cursor = 'grab';
        div.removeEventListener('mousemove', handleMouseMove);
    });

    function handleMouseMove(e) {
        const x = e.pageX - div.offsetLeft;
        const walk = (x - startX) * 1; 
        div.style.transform = `translateX(${-scrollLeft + walk}px)`;
    }
});

window.addEventListener('message', function(event){
    if(event.data === 'salvarCad'){
        containerFrame.style.display = "none";
        modal.style.display = "none";
        listaOptions.style.zIndex = '10';
    }else if (event.data === 'fecharCad'){
        containerFrame.style.display = "none";
        modal.style.display = "none";
        listaOptions.style.zIndex = '10';
    }else if (event.data === 'editCad'){
        containerFrame.style.display = "none";
        modal.style.display = "none";
        listaOptions.style.zIndex = '10';
        listaOptions.style.display = "none";
    }else if (event.data === 'fecharEditCad'){
        containerFrame.style.display = "none";
        modal.style.display = "none";
        listaOptions.style.zIndex = '10';
        listaOptions.style.display = "none";
    }else if (event.data === 'fecharJanela'){
        containerFrame.style.display = "none";
        modal.style.display = "none";
        listaOptions.style.zIndex = '10';
        listaOptions.style.display = "none";
    }else if (event.data === 'cancelarDel'){
        containerFrame.style.display = "none";
        modal.style.display = "none";
        listaOptions.style.zIndex = '10';
        listaOptions.style.display = "none";
    }else if (event.data === 'reativar'){
        habilitar.classList.remove('statusLayoutRed');
        habilitar.classList.add('statusLayout1');
        habilitar.innerText = 'Ativo';
        containerFrame.style.display = "none";
        modal.style.display = "none";
    }else if (event.data === 'desabilitar'){
        desabilitar.classList.remove('statusLayout1');
        desabilitar.classList.add('statusLayoutRed');
        desabilitar.innerText = 'Inativo';
        containerFrame.style.display = "none";
        modal.style.display = "none";
    }
})

createUser.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
    containerFrame.src = '../componentes/cadUser/cadUser.html';
    containerFrame.width = 820;  
    containerFrame.height = 640;
})

window.onclick = function(event) {
    if (event.target == modal) {
        if (containerFrame.style.display === "flex"){
            containerFrame.style.display = "none";
            dropOptions.style.zIndex = '10';  
            if (listaOptions.style.display === "none"){
                modal.style.display = "none";
            }  
        }else if (containerFrame.style.display === "none"){
            modal.style.display = "none";
            dropOptions.style.display = "none";
        }
    }
}

btnDetails.addEventListener('click', function(){
    console.log(containerFrame)
    listaOptions.style.display = 'block';
    modal.style.display = 'flex';
})

editDrop.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
    containerFrame.src = '../componentes/editUser/editUser.html';
    containerFrame.width = 820;  
    containerFrame.height = 640;
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
    containerFrame.src = '../componentes/inativarUser/disable.html';
    containerFrame.width = 450; 
    containerFrame.height = 200;
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
})

habilitar.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.src = '../componentes/ativarCad/ativar.html';
    containerFrame.width = 450; 
    containerFrame.height = 200;
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
})

desabilitar.addEventListener('click', function(){
    modal.style.display = 'flex';
    containerFrame.src = '../componentes/inativarUser/disable.html';
    containerFrame.width = 450; 
    containerFrame.height = 200;
    containerFrame.style.display = 'flex';
    listaOptions.style.zIndex = '1';
})