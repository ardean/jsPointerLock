import $ from "jquery";
import PointerLock from "./src/index";

const $element = $(".rectangle");
const $info = $(".info");

if (!PointerLock.isSupported) {
  $info
    .addClass("error")
    .text("pointer lock unsupported, please use another browser");
} else {
  const pointerLock = new PointerLock($element);
  pointerLock
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
}
