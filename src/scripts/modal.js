/* Desenvolva sua lógica aqui */
function handleModal() {
    header__button.addEventListener("click", () => {
        modal.showModal();
    });

    closeModal(formTopPart__closeButton)
    closeModal(formButtons__cancel)
}
handleModal();

function closeModal(button) {
    button.addEventListener("click", () => {
        event.preventDefault()
        
        modal.close();
    });
}