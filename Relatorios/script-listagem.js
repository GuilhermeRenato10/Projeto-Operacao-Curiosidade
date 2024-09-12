const backListagem = document.querySelector('.backListagem');
const listReport = document.querySelector('.infoUsers')
const mainAnalise = document.querySelector('.analise')

listReport.addEventListener('click', function() {
    backListagem.style.display = 'flex';
    mainAnalise.style.display = 'none';
})