import $ from "jquery";
import PointerLock from "./src/index";

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
