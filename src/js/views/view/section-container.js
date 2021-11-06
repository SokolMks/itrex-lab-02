import AbstractComponent from "../abstract-components/abstract-components.js";
import { render, remove } from "../../common/render.js";
import { renderPosition, routes } from "../../common/consts.js";
import SignUp from '../view/sign-up.js';
import SignIn from '../view/sign-in.js';
import Reset from '../view/reset.js';
import ResetComfirm from '../view/resetconfirm.js';
import route from "color-convert/route";


export default class SectionContainer extends AbstractComponent {
  constructor() {
    super();

    this.currentElement = null;

  }

  getTemplate() {
   return this.markUp = createSectionContainer();
  }

  renderActivePage(activeState) {
    if (this.currentElement) {
      remove(this.currentElement);
    }

    switch (activeState) {
      case routes.signUp:
        this.signUpContainer = new SignUp(this.handleActiveChange);
        this.currentElement = this.signUpContainer;
        render(this.element, this.signUpContainer.getElement(), renderPosition.end);
        break;
      case routes.signIn:
        this.signInContainer = new SignIn(this.handleActiveChange);
        this.currentElement = this.signInContainer;
        render(this.element, this.signInContainer.getElement(), renderPosition.end);
        break;
      case routes.reset:
        this.resetContainer = new Reset(this.handleActiveChange);
        this.currentElement = this.resetContainer;
        render(this.element, this.resetContainer.getElement(), renderPosition.end);
        break;
      case routes.resetConfirm:
        this.resetConfirmContainer = new ResetComfirm(this.handleActiveChange);
        this.currentElement = this.resetConfirmContainer;
        render(this.element, this.resetConfirmContainer.getElement(), renderPosition.end);
        break;
    }
  }

  setHandleChange(handleChange) {
    this.handleActiveChange = handleChange;

  }


}

const createSectionContainer = () => {
  return (
    `<section class="section">
    </section>`
  )
}