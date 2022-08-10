document.addEventListener(`DOMContentLoaded`, () => {
  fetchApi();
});

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const fetchApi = async () => {
  try {
    const response = await fetch(URL_USERS);
    const data = await response.json();
    let body = ``;
    console.log(data);
    data.map((user) => {
      body += `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
      </tr>
     `;
    });
    document.getElementById("tbody").innerHTML = body;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};
