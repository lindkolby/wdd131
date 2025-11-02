const form = document.querySelector("#cardForm");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cardNumber = document.querySelector("#cardNumber").value.replace(/\s/g,"");
  const month = document.querySelector("#month").value;
  const year = "20" + document.querySelector("#year").value;

  if (cardNumber !== "1234123412341234") {
    message.textContent = "❌ Invalid Card Number";
    message.style.color = "red";
    return;
  }

  const exp = new Date(year, month - 1);
  if (exp < new Date()) {
    message.textContent = "❌ Card Expired";
    message.style.color = "red";
    return;
  }

  message.textContent = "✅ Payment Successful!";
  message.style.color = "green";
  form.reset();
});
