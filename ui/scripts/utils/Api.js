import StoreHandler from './StoreHandler.js';

const CONTENT_TYPE = { json: 'application/json; charset=UTF-8' };
const HOST = {
  development: 'http://localhost:3000',
  production: 'https://automart-site.herokuapp.com',
};
const myHost = HOST.production;
// const myHost = HOST.development;

const myFetch = async (url, init = {}, form, isJson = true) => {
  const token = StoreHandler.getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: CONTENT_TYPE.json,
  };

  let body = form;
  if (isJson) {
    body = JSON.stringify(form);
    headers['Content-Type'] = CONTENT_TYPE.json;
  }

  const res = await fetch(url, { ...init, body, headers });
  const json = await res.json();
  const { success, data, error } = json;
  if (!success) throw error;
  return data;
};

class Api {
  constructor(host = `${myHost}/api/v1`) {
    this.host = host;
  }

  async signup(form) {
    const url = `${this.host}/auth/signup`;
    const init = { method: 'POST' };
    const data = await myFetch(url, init, form);
    StoreHandler.setUser(JSON.stringify(data));
  }

  async signin(form) {
    const url = `${this.host}/auth/signin`;
    const init = { method: 'POST' };
    const data = await myFetch(url, init, form);
    StoreHandler.setUser(JSON.stringify(data));
  }

  async getCars() {
    return myFetch(`${this.host}/car`);
  }

  async getCar(id) {
    return myFetch(`${this.host}/car/${id}`);
  }

  async deleteCar(id) {
    const init = { method: 'DELETE' };
    return myFetch(`${this.host}/car/${id}`, init);
  }

  async getOrders(id) {
    return myFetch(`${this.host}/order/${id}`);
  }

  async placeOrder(form) {
    const url = `${this.host}/order`;
    const init = { method: 'POST' };
    return myFetch(url, init, form);
  }

  async postCar(form, isJson = false) {
    const url = `${this.host}/car`;
    const init = { method: 'POST' };
    return myFetch(url, init, form, isJson);
  }
}

export default Api;
