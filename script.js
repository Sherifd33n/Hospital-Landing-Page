const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-bottom");
const book = document.querySelector(".book").addEventListener("click", () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const navList = document.querySelectorAll(".nav-bottom ul li a");

navList.forEach((list) => {
  list.addEventListener("click", () => {
    navList.forEach((list) => {
      list.classList.remove("active");
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
    list.classList.add("active");
  });
});

const accordion = document.getElementsByClassName("content");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log("active");
  });
}

const labList = document.querySelectorAll(".lab-list");
labList.forEach((list) => {
  list.addEventListener("click", () => {
    labList.forEach((list) => {
      list.classList.remove("active");
    });
    list.classList.add("active");
  });
});

const bigText = document.querySelector(".lab .right .big-text");

const first = document.querySelector(".first").addEventListener("click", () => {
  bigText.textContent = "Laboratory Analysis";
});

const second = document
  .querySelector(".second")
  .addEventListener("click", () => {
    bigText.textContent = "Cardiology Clinic";
  });

const third = document.querySelector(".third").addEventListener("click", () => {
  bigText.textContent = "Gynecology Clinic";
});

const fourth = document
  .querySelector(".fourth")
  .addEventListener("click", () => {
    bigText.textContent = "Pathology Clinic";
  });

const fifth = document.querySelector(".fifth").addEventListener("click", () => {
  bigText.textContent = "Pediatrics Clinic";
});

const sixth = document.querySelector(".sixth").addEventListener("click", () => {
  bigText.textContent = "Neurology Clinic";
});
