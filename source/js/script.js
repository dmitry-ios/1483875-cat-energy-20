var openText = "Открыть меню";
var closeText = "Закрыть меню";

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var textToggle = document.querySelector(".main-nav__toggle span");

navToggle.classList.remove("main-nav__toggle--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    textToggle.textContent = closeText;
  } else {
    navMain.classList.add("main-nav--closed");
    textToggle.textContent = openText;
  }
});

var beforeButton = document.querySelector(".true-story__button--before");
var afterButton = document.querySelector(".true-story__button--after");
var afterPicture = document.querySelector(".true-story__after-inner");
var beforePicture = document.querySelector(".true-story__before-inner");
var switchControl = document.querySelector(".switch-control__pin");

if (beforeButton) {
  beforePicture.classList.remove("true-story__before-inner--nojs");

  beforeButton.addEventListener("click", function () {
    console.log("before");
    afterPicture.style.width = "0";
    beforePicture.style.width = "100%";

    if (switchControl.classList.contains("switch-control__pin--right")) {
      switchControl.classList.remove("switch-control__pin--right");
    }
  });
}

if (afterButton) {
  afterPicture.classList.remove("true-story__after-inner--nojs");

  afterButton.addEventListener("click", function () {
    console.log("after");
    afterPicture.style.width = "100%";
    beforePicture.style.width = "0";

    if (!switchControl.classList.contains("switch-control__pin--right")) {
      switchControl.classList.add("switch-control__pin--right");
    }
  });
}
