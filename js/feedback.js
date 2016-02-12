var feedbackOpen = document.querySelector(".map-btn");

var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = feedbackPopup.querySelector(".popup-feedback-close");

feedbackOpen.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.toggle("popup-feedback-show");
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("popup-feedback-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && feedbackPopup.classList.contains("popup-feedback-show")) {
    feedbackPopup.classList.remove("popup-feedback-show");
  }
});
