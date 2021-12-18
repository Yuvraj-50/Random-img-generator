const button = document.getElementById("img-gen");

button.addEventListener("click", function () {
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
  const image = document.createElement("img");
  const flexBox = document.getElementById("flex-box");
  image.src = "https://source.unsplash.com/1600x900/?nature,water";
  flexBox.appendChild(image);
});
