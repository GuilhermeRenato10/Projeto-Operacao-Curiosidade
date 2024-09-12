const openModalBtn = document.querySelector(".btnShare");
openModalBtn.addEventListener('click', function() {
    window.parent.postMessage('openModal', '*');
});
