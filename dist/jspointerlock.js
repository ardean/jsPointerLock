(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('plugin-babel/babel-helpers/classCallCheck.js'), require('plugin-babel/babel-helpers/createClass.js'), require('plugin-babel/babel-helpers/possibleConstructorReturn.js'), require('plugin-babel/babel-helpers/inherits.js'), require('events'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'plugin-babel/babel-helpers/classCallCheck.js', 'plugin-babel/babel-helpers/createClass.js', 'plugin-babel/babel-helpers/possibleConstructorReturn.js', 'plugin-babel/babel-helpers/inherits.js', 'events', 'jquery'], factory) :
  (factory((global.[src = global.[src || {}),global._classCallCheck,global._createClass,global._possibleConstructorReturn,global._inherits,global.EventEmitter,global.$));
}(this, (function (exports,_classCallCheck,_createClass,_possibleConstructorReturn,_inherits,EventEmitter,$) { 'use strict';

_classCallCheck = 'default' in _classCallCheck ? _classCallCheck['default'] : _classCallCheck;
_createClass = 'default' in _createClass ? _createClass['default'] : _createClass;
_possibleConstructorReturn = 'default' in _possibleConstructorReturn ? _possibleConstructorReturn['default'] : _possibleConstructorReturn;
_inherits = 'default' in _inherits ? _inherits['default'] : _inherits;
EventEmitter = 'default' in EventEmitter ? EventEmitter['default'] : EventEmitter;
$ = 'default' in $ ? $['default'] : $;

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

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=jspointerlock.js.map