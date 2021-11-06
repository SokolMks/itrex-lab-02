import { createElement } from "../../common/render.js";

export default class AbstractComponent {
  constructor() {
    this.element = null;
    this.markUp = null;
  }

  getElement() {
    if (this.element) {
      return this.element;
    } else {
      return this.element = createElement(this.getTemplate());
    }
  }
}

