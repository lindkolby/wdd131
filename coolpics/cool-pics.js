const gallery = document.querySelector('main');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
    
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

btn.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}