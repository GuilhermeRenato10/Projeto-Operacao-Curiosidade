const btnCloseEdit = document.querySelector('#closeEdit');
const btnToggle = document.querySelector('.toggleStatus');
const color = document.querySelector('.red');
const text = document.querySelector('#textStatus');
const addFeelInt = document.querySelectorAll('.fundo-branco')[0];
const removeFeelInt = document.querySelectorAll('.fundo-branco')[1];
const addFeelSent = document.querySelectorAll('.fundo-branco')[2];
const removeFeelSent = document.querySelectorAll('.fundo-branco')[3];
const addFeelVal = document.querySelectorAll('.fundo-branco')[4];
const removeFeelVal = document.querySelectorAll('.fundo-branco')[5];
const listFeel = document.querySelectorAll('.interestList')[0];
const listFeelSent = document.querySelectorAll('.interestList')[1];
const listFeelVal = document.querySelectorAll('.interestList')[2];
const qtdFeel = document.querySelectorAll('.numberInt')[0];
const qtdFeelSent = document.querySelectorAll('.numberInt')[1];
const qtdFeelVal = document.querySelectorAll('.numberInt')[2];
const concluirEdit = document.querySelector('#saveCadOp');

/*Post message -> Quando preciso interagir com algo dentro de um iframe que afetará o conteúdo ou algo
da página pai*/
btnCloseEdit.addEventListener('click', function () {
    window.parent.postMessage('closeEdit', '*');
})

btnToggle.addEventListener('click', function () {
    if (btnToggle.checked) {
        text.innerHTML = 'Ativo';
        color.classList.add('enable');
        btnToggle.classList.add('enable');
        color.classList.remove('disable');
        btnToggle.classList.remove('disable');
    } else {
        text.innerHTML = 'Inativo';
        color.classList.add('disable');
        btnToggle.classList.add('disable');
        color.classList.remove('enable');
        btnToggle.classList.remove('enable');
    }
})


let contadorInt = 5;
addFeelInt.addEventListener('click', function () {
    const container = `<div class="numberCircle">${contadorInt}</div>
                <input class="interestInput" type="text"> `
    qtdFeel.innerText = contadorInt;
    const newList = document.createElement('li');
    newList.className = 'interestItem';
    newList.innerHTML = container;
    listFeel.appendChild(newList);
    contadorInt++;
})

removeFeelInt.addEventListener('click', function(){
    const qtdLine = listFeel.children.length;
    if(qtdLine === 1){
        return;
    }
    listFeel.removeChild(listFeel.lastElementChild);
    contadorInt--;
    qtdFeel.innerText = qtdLine - 1;
})

let contadorSent = 5;
addFeelSent.addEventListener('click', function () {
    const container = `<div class="numberCircle">${contadorSent}</div>
                <input class="interestInput" type="text"> `
    qtdFeelSent.innerText = contadorSent;
    const newList = document.createElement('li');
    newList.className = 'interestItem';
    newList.innerHTML = container;
    listFeelSent.appendChild(newList);
    contadorSent++;
})

removeFeelSent.addEventListener('click', function(){
    const qtdLine = listFeelSent.children.length;
    if(qtdLine === 1){
        return;
    }
    listFeelSent.removeChild(listFeelSent.lastElementChild);
    contadorSent--;
    qtdFeelSent.innerText = qtdLine - 1;
})

concluirEdit.addEventListener('click', function () {
    window.parent.postMessage('salvarEdit', '*');
})