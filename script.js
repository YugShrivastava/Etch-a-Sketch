const container = document.createElement("div");
container.classList.add("container");

let gridNum = 16; // let
let widthAndHeight = 800 / gridNum - 2;

const gridSizeButton = document.createElement("button");
const buttonDiv = document.createElement("div");
const content = document.createElement("div");
const randomColor = document.createElement("button");
const resetGrid = document.createElement("button");

gridSizeButton.textContent = "Change Grid";
randomColor.textContent = "Random Color";
resetGrid.textContent = "Reset Grid ";
buttonDiv.classList.add("button");

content.classList.add("content");
document.body.appendChild(content);
content.appendChild(buttonDiv);
content.appendChild(container);

buttonDiv.appendChild(gridSizeButton);
buttonDiv.appendChild(randomColor);
buttonDiv.appendChild(resetGrid);

function deleteDivs(e) {
  e.innerHTML = "";
}

function createDivs(num) {
  for (let i = 0; i < num * num; i++) {
    let divNum = document.createElement("div");
    container.appendChild(divNum);
    divNum.classList.add("divs");
    divNum.style.cssText =
      "border: 1px solid hotpink; width: " +
      widthAndHeight +
      "px; height: " +
      widthAndHeight +
      "px;";
  }
}
createDivs(gridNum);

const divs = document.querySelectorAll(".divs");
divs.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "antiquewhite";
  });
});

gridSizeButton.addEventListener("click", (event) => {
  gridNum = prompt("Enter a number: ");
  widthAndHeight = 800 / gridNum - 2;
  console.log(gridNum);
  console.log(widthAndHeight);
  deleteDivs(container);
  createDivs(gridNum);
  const divs = document.querySelectorAll(".divs");
  divs.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "antiquewhite";
    });
  });
});

resetGrid.addEventListener("click", () => {
  const divs = document.querySelectorAll(".divs");
  divs.forEach((item) => {
    item.style.backgroundColor = "lightpink";
  });
});

randomColor.addEventListener("click", () => {
  const divs = document.querySelectorAll(".divs");
  divs.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        ", " +
        Math.floor(Math.random() * 255) +
        ", " +
        Math.floor(Math.random() * 255) +
        ")";
    });
  });
});
