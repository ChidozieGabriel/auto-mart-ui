import FormHandler from './FormHandler.js';

class ModalHandler extends FormHandler {
  constructor(modal) {
    super(modal);
    this.modal = modal;
    this.modal.style.display = 'block';
    this.modal.querySelector('[data-close="true"]').addEventListener('click', () => {
      this.close();
    });
  }

  close() {
    this.modal.style.display = 'none';
  }
}

export default ModalHandler;
