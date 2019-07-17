class Utils {
  static formatMoney(num) {
    return Number(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!(\d)))/g, '$1 ');
  }

  static htmlToElement(html) {
    const template = document.createElement('template');
    const htmlTrim = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = htmlTrim;
    return template.content.firstChild;
  }
}

export default Utils;
