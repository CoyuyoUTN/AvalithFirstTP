document.getElementById("send").addEventListener("click", function (evento) {
  evento.preventDefault();
  evento.stopPropagation();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const textarea = document.getElementById("textarea").value;
  console.log(`Usuario ${username} - Email ${email} - Coment ${textarea}`);

  if (username.length == 0) {
    alert("No has escrito nada en el usuario");
    return;
  }

  const verification = validarEmail(email);
  if (verification == false) {
    alert(
      "La dirección de email es incorrecta!. Prueba con @hotmail.com o gmail.com"
    );
    return;
  }

  if (textarea.length == 0) {
    alert("No has escrito nada en el mensaje");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("textarea", textarea);

  window.location.href = "../html/datForm.html";
});

const validarEmail = (email) => {
  let bool = false;
  if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    )
  ) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
};
