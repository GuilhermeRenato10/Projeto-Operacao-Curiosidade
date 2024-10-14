const cancelDel = document.querySelector('#delCancel');
const removerOperacao = document.querySelector('#delExc')

cancelDel.addEventListener('click', function(){
    window.parent.postMessage({action: 'cancelarDel'}, '*');
})

removerOperacao.addEventListener('click', function(){
    window.parent.postMessage({action: 'removerOp'}, '*');
})