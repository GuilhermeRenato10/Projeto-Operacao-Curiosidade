const saveAs = document.querySelector('#saveCadOp');
const closeEdit = document.querySelector('#closeEdit');
const catchToggle = document.querySelector('.toggleStatus');
const color = document.querySelector('.red');
const text = document.querySelector('#textStatus');

saveAs.addEventListener('click', function(){
    window.parent.postMessage('saveEdit', '*');
})

closeEdit.addEventListener('click', function(){
    window.parent.postMessage('closeEditOp', '*');
})

catchToggle.addEventListener('click', function(){
    if(catchToggle.checked){
        text.innerText = 'Ativo';
        color.classList.add('enable');
        color.classList.remove('disable');
        catchToggle.classList.add('enable');
        catchToggle.classList.remove('disable');
    }else {
        text.innerText = 'Inativo';
        color.classList.add('disable');
        color.classList.remove('enable');
        catchToggle.classList.add('disable');
        catchToggle.classList.remove('enable');
    }
})

