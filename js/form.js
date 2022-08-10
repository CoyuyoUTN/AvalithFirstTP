document.getElementById("send").addEventListener("click", function (evento) {
  evento.preventDefault();
  evento.stopPropagation();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const textarea = document.getElementById("textarea").value;
  console.log(`Usuario ${username} - Email ${email} - Coment ${textarea}`);

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("textarea", textarea);

  window.location.href = "../html/datForm.html";
});
