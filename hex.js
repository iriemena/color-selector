let color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let btn = document.getElementById("btn");
let display = document.getElementById("span");

btn.addEventListener("click", function() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += color[colors()];
  }
  document.body.style.backgroundColor = randomColor;
  display.innerHTML = randomColor;
});

function colors() {
  return Math.floor(Math.random() * color.length);
}


