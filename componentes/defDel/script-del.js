const cancelDel = document.querySelector('#delCancel');

cancelDel.addEventListener('click', function(){
    window.parent.postMessage('cancelarDel', '*');
})