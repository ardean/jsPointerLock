import $ from "jquery";
import PointerLock from "./src/index";

const $element = $(".rectangle");
const $info = $(".info");
const pointerLock = new PointerLock($element);

pointerLock
  .on("unsupported", () => {
    $info.addClass("error");
    $info.text("pointer lock unsupported, please use another browser");
  })
  .on("change", (isLocked) => {
    if (isLocked) {
      $element.addClass("locked");
    } else {
      $element.removeClass("locked");
    }

    $info.removeClass("error");
    $info.text(`pointer is ${isLocked ? 'locked' : 'not locked'}`);
  }).on("error", (err) => {
    $info.addClass("error");
    $info.text(err.message);
  });

$element.on("click", () => {
  pointerLock.requestPointerLock();
});
