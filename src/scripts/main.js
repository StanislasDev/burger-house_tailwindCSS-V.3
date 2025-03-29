const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeIcon = document.querySelector(".nav-close");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    // navMenu.style.top = "-25vh";
    navMenu.classList.add('hidden');
  });
});

closeIcon.addEventListener("click", () => {
  // navMenu.style.top = "-25vh";
  navMenu.classList.add('hidden');
});

hamburger.addEventListener("click", () => {
  // navMenu.style.top = "0vh";
  navMenu.classList.remove('hidden');
});

// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('nav-menu');
// const closeIcon = document.getElementById('nav-close');
// const navLink = document.querySelectorAll('.nav__link');

// const hideNavMenu = () => {
//   navMenu.classList.add('hidden');
// };

// const showNavMenu = () => {
//   navMenu.classList.remove('hidden');
// };

// navLink.forEach((link) => {
//   link.addEventListener('click', hideNavMenu);
// });

// closeIcon.addEventListener('click', hideNavMenu);

// hamburger.addEventListener('click', showNavMenu);

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
    const tabval = tab.getAttribute("data-tabs");
    console.log(tabval);

    all.forEach((item) => {
      item.style.display = "none";
    });

    switch (tabval) {
      case "food":
        foods.forEach((item) => {
          item.style.display = "block";
        });
        break;
      case "snack":
        snacks.forEach((item) => {
          item.style.display = "block";
        });
        break;
      case "beverage":
        beverages.forEach((item) => {
          item.style.display = "block";
        });
        break;
      default:
        all.forEach((item) => {
          item.style.display = "block";
        });
        break;
    }
    // if (tabval == "food") {
    //   foods.forEach((item) => {
    //     item.style.display = "block";
    //   });
    // } else if (tabval == "snack") {
    //   snacks.forEach((item) => {
    //     item.style.display = "block";
    //   });
    // } else if (tabval == "beverage") {
    //   beverages.forEach((item) => {
    //     item.style.display = "block";
    //   });
    // } else {
    //   all.forEach((item) => {
    //     item.style.display = "block";
    //   });
    // }
  });
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector('html');
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener('click', (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
})

function darkMode () {
  html.classList.add("dark");
  themeBtn.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("mode", "dark");
}

function lightMode () {
  html.classList.remove("dark");
  themeBtn.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("mode", "light");
}

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};
window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SCROLL ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};

window.addEventListener('scroll', activeLink)

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
})

sr.reveal(".home_image");
sr.reveal(".home_content", { origin: "bottom" });
sr.reveal(".category_card", { interval: 300 });

sr.reveal(".promo_card-1", { origin: "left" });
sr.reveal(".promo_card-2", { origin: "right" });

sr.reveal(".about_img", { origin: "bottom" });
sr.reveal(".about_content", { origin: "top" });

sr.reveal(".menu_items", { origin: "left" });

sr.reveal(".customer_review", { origin: "right" });

sr.reveal(".footer");