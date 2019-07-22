import CarHandler from './utils/CarHandler.js';
import Api from './utils/Api.js';
import DOMHandler from './utils/DOMHandler.js';
import StoreHandler from './utils/StoreHandler.js';
import ModalHandler from './utils/ModalHandler.js';

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

    carHandler.onDelete((car) => {
      console.log('delete moi? :-(', car);
      // Display modal
      const modal = document.querySelector('[data-modal="delete"]');
      const modalHandler = new ModalHandler(modal);
      modalHandler.onSubmit(() => {
        api
          .deleteCar(car.id)
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            modalHandler.close();
          });
      });
    });

    carHandler.onReport((car) => {
      console.log('reported');
      const modal = document.querySelector('[data-modal="report"]');
      const modalHandler = new ModalHandler(modal);
      modalHandler.onSubmit((json) => {
        api
          .reportCar({ ...json, car_id: car.id })
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            modalHandler.close();
          });
      });
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
