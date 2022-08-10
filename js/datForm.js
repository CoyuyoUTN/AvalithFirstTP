const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
const textarea = localStorage.getItem("textarea");

document.getElementById("datForm_username").innerHTML = `Username: ${username}`;
document.getElementById("datForm_email").innerHTML = `Email: ${email}`;
document.getElementById("datForm_textarea").innerHTML = `Mensaje: ${textarea}`;

document
  .getElementById("backButton")
  .addEventListener("click", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();
    localStorage.clear();
  });
