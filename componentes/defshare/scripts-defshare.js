const buttonEdit = document.querySelector('.edit');
const fundoFoscoModal = document.querySelector('.modalTamanho');
const dropDownC = document.querySelector('.dropdown-content');
const btnVisudrop = document.querySelector('.visu');
const btnEditdrop = document.querySelectorAll('.edit')[1];


buttonEdit.onclick = function() {
    window.parent.postMessage('abrirDropDown', '*');
    fundoFoscoModal.style.display = "flex";
    dropDownC.style.display = "flex";
}

btnVisudrop.onclick = function(){
    window.parent.postMessage('alterarVisu', '*');
    buttonEdit.classList.remove('edit');
    buttonEdit.classList.add('visu');
    buttonEdit.innerHTML = 'Visualizar<img class="iconBtnEdit" src="../../icons/keyboardp.svg" alt="Icone"> '; 
    fundoFoscoModal.style.display = "none";
    dropDownC.style.display = "none";
}

btnEditdrop.onclick = function(){
    window.parent.postMessage('alterarEdit', '*');
    buttonEdit.classList.remove('visu');
    buttonEdit.classList.add('edit');
    buttonEdit.innerHTML = 'Editar<img class="iconBtnEdit" src="../../icons/keyboardw.svg" alt="Icone"> ';  
    fundoFoscoModal.style.display = "none";
    dropDownC.style.display = "none";
}