import Api from './utils/Api.js';
import FormHandler from './utils/FormHandler.js';
import DOMHandler from './utils/DOMHandler.js';
import ImageHandler from './utils/ImageHandler.js';

const api = new Api();
const form = document.querySelector('[data-form="form"]');
const imgSel = document.querySelector('[data-car="image"]');
const fileSel = document.querySelector('[data-car="file"]');
const formHandler = new FormHandler(form);

DOMHandler.setUser();
ImageHandler.handle(fileSel, imgSel);
formHandler.onSubmit((json, formData) => {
  api
    .postCar(formData)
    .then((data) => {
      console.log('data:', data);
      window.location.href = document.referrer || 'index';
    })
    .catch(err => console.error(err))
    .finally(() => formHandler.disableSubmitBtn(false));
});
