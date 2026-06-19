function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  // simple fixed login
  if (user === "admin" && pass === "1234") {
    msg.style.color = "green";
    msg.innerText = "Login successful...";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);

  } else {
    msg.innerText = "Invalid username or password";
  }
}
