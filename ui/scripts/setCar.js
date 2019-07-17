import Api from './utils/Api.js';
import OrderHandler from './utils/OrderHandler.js';

const url = new URL(window.location.href);
const carId = url.searchParams.get('car_id');
const api = new Api();
const form = document.querySelector('[data-form="form"]');
api.getCar(carId).then((car) => {
  const orderHandler = new OrderHandler(car, form);
  orderHandler.onSubmit((priceOffered) => {
    orderHandler.disableSubmitBtn(false);
    const data = { car_id: car.id, ...priceOffered };
    api
      .placeOrder(data)
      .then((order) => {
        console.log('order:', order);
        // send success message
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
