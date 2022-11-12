const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomHex = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")}`;

  hexColor = randomHex();
  console.log(hexColor);

  // console.log(hexColor);
  document.querySelector(".color").innerHTML = hexColor;
  document.body.style.backgroundColor = hexColor;
  //   color.textContent = hexColor;
  //   document.body.style.backgroundColor = hexColor;
});
