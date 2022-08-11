document.addEventListener(`DOMContentLoaded`, () => {
  /*let array = [];
  for (let j = 1; j < 827; j++) {
    array.push(j);
  }

  getInfo(array);*/

  pagination();
});

/*const getInfo = (array) => {
  const fetchCards = axios
    .get(`https://rickandmortyapi.com/api/character/${array}`)
    .catch(function (error) {
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

  fetchCards.then((response) => {
    let body = ``;
    const card = response.data;
    console.log(card);
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
};*/

const getInfo = (page) => {
  const fetchCards = axios
    .get(`https://rickandmortyapi.com/api/character/?page= ${page}`)
    .catch(function (error) {
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

  fetchCards.then((response) => {
    let body = ``;
    const card = response.data;
    console.log(card);
    card.results.map((character) => {
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

const pagination = () => {
  let pag = 1;
  getInfo(pag);
  document.getElementById("next-pag").addEventListener("click", function () {
    if (pag <= 43) {
      pag += 1;
      getInfo(pag);
    }
  });

  document.getElementById("back-pag").addEventListener("click", function () {
    if (pag >= 1) {
      pag -= 1;
      getInfo(pag);
    }
  });
};
