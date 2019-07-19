import Utils from './Utils.js';
import FormHandler from './FormHandler.js';

/* eslint-disable camelcase */
class OrderHandler extends FormHandler {
  constructor(car, form) {
    super(form);
    const {
      id, manufacturer, model, price, color, bodyType, year, description, image_url,
    } = car;
    this.id = id;
    this.manufacturer = manufacturer;
    this.model = model || '-';
    this.price = price;
    this.color = color || '-';
    this.bodyType = bodyType || '-';
    this.year = year || '-';
    this.description = description || '-';
    console.log('image', image_url);
    this.image_url = image_url || 'images/sample_car.png';

    this.populateCar();
  }

  populateCar() {
    document.querySelector('[data-car="manufacturer"]').textContent = this.manufacturer;
    document.querySelector('[data-car="model"]').textContent = this.model;
    document.querySelector('[data-car="price"]').textContent = `₦ ${Utils.formatMoney(this.price)}`;
    document.querySelector('[data-car="color"]').textContent = this.color;
    document.querySelector('[data-car="bodytype"]').textContent = this.bodyType;
    document.querySelector('[data-car="year"]').textContent = this.year;
    document.querySelector('[data-car="description"]').textContent = this.description;
    document.querySelector('[data-car="image"]').setAttribute('src', this.image_url);
    const bidpriceElem = document.querySelector('[data-form="bidprice"]');
    bidpriceElem.value = Math.floor(this.price);
    return this;
  }
}

export default OrderHandler;
