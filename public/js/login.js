const loginFormHandler = async (event) => {
  event.preventDefault();

  //get email and password
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the dashboard
    document.location.replace("/dashboard");
  }
};
document
  .querySelector("#login-button")
  .addEventListener("click", loginFormHandler);
