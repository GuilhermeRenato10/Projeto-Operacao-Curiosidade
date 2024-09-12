const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close');

window.addEventListener('message', function(event) {
    if (event.data === 'openModal') {
        modal.style.display = 'flex';
    }
});


// Função para fechar a modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fechar a modal clicando fora dela
window.onclick = function(event) {
    console.log(event);
    if (event.target == modal) {
        modal.style.display = "none";
    }
    
}