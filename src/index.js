import {
  EventEmitter
} from "events";
import $ from "jquery";

export default class PointerLock extends EventEmitter {
  constructor(element) {
    super();

    this.$element = $(element);
    this.element = this.$element.get(0);
    this.isLocked = this.getLockState();

    $(document).on("pointerlockchange mozpointerlockchange, webkitpointerlockchange", this.pointerLockChange.bind(this));
  }

  getLockState() {
    return this.getPointerLockElement() === this.element;
  }

  pointerLockChange() {
    this.isLocked = this.getLockState();
    this.emit("change", this.isLocked);
  }

  requestPointerLock() {
    const element = this.element;

    if (element.requestPointerLock) {
      element.requestPointerLock();
    } else if (element.mozRequestPointerLock) {
      element.mozRequestPointerLock();
    }
  }

  exitPointerLock() {
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.mozExitPointerLock) {
      document.mozExitPointerLock();
    }
  }

  getPointerLockElement() {
    return document.pointerLockElement ||
      document.mozPointerLockElement ||
      null;
  }
}
