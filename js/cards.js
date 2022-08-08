document.addEventListener(`DOMContentLoaded`, () => {
  let array = [];
  for (let j = 1; j < 827; j++) {
    array.push(j);
  }

  getInfo(array);
});

const getInfo = (array) => {
  const fetchCards = axios.get(
    `https://rickandmortyapi.com/api/character/${array}`
  );

  fetchCards.then((response) => {
    let body = ``;
    const card = response.data;
    card.map((character) => {
      body += `
                <div class="card">
                    <img class="image" src="${character.image}">
                    <h2 class="id">     Id: ${character.id}</h2> 
                    <h3 class="name"> Name: ${character.name}</h3>  
                </div>
            `;
    });
    document.getElementById("container").innerHTML = body;
  });
};
