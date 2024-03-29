function handleModal() {
    header__button.addEventListener("click", () => {
        modal.showModal();
    });

    itensEmpty__container.addEventListener("click", () => {
        modal.showModal();
    });

    closeModal(formTopPart__closeButton)
    closeModal(formButtons__cancel)
    closeModal(formButtons__submit)
}
handleModal();

function closeModal(button) {
    button.addEventListener("click", () => {
        event.preventDefault()
        
        modal.close();
    });
}