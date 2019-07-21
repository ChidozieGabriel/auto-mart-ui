/* eslint-disable camelcase */

import Utils from './Utils.js';

const htmlString = `
<div data-car="card" class="third margin-bottom">
  <div class="card padding-all-8 center display-container">
    <div class="display-topright display-hover">
      <img
        data-admin="true"
        data-car="delete"
        class="button hover-white"
        src="images/trash-can-outline.svg"
        alt=""
      />
    </div>

    <img
      data-car="image"
      class="image fitImage"
      src="images/sample_car.png"
      alt="car photo"
    />
    <div class="container center">
      <h4 data-car="summary" class="one-line">
        Red Toyota Corolla 2010
      </h4>
      <span data-car="description" class="one-line block">
        This car is strong, fresh, and robust. It still retains the
        new car smell :-)
      </span>
      <span data-car="price" class="block">₦ 2,500,000.00</span>
      <button data-car="view" class="btn teal">view</button>
      <!-- <a data-car="report" class="report btn">Report as fradulent</a> -->
    </div>
  </div>
</div>
`;

const getAttributes = () => {
  const node = Utils.htmlToElement(htmlString);
  const img = node.querySelector('[data-car="image"]');
  const summary = node.querySelector('[data-car="summary"]');
  const description = node.querySelector('[data-car="description"]');
  const price = node.querySelector('[data-car="price"]');
  const viewBtn = node.querySelector('[data-car="view"]');
  const deleteBtn = node.querySelector('[data-car="delete"]');

  return {
    node,
    img,
    summary,
    description,
    price,
    viewBtn,
    deleteBtn,
  };
};

class CarHandler {
  constructor(cars, parentNode) {
    this.parentNode = parentNode;
    this.cars = cars;
    this.populateCars();
  }

  onOrder(clickListener) {
    this.orderClickListener = clickListener;
  }

  onDelete(clickListener) {
    this.deleteClickListener = clickListener;
  }

  populateCars() {
    this.cars.forEach((car) => {
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

      const attr = getAttributes();
      const image_url = car.image_url || 'images/sample_car.png';

      attr.img.setAttribute('src', image_url);
      attr.summary.textContent = `${state} ${color} ${manufacturer} ${model} ${year}`;
      attr.description.textContent = description;
      attr.price.textContent = `₦ ${Utils.formatMoney(price)}`;
      attr.viewBtn.setAttribute('id', id);
      attr.viewBtn.addEventListener('click', () => {
        if (this.orderClickListener) this.orderClickListener(car);
      });

      attr.deleteBtn.addEventListener('click', () => {
        // display modal
        if (this.deleteClickListener) this.deleteClickListener(car);
      });

      this.parentNode.appendChild(attr.node);
    });
  }
}

export default CarHandler;
