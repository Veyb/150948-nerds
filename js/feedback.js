var feedbackOpen = document.querySelector(".map-btn");

var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = feedbackPopup.querySelector(".popup-feedback-close");

var feedbackForm = feedbackPopup.querySelector(".feedback-form")
var nameField = feedbackPopup.querySelector("[name=name]");
var emailField = feedbackPopup.querySelector("[name=email]");
var textField = feedbackPopup.querySelector("[name=text]");

var storageName = localStorage.getItem("nameField");
var storageEmail = localStorage.getItem("emailField");

feedbackOpen.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.toggle("popup-feedback-show");

  if (storageName && storageEmail) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    textField.focus();
  } else if (storageName && !storageEmail) {
    nameField.value = storageName;
    emailField.focus();
  } else if (!storageName && storageEmail) {
    emailField.value = storageEmail;
    nameField.focus();
  } else {
    nameField.focus();
  }
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("popup-feedback-show");
  feedbackPopup.classList.remove("popup-feedback-error");
});

feedbackForm.addEventListener("submit", function (event) {
  if (!nameField.value || ! emailField.value || !textField.value) {
    event.preventDefault();
    feedbackPopup.classList.remove("popup-feedback-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("popup-feedback-error");
  } else {
    localStorage.setItem("nameField", nameField.value);
    localStorage.setItem("emailField", emailField.value);
  }
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && feedbackPopup.classList.contains("popup-feedback-show")) {
    feedbackPopup.classList.remove("popup-feedback-show");
    feedbackPopup.classList.remove("popup-feedback-error");
  }
});
