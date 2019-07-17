/* eslint-disable camelcase */

class StoreHandler {
  static setUser(user = '') {
    localStorage.setItem('user', user);
  }

  static deleteUser() {
    localStorage.removeItem('user');
  }

  static getUser() {
    const userItem = localStorage.getItem('user');
    return userItem ? JSON.parse(userItem) : {};
  }

  static getUserId() {
    return StoreHandler.getUser().id;
  }

  static getToken() {
    return StoreHandler.getUser().token;
  }

  static isToken() {
    return Boolean(StoreHandler.getToken());
  }

  static isAdmin() {
    return Boolean(StoreHandler.getUser().isAdmin);
  }

  static setNumOfCars(num = 0) {
    localStorage.setItem('numOfCars', num);
  }

  static getNumOfCars() {
    return localStorage.getItem('numOfCars') || 0;
  }

  static setNumOfOrders(num = 0) {
    localStorage.setItem('numOfOrders', num);
  }

  static getNumOfOrders() {
    return localStorage.getItem('numOfOrders') || 0;
  }
}

export default StoreHandler;
