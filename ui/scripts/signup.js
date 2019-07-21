import FormHandler from './utils/FormHandler.js';
import Api from './utils/Api.js';
import DOMHandler from './utils/DOMHandler.js';

const api = new Api();
const form = document.querySelector('[data-form="form"]');
const formHandler = new FormHandler(form);
formHandler.onSubmit((json) => {
  api
    .signup(json)
    .then(() => {
      DOMHandler.redirect();
    })
    .catch((err) => {
      console.log('ERR: ', err);
      DOMHandler.setError(err);
    })
    .finally(() => formHandler.disableSubmitBtn(false));
});
