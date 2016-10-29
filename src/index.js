import {
  EventEmitter
} from "events";
import $ from "jquery";

export default class PointerLock extends EventEmitter {
  constructor(element) {
    super();

    this.element = element;

    $(document).on("pointerlockchange mozpointerlockchange, webkitpointerlockchange", this.pointerLockChange.bind(this));
  }

  pointerLockChange() {
    if (this.getPointerLockElement() === this.element) {
      this.isLocked = true;
      this.emit("change", this.isLocked);
    } else {
      this.isLocked = false;
      this.emit("change", this.isLocked);
    }
  }

  requestPointerLock() {
    const element = this.element;

    if (element.requestPointerLock) {
      element.requestPointerLock();
    } else if (element.mozRequestPointerLock) {
      element.mozRequestPointerLock();
    }
  }

  getPointerLockElement() {
    return document.pointerLockElement ||
      document.mozPointerLockElement ||
      null;
  }
}
