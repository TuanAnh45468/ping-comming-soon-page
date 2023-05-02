document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const errorInvalidEmail = document.getElementById("errorInvalidEmail");
  const errorEmptyEmail = document.getElementById("errorEmptyEmail");
  const emailInput = document.getElementById("email");

  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const isValidEmail = validator.isEmail(emailValue);
    errorInvalidEmail.classList.add("hidden");
    errorEmptyEmail.classList.add("hidden");

    if (emailValue === "") {
      errorEmptyEmail.classList.remove("hidden");
      emailInput.classList.add("border-light-red");
      return;
    }

    if (!isValidEmail) {
      errorInvalidEmail.classList.remove("hidden");
      emailInput.classList.add("border-light-red");
      return;
    }

    alert("Email submitted successfully!");
    emailInput.classList.remove("border-light-red");
  });
});
