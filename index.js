import $ from "jquery";
import PointerLock from "./src/index";

const element = document.body;
const pointerlock = new PointerLock(element);

pointerlock.on("change", (isOn) => {
  console.log("pointerlock is " + (isOn ? "on" : "off"));
});

$(element).on("click", () => {
  pointerlock.requestPointerLock();
});
