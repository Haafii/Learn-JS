const newHero = document.getElementById("newHeroButton");
const heroImageDiv = document.getElementById("heroImage");
const Token = "617697136857892";
const base_url = `https://www.superheroapi.com/api.php/${Token}`;
const searchButton = document.getElementById("search");
const searchInput = document.getElementById("searchInput");

const GetRandomSuperHero = (heroId) => {
  fetch(`${base_url}/${heroId}`)
    .then((response) => response.json())
    .then((json) => {
      showHeroInfo(json);
    });
};

const randomHero = () => {
  const numberOfHeros = 731;
  return Math.floor(Math.random() * numberOfHeros) + 1;
};

newHero.onclick = () => GetRandomSuperHero(randomHero());

const getSuperHero = (name) => {
  fetch(`${base_url}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      showHeroInfo(json.results[0]);
    });
};

searchButton.onclick = () => getSuperHero(searchInput.value);


const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const image = `<img src = '${character.image.url}' height ='200px' width ='200px'/>`;
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`;
    })
    .join("");
  heroImageDiv.innerHTML = `${name}${image}${stats}`;
};
