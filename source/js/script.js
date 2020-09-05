var openText = "Открыть меню";
var closeText = "Закрыть меню";

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var textToggle = document.querySelector(".main-nav__toggle span");

navToggle.classList.remove("main-nav__toggle--nojs");
navMain.classList.add("main-nav--closed");
textToggle.textContent = openText;

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

var form = document.querySelector(".page-main__form");
var submitButton = document.querySelector("[type=submit]");

if (form) {
  submitButton.addEventListener("click", function(event) {
    var name = document.querySelector("[name=name]");
    var weight = document.querySelector("[name=weight]");
    var email = document.querySelector("[name=email]");
    var emailIcon = document.querySelector(".owner-contacts__item--mail .owner-contacts__icon")
    var phone = document.querySelector("[name=phone]");
    var phoneIcon = document.querySelector(".owner-contacts__item--phone .owner-contacts__icon");
    var hasFocus = false;

    name.classList.remove("page-main__form-input--status-error");
    weight.classList.remove("page-main__form-input--status-error");
    email.classList.remove("page-main__form-input--status-error");
    emailIcon.classList.remove("owner-contacts__icon--status-error");
    phone.classList.remove("page-main__form-input--status-error");
    phoneIcon.classList.remove("owner-contacts__icon--status-error");

    if(!name.value || !weight.value || !email.value || !phone.value) {
      event.preventDefault();

      if (!name.value) {
        name.classList.add("page-main__form-input--status-error");
        name.focus();
        hasFocus = true;
      }

      if (!weight.value) {
        weight.classList.add("page-main__form-input--status-error");
        if (!hasFocus) {
          weight.focus();
          hasFocus = true;
        }
      }

      if (!email.value) {
        email.classList.add("page-main__form-input--status-error");
        emailIcon.classList.add("owner-contacts__icon--status-error");
        if (!hasFocus) {
          email.focus();
          hasFocus = true;
        }
      }

      if (!phone.value) {
        phone.classList.add("page-main__form-input--status-error");
        phoneIcon.classList.add("owner-contacts__icon--status-error");
        if (!hasFocus) {
          phone.focus();
        }
      }
    }
  });
}
