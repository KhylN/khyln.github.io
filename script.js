document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = name ? `Hello, ${name}!` : "Please enter your name.";
  document.getElementById("greeting").textContent = greeting;
}
