(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('events'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'events', 'jquery'], factory) :
  (factory((global.jsPointerLock = global.jsPointerLock || {}),global.EventEmitter,global.$));
}(this, (function (exports,EventEmitter,$) { 'use strict';

EventEmitter = 'default' in EventEmitter ? EventEmitter['default'] : EventEmitter;
$ = 'default' in $ ? $['default'] : $;

var _classCallCheck = (function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _possibleConstructorReturn = (function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
});

var _inherits = (function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
});

var PointerLock = function (_EventEmitter) {
  _inherits(PointerLock, _EventEmitter);

  function PointerLock(element) {
    _classCallCheck(this, PointerLock);

    var _this = _possibleConstructorReturn(this, (PointerLock.__proto__ || Object.getPrototypeOf(PointerLock)).call(this));

    _this.$element = $(element);
    _this.element = _this.$element.get(0);

    $(document).on("pointerlockchange mozpointerlockchange webkitpointerlockchange", _this.pointerLockChange.bind(_this)).on("pointerlockerror mozpointerlockerror webkitpointerlockerror", _this.pointerLockError.bind(_this));

    setTimeout(function () {
      if (!PointerLock.isSupported) {
        _this.emit("unsupported");
      }
    }, 0);
    return _this;
  }

  _createClass(PointerLock, [{
    key: "requestPointerLock",
    value: function requestPointerLock() {
      var element = this.element;

      if (element.requestPointerLock) {
        return element.requestPointerLock();
      } else if (element.mozRequestPointerLock) {
        return element.mozRequestPointerLock();
      } else if (element.webkitRequestPointerLock) {
        return element.webkitRequestPointerLock();
      }
    }
  }, {
    key: "pointerLockChange",
    value: function pointerLockChange(e) {
      this.emit("change", this.isLocked, e);
    }
  }, {
    key: "pointerLockError",
    value: function pointerLockError(e) {
      this.emit("error", new Error("pointer lock failed"), e);
    }
  }, {
    key: "isLocked",
    get: function get() {
      return PointerLock.pointerLockElement === this.element;
    }
  }], [{
    key: "exitPointerLock",
    value: function exitPointerLock() {
      if (document.exitPointerLock) {
        return document.exitPointerLock();
      } else if (document.mozExitPointerLock) {
        return document.mozExitPointerLock();
      } else if (document.webkitExitPointerLock) {
        return document.webkitExitPointerLock();
      }
    }
  }, {
    key: "pointerLockElement",
    get: function get() {
      return document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || null;
    }
  }, {
    key: "isSupported",
    get: function get() {
      return "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
    }
  }]);

  return PointerLock;
}(EventEmitter);

exports['default'] = PointerLock;
exports.PointerLock = PointerLock;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=jspointerlock.js.map