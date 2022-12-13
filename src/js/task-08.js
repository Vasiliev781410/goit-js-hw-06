const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {elements: { email, password } } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const message = "Please fill in all the fields!";
    alert(message);
    return;
  }
  const loginData = {
    email: email.value,
    password: password.value,
  }
  console.log(`Email: ${loginData.email}, Password: ${loginData.password}`);
  event.currentTarget.reset();
}
