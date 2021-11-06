import { routes } from "../common/consts.js";
export default class Model {
  constructor() {
    this.currentState = routes.signUp;
    this.changeHandlers = [];
  }

  addHandlers(handler) {
    this.changeHandlers.push(handler);
  }

  callHandlers(handlers) {
    handlers.forEach(element => element());
  }

  setCurrentState(state) {
    this.currentState = state;
    this.callHandlers(this.changeHandlers);
  }

  getCurrentState() {
    return this.currentState;
  }
}