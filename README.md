# jspointerlock
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

**HTML5 Pointer Lock Lib**

## Usage

```js
import $ from "jquery";
import PointerLock from "jspointerlock";

const element = document.body;
const pointerlock = new PointerLock(element);

pointerlock.on("change", (isLocked) => {
  console.log(`pointer is ${isLocked ? 'locked' : 'not locked'}`);
});

$(element).on("click", () => {
  pointerlock.requestPointerLock();

  setTimeout(() => {
    pointerlock.exitPointerLock();
  }, 3000);
});
```


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/jspointerlock.svg
[npm-url]: https://npmjs.org/package/jspointerlock
[downloads-image]: https://img.shields.io/npm/dm/jspointerlock.svg
[downloads-url]: https://npmjs.org/package/jspointerlock
