const cancelarAtivacao = document.querySelector('#delCancel');
const enable = document.querySelector('#delActive');

cancelarAtivacao.addEventListener('click', function(){
    window.parent.postMessage('cancelarDel', '*');
})

enable.addEventListener('click', function(){
    window.parent.postMessage('reativar', '*');
})
