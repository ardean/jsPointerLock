# jsPointerLock
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

**W3C Pointer Lock Fallback**

## Specification
[Pointer Lock API, W3C](https://w3c.github.io/pointerlock/)

## Usage

I suggest you to use [jspm](http://jspm.io/) as your package manager.

```js
import $ from "jquery";
import PointerLock from "jspointerlock";

const element = document.body;
const pointerLock = new PointerLock(element);

pointerLock.on("change", (isLocked) => {
  console.log(`pointer is ${isLocked ? 'locked' : 'not locked'}`);
});

$(element).on("click", () => {
  pointerLock.requestPointerLock();
});
```

### Directly in a browser

Please checkout the [index-dist.html](index-dist.html) file for direct usage in a browser.

## API

### Classes

- _PointerLock_
  - **Constructor**(**Element** element) extends **[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)**
  - **Members**
    - _requestPointerLock()_ => **Void**
  - **Static Members**
    - _exitPointerLock()_ => **Void**
  - **Properties**
    - _isLocked_ => **Boolean**
  - **Static Properties**
    - _isSupported_ => **Boolean**
    - _pointerLockElement_ => **Element**
  - **Events**
    - _change_ => (**Boolean** _isLocked_, **Event** _e_)
    - _error_ => (**Error** _err_, **Event** _e_)
    - _unsupported_ => ()


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/jspointerlock.svg
[npm-url]: https://npmjs.org/package/jspointerlock
[downloads-image]: https://img.shields.io/npm/dm/jspointerlock.svg
[downloads-url]: https://npmjs.org/package/jspointerlock
