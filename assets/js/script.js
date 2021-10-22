const btn = document.querySelector(".btn-burger");

btn.addEventListener("click", () => {
  const dropdown = document.querySelector("#dropdown");
  const tagline = document.querySelector(".tag-line");
  const navigation = document.querySelector(".navigation-right");
  dropdown.classList.toggle("toggle-nav");
  tagline.classList.toggle("toggle-tag-line");
  navigation.classList.toggle("navigation-right-toggle");
  const toggler = document.querySelector("#toggler-image");
  //toggler.src = "images/icon-close.svg";

  if (btn.dataset.toggle === "false") {
    toggler.src = "./images/icon-close.svg";
    btn.dataset.toggle = "true";
  } else {
    toggler.src = "./images/icon-hamburger.svg";
    btn.dataset.toggle = "false";
  }

  //
  //   } else {
  //     toggler.src === "./images/icon-hamburger.svg";
  //   }
});
