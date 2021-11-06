import { renderPosition } from "./consts.js";

export const createElement = (element) => {
  const createBox = document.createElement('div');
  createBox.innerHTML = element;
  return createBox.firstChild;
};

export const render = (container, element, place) => {
  if (place === renderPosition.end) {
    container.prepend(element);
  } else {
    container.append(element);
  }
}

export const remove = (element) => {
  element.getElement().remove();
}