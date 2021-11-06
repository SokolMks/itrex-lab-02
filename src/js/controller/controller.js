import { render } from "../common/render.js";
import { renderPosition, routes } from "../common/consts.js";
export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.setActiveState = this.setActiveState.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.model.addHandlers(this.onChangeHandle);
    this.createRouting();

  }

  renderPage(rootBody) {
    this.root = rootBody;
    this.isActive = this.model.getCurrentState();
    render(this.root, this.view.getElement(), renderPosition.end);
    this.view.setHandleChange(this.setActiveState);
    this.view.renderActivePage(this.isActive);
  }

  setActiveState(activeState) {
    this.model.setCurrentState(activeState);
     history.pushState({activeState}, {activeState}, activeState);

  }

  onChangeHandle() {
    this.view.renderActivePage(this.model.getCurrentState());
  }


  createRouting() {
    history.pushState({ activeState: routes.signUp }, { activeState: routes.signUp }, routes.signUp);
    window.addEventListener('popstate', () => {
      console.log('agfawga');
      this.model.setCurrentState(location.pathname);
    })
  }
}