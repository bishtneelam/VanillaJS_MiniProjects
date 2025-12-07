const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');

openModal.onclick = () => {
    modal.showModal();
}

closeModal.onclick = () => {
    modal.close();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.close();
})