document.addEventListener(`DOMContentLoaded`, () => {
  responseAxios;
});

const URL_USERS_AXIOS = "https://jsonplaceholder.typicode.com/users";

const fetchAxios = axios.get(URL_USERS_AXIOS).catch(function (error) {
  if (error.response) {
    // Request made and server responded
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
});

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
