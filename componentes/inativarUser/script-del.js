const cancelarOperacao = document.querySelector('#delCancel');
const desabilitar = document.querySelector('#delDisable');

cancelarOperacao.addEventListener('click', function(){
    window.parent.postMessage('cancelarDel', '*')
})

desabilitar.addEventListener('click', function(){
    window.parent.postMessage('desabilitar', '*')
})