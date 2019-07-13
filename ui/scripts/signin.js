import Api from './utils/Api.js';
import FormHandler from './utils/FormHandler.js';

const api = new Api();
const form = document.querySelector('[data-form="form"]');
const formHandler = new FormHandler(form);
formHandler.onSubmit((json) => {
  api
    .signin(json)
    .then(() => {
      let redirect = document.referrer;
      if (!redirect || redirect.toLowerCase().includes('signup')) {
        redirect = 'index';
      }

      window.location.href = redirect;
    })
    .catch(err => console.log('ERR: ', err))
    .finally(() => formHandler.disableSubmitBtn(false));
});
