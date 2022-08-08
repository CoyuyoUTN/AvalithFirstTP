document.getElementById("form").onsubmit = function () {
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const textarea = document.getElementById("textarea").value;
  console.log(`Usuario ${username} - Email ${email} - Coment ${textarea}`);
  return false;
};
