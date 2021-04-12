//Paste this in an empty console to get the data output as an array

function get() {
  fetch("https://videogames-33d3.restdb.io/rest/videogames", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "607409ebf592f7113340eff6",
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => data.forEach(showGame));
}

function post() {
  const data = {
    title: "Minecraft",
    developer: "Mojang AB",
    genre: "Platform",
    price: "270",
    description: "dette er et spil",
    release_date: Date.now(),
    age_limit: 7,
  };

  const postData = JSON.stringify(data);
  fetch("https://videogames-33d3.restdb.io/rest/videogames", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "607409ebf592f7113340eff6",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => showGame(data));
}

function deleteGame() {
  let data = {
    name: "Jonas2",
    email: "jofh@kea.dk",
    age: 18,
  };
  let postData = JSON.stringify(data);

  fetch("https://videogames-33d3.restdb.io/rest/videogames" + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "607409ebf592f7113340eff6",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((d) => d.json())
    .then((t) => console.log(t));
}

function showGame(game) {
  console.log(game);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = game.title;
  copy.querySelector(".age_limit span").textContent = game.age_limit;
  copy.querySelector(".developer span").textContent = game.developer;
  copy.querySelector(".release_date span").textContent = game.release_date;
  copy.querySelector(".genre span").textContent = game.genre;
  copy.querySelector(".price span").textContent = game.price;
  copy.querySelector(".description span").textContent = game.description;
  document.querySelector("main").appendChild(copy);
}

get();
