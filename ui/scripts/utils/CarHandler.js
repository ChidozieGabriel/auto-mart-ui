import Utils from './Utils.js';

/* eslint-disable camelcase */
class CarHandler {
  constructor(cars) {
    this.cars = cars;
    this.populateCars();
  }

  onOrder(clickListener) {
    this.clickListener = clickListener;
  }

  populateCars() {
    const carListSel = document.querySelector('[data-car="list"]');
    this.cars.forEach((car, i) => {
      const {
        color = '',
        manufacturer = '',
        state = '',
        model = '',
        year = '',
        description = '...',
        price,
        id,
      } = car;
      const image_url = car.image_url || 'images/sample_car.png';
      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'card');
      cardDiv.setAttribute('data-car', 'card');

      const carImg = document.createElement('img');
      carImg.setAttribute('src', image_url);
      carImg.setAttribute('alt', 'car photo');

      const carSummary = document.createElement('h3');
      carSummary.setAttribute('class', 'summary');
      carSummary.textContent = `${state} ${color} ${manufacturer} ${model} ${year}`;

      const carDescription = document.createElement('span', 'description');
      carDescription.setAttribute('class', 'description');
      carDescription.textContent = description;

      const carPrice = document.createElement('span');
      carPrice.setAttribute('class', 'price');
      carPrice.textContent = `₦ ${Utils.formatMoney(price)}`;

      const btn = document.createElement('button');
      btn.setAttribute('data-card', 'button');
      btn.setAttribute('id', id);
      btn.textContent = 'view';
      btn.addEventListener('click', () => {
        if (this.clickListener) this.clickListener(car);
      });

      cardDiv.appendChild(carImg);
      cardDiv.appendChild(carSummary);
      cardDiv.appendChild(carDescription);
      cardDiv.appendChild(carPrice);
      cardDiv.appendChild(btn);
      carListSel.appendChild(cardDiv);
    });
  }
}

export default CarHandler;
