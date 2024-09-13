const openModalBtn = document.querySelector(".btnShare");
const openDelBtn = document.querySelector(".btnDelete");
const openModalEdit = document.querySelector(".btnEdit");

openModalBtn.addEventListener('click', function() {
    window.parent.postMessage('openModal', '*');
});

openDelBtn.addEventListener('click', function(){
    window.parent.postMessage('openDel', '*');
    
})

openModalEdit.addEventListener('click', function(){
    window.parent.postMessage('openEdit', '*');
})