const saveCad = document.querySelector('#saveCad');
const closeCad = document.querySelector('#closeCad');

saveCad.addEventListener('click', function(){
    window.parent.postMessage('editCad', '*');
})

closeCad.addEventListener('click', function(){
    window.parent.postMessage('fecharEditCad', '*');
})