import EventEmitter from "events";
import $ from "jquery";

export default class PointerLock extends EventEmitter {
  constructor(element) {
    super();

    this.$element = $(element);
    this.element = this.$element.get(0);

    $(document)
      .on("pointerlockchange mozpointerlockchange webkitpointerlockchange", this.pointerLockChange.bind(this))
      .on("pointerlockerror mozpointerlockerror webkitpointerlockerror", this.pointerLockError.bind(this));

    setTimeout(() => {
      if (!PointerLock.isSupported) {
        this.emit("unsupported");
      }
    }, 0);
  }

  requestPointerLock() {
    const element = this.element;

    if (element.requestPointerLock) {
      return element.requestPointerLock();
    } else if (element.mozRequestPointerLock) {
      return element.mozRequestPointerLock();
    } else if (element.webkitRequestPointerLock)  {
      return element.webkitRequestPointerLock();
    }
  }

  pointerLockChange(e) {
    this.emit("change", this.isLocked, e);
  }

  pointerLockError(e) {
    this.emit("error", new Error("pointer lock failed"), e);
  }

  get isLocked() {
    return PointerLock.pointerLockElement === this.element;
  }

  static exitPointerLock() {
    if (document.exitPointerLock) {
      return document.exitPointerLock();
    } else if (document.mozExitPointerLock) {
      return document.mozExitPointerLock();
    } else if (document.webkitExitPointerLock) {
      return document.webkitExitPointerLock();
    }
  }

  static get pointerLockElement() {
    return document.pointerLockElement ||
      document.mozPointerLockElement ||
      document.webkitPointerLockElement ||
      null;
  }

  static get isSupported() {
    return "pointerLockElement" in document ||
      "mozPointerLockElement" in document ||
      "webkitPointerLockElement" in document;
  }
}

export { PointerLock };
