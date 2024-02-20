const button = document.querySelectorAll(".button"),
  icon = document.querySelectorAll(".button img");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      icon[i].src = "./assets/images/icon-minus.svg";
    } else {
      icon[i].src = "./assets/images/icon-plus.svg";
    }
  });
}
