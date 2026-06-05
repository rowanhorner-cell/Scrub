const quoteButtons = document.querySelectorAll(".quote-jump");
const quoteForm = document.querySelector(".quote-form");

quoteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!quoteForm) return;

    quoteForm.classList.remove("form-attention");

    // Forces the browser to restart the animation every time the button is clicked.
    void quoteForm.offsetWidth;

    quoteForm.classList.add("form-attention");
  });
});