const createUser = document.querySelector('#buttonUser');
const modal = document.querySelector('.modal');
const divs = document.querySelectorAll('#overflow');
let startX, scrollLeft;

divs.forEach(div => {
    div.addEventListener('mousedown', (e) => {
        startX = e.pageX - div.offsetLeft;
        scrollLeft = div.scrollLeft;
        div.style.cursor = 'grabbing';
        div.addEventListener('mousemove', handleMouseMove);
    });

    div.addEventListener('mouseup', () => {
        div.style.cursor = 'grab';
        div.removeEventListener('mousemove', handleMouseMove);
    });

    div.addEventListener('mouseleave', () => {
        div.style.cursor = 'grab';
        div.removeEventListener('mousemove', handleMouseMove);
    });

    function handleMouseMove(e) {
        const x = e.pageX - div.offsetLeft;
        const walk = (x - startX) * 1; 
        div.style.transform = `translateX(${-scrollLeft + walk}px)`;
    }
});

createUser.addEventListener('click', function(){
    modal.style.display = 'flex';
    createUser.style.display = 'flex';
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}