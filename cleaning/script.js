const kailasamButton = document.getElementById("kailasam-button");
const yamakundamButton = document.getElementById("yamakundamButton");
const akashamButton = document.getElementById("akashamButton");
const vaikundamButton = document.getElementById("vaikundamButton");
const hallButton = document.getElementById("hallButton");
const backSideButton = document.getElementById("backSideButton");
const frontButton = document.getElementById("frontButton");
const kitchenButton = document.getElementById("kitchenButton");
const mainBathRoomButton = document.getElementById("mainBathRoomButton");

const nameDiv = document.getElementById("names");

let name = [
  "avi",
  "vedi",
  "maji",
  "kujutan",
  "midhun",
  "jeri",
  "vijayan",
  "kannapi",
  "rahul",
  "arun",
  "gladu",
  "akarsh",
  "hafi",
  "vazhaa",
  "hari",
  "price",
];

kailasamButton.onclick = () => randomSelection("kailasam");
yamakundamButton.onclick = () => randomSelection("yamakundam");
akashamButton.onclick = () => randomSelection("akasham");
vaikundamButton.onclick = () => randomSelection("vaikundam");
hallButton.onclick = () => randomSelection("hall");
backSideButton.onclick = () => randomSelection("backSide");
frontButton.onclick = () => randomSelection("front");
kitchenButton.onclick = () => randomSelection("kitchen");
mainBathRoomButton.onclick = () => randomSelection("mainBathRoom");

const randomSelection = (category) => {
  const selected = Math.floor(Math.random() * name.length);
  console.log({ selected });
  nameDiv.innerHTML += ` ${category} ${name[selected]}`;
  name.splice(selected, 1);
};
