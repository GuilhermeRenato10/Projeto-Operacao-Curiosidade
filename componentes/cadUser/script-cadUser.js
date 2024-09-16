const saveCad = document.querySelector('#saveCad');
const closeCad = document.querySelector('#closeCad');

saveCad.addEventListener('click', function(){
    window.parent.postMessage('salvarCad', '*');
})

closeCad.addEventListener('click', function(){
    window.parent.postMessage('fecharCad', '*');
})