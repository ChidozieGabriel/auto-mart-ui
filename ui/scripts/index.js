import Api from './utils/Api.js';
import FormHandler from './utils/FormHandler.js';
import CarHandler from './utils/CarHandler.js';
import DOMHandler from './utils/DOMHandler.js';

const api = new Api();
const postBtn = document.querySelector('[data-button="post"]');
const filter = document.querySelector('[data-filter="form"]');
const filterFormHandler = new FormHandler(filter);

DOMHandler.setUser();
filterFormHandler.onSubmit((data) => {
  console.log('data:', data);
});

postBtn.addEventListener('click', () => {
  window.location.href = 'postcar';
});

api
  .getCars()
  .then((data) => {
    const carHandler = new CarHandler(data);
    carHandler.onOrder((car) => {
      window.location.href = `purchaseorder?car_id=${car.id}`;
    });
  })
  .catch(err => console.error(err));
