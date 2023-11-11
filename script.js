// To randomize the backgrounds

document.addEventListener("DOMContentLoaded", function () {
  var backgrounds = ["./img1.png", "./img2.png", "./img3.png", "./img.jpg"];
  var randomIndex = Math.floor(Math.random() * backgrounds.length);
  var selectedBackground = backgrounds[randomIndex];
  document.body.style.backgroundImage = "url(" + selectedBackground + ")";
});
