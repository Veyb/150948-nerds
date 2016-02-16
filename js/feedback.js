var feedbackOpen = document.querySelector(".map-btn");

var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = feedbackPopup.querySelector(".popup-feedback-close");

var feedbackForm = feedbackPopup.querySelector(".feedback-form")
var nameField = feedbackPopup.querySelector("[name=name]");
var emailField = feedbackPopup.querySelector("[name=email]");
var textField = feedbackPopup.querySelector("[name=text]");

var storageName = localStorage.getItem("nameField");
var storageEmail = localStorage.getItem("emailField");


function handleFeedbackPopupOpen() {
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
}

function isElementNestedInNode(target, parent) {
  if (!target) { return false; }
  if (target === parent) { return true; }

  return isElementNestedInNode(target.parentNode, parent);
}

document.body.addEventListener("click", function(event) {
  var targetInFeedbackOpen = isElementNestedInNode(event.target, feedbackOpen);
  var targetInFeedbackPopup = isElementNestedInNode(event.target, feedbackPopup);

  var isFeedbackPopupOpened = feedbackPopup.classList.contains("popup-feedback-show");

  if (isFeedbackPopupOpened && !targetInFeedbackPopup) {
    event.preventDefault();
    feedbackPopup.classList.remove("popup-feedback-show");
    return feedbackPopup.classList.remove("popup-feedback-error");
  }

  if (!isFeedbackPopupOpened && targetInFeedbackOpen) {
    event.preventDefault();
    feedbackPopup.classList.add("popup-feedback-show");
    return handleFeedbackPopupOpen();
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
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && feedbackPopup.classList.contains("popup-feedback-show")) {
    feedbackPopup.classList.remove("popup-feedback-show");
    feedbackPopup.classList.remove("popup-feedback-error");
  }
});
