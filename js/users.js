document.addEventListener(`DOMContentLoaded`, () => {
  responseAxios();
});

const URL_USERS_AXIOS = "https://jsonplaceholder.typicode.com/users";
const fetchAxios = axios.get(URL_USERS_AXIOS);

const responseAxios = fetchAxios.then((response) => {
  console.log(response.data);
  const data = response.data;
  let body = ``;
  data.map((user) => {
    body += `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
      </tr>
     `;
  });
  document.getElementById("tbody").innerHTML = body;
});
