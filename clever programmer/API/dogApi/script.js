const dogImgDiv = document.getElementById("dogImg");
const newDogButton = document.getElementById("newDog");
const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImgDiv.innerHTML = `<img src = '${json.message}' height = 300px width = 300px/>`;
    });
};
newDogButton.onclick = () => getNewDog();
