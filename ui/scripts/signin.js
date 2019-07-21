import Api from './utils/Api.js';
import FormHandler from './utils/FormHandler.js';
import DOMHandler from './utils/DOMHandler.js';

const api = new Api();
const form = document.querySelector('[data-form="form"]');
const formHandler = new FormHandler(form);

formHandler.onSubmit((json) => {
  api
    .signin(json)
    .then(() => {
      DOMHandler.redirect();
    })
    .catch((err) => {
      console.log('ERR: ', err);
      DOMHandler.setError(err);
    })
    .finally(() => formHandler.disableSubmitBtn(false));
});
