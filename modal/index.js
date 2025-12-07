const overlay = document.querySelector("#overlay");

document.querySelector("#open-modal").onclick = () => {
    overlay.style.display = 'flex';
}
document.querySelector('#close-modal').onclick = () => {
    overlay.style.display = 'none';
}
overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
})
function closeModal() {
    overlay.style.display = "none"
}