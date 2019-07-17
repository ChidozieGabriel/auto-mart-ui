import CarHandler from './utils/CarHandler.js';
import Api from './utils/Api.js';
import DOMHandler from './utils/DOMHandler.js';
import StoreHandler from './utils/StoreHandler.js';

const api = new Api();
const cardContainer = document.querySelector('[data-container="card"]');
api
  .getCars()
  .then((cars) => {
    const carHandler = new CarHandler(cars, cardContainer);
    console.log(cars);
    carHandler.onOrder((car) => {
      window.location.href = `seecar?car_id=${car.id}`;
    });

    const len = cars ? cars.length : 0;
    StoreHandler.setNumOfCars(len);
    DOMHandler.setView();
  })
  .catch(err => console.error(err));

// const userId = StoreHandler.getUserId();
// if (userId) {
//   api.getOrders(userId).then((orders) => {
//     const len = orders ? orders.length : 0;
//     StoreHandler.setNumOfOrders(len);
//     DOMHandler.setView();
//   });
// }
