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
      let redirect = document.referrer;
      if (!redirect) {
        redirect = 'index';
      }

      if (redirect.toLowerCase().includes('signup') || redirect.toLowerCase().includes('signin')) {
        redirect = 'index';
      }

      window.location.href = redirect;
    })
    .catch((err) => {
      console.log('ERR: ', err);
      DOMHandler.setError(err);
    })
    .finally(() => formHandler.disableSubmitBtn(false));
});
