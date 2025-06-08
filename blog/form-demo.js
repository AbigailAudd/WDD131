function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  const name = theForm.fullName.value.trim();
  const ccNumber = theForm.creditCardNumber.value.trim();
  const paymentMethod = theForm.paymentMethod.value;

  if (name !== "Bob") {
    isValid = false;
    errors.push("Only users named Bob can submit the form.");
  }

  if (paymentMethod === "creditCard" && ccNumber !== "1234123412341234") {
    isValid = false;
    errors.push("Invalid credit card number. Try 1234123412341234.");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.getElementById("checkoutForm");
  const creditCardContainer = document.getElementById("creditCardContainer");
  const paypalContainer = document.getElementById("paypalContainer");

  const creditCardInput = theForm.creditCardNumber;
  const paypalInput = theForm.paypalUsername;

  // Reset both fields
  creditCardContainer.classList.add("hide");
  creditCardInput.required = false;

  paypalContainer.classList.add("hide");
  paypalInput.required = false;

  if (e.target.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    creditCardInput.required = true;
  } else if (e.target.value === "paypal") {
    paypalContainer.classList.remove("hide");
    paypalInput.required = true;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

document
  .getElementById("paymentMethod")
  .addEventListener("change", togglePaymentDetails);

document
  .getElementById("checkoutForm")
  .addEventListener("submit", validateForm);
