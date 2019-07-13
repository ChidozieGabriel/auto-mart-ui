/* eslint-disable camelcase */
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
    const userItem = localStorage.getItem('user');
    const user = userItem ? JSON.parse(userItem) : {};
    const isLogged = Object.keys(user).length !== 0;
    const noDisplay = (selector) => {
      document.querySelectorAll(selector).forEach((e) => {
        e.style.display = 'none';
      });
    };

    if (isLogged) {
      noDisplay('[data-logged="false"]');
      const username = document.querySelector('[data-username="text"]');
      username.textContent = user.firstname || user.lastname || user.email;
    } else {
      noDisplay('[data-logged="true"]');
    }

    document.querySelector('[data-link="logout"]').addEventListener('click', () => {
      localStorage.removeItem('user');
    });
  }
}

export default DOMHandler;
