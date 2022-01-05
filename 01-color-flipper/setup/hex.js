const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

let getRandomItem = () => {
  return Math.floor(Math.random() * hex.length)
}

btn.addEventListener('click', () => {
  let colorHex = '#'
  for(let i = 0; i < 6; i++) {
    colorHex += hex[getRandomItem()];
  }
  document.body.style.backgroundColor = colorHex;
  color.textContent = colorHex;
})