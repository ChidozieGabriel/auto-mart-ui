import StoreHandler from './StoreHandler.js';

/* eslint-disable camelcase */
const noDisplay = (selector) => {
  document.querySelectorAll(selector).forEach((e) => {
    e.style.display = 'none';
  });
};

class DOMHandler {
  static toJson(formData) {
    const json = {};
    formData.forEach((value, key) => {
      json[key] = value;
    });
    return json;
  }

  static addClickListener(elements, callback, single = false) {
    const iterate = single ? [elements] : elements;
    iterate.forEach((e) => {
      e.addEventListener('click', () => {
        callback(e);
      });
    });
  }

  static setUser() {
    const isLogged = StoreHandler.isToken();

    if (isLogged) {
      noDisplay('[data-logged="false"]');
    } else {
      noDisplay('[data-logged="true"]');
    }

    document.querySelector('[data-link="logout"]').addEventListener('click', () => {
      StoreHandler.deleteUser();
    });
  }

  static setAdmin() {
    const isAdmin = StoreHandler.isAdmin();

    if (isAdmin) {
      noDisplay('[data-admin="false"]');
    } else {
      noDisplay('[data-admin="true"]');
    }
  }

  static setError(msg) {
    const e = document.querySelector('[data-error="text"]');
    e.parentElement.style.display = '';
    e.textContent = msg;
  }

  static setNumCars() {
    const e = document.querySelector('[data-cars="number"]');
    e.textContent = StoreHandler.getNumOfCars();
  }

  static setNumOrders() {
    const e = document.querySelector('[data-orders="number"]');
    e.textContent = StoreHandler.getNumOfOrders();
  }

  static setView() {
    DOMHandler.setUser();
    DOMHandler.setAdmin();
    DOMHandler.setNumCars();
    DOMHandler.setNumOrders();
  }

  static redirect(address) {
    if (address) {
      window.location.href = address;
      return;
    }

    let redirect = document.referrer;
    if (!redirect) {
      redirect = 'carlist';
    }

    if (redirect.toLowerCase().includes('signup') || redirect.toLowerCase().includes('signin')) {
      redirect = 'carlist';
    }

    window.location.href = redirect;
  }
}

export default DOMHandler;
