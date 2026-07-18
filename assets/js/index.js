var btn = document.querySelector("#themeBtn");

btn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});

var links = document.querySelectorAll(".nav-links a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    for (var j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }

    e.target.classList.add("active");
  });
}
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  var currentScroll = window.scrollY;

  for (var i = 0; i < sections.length; i++) {
    if (
       currentScroll >= sections[i].offsetTop - 100 &&
      currentScroll < sections[i].offsetTop + sections[i].offsetHeight - 100
    ) {
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");

        if (links[j].getAttribute("href") == "#" + sections[i].id) {
          links[j].classList.add("active");
        }
      }
    }
  }
});
var scrollToTop = document.querySelector("#scroll-to-top");
var testimonials = document.getElementById("testimonials");
var heroSection = document.getElementById("hero-section");
window.addEventListener("scroll", function () {
  if (window.scrollY >= testimonials.offsetTop) {
    scrollToTop.classList.remove("opacity-0", "invisible");
    scrollToTop.classList.add("opacity-100", "visible");
  }
  if (window.scrollY <= heroSection.offsetTop) {
    scrollToTop.classList.remove("opacity-100", "visible");
    scrollToTop.classList.add("opacity-0", "invisible");
  }
});
scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
var nextBtn = document.querySelector("#next-testimonial");
var prevBtn = document.querySelector("#prev-testimonial");

var carousel = document.getElementById("testimonials-carousel");
var cards = document.querySelectorAll(".testimonial-card");

var currentIndex = 0;
var cardWidth = cards[0].offsetWidth;

function updateCarousel() {
  carousel.style.transform = `translateX(${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", function () {
  if (currentIndex < cards.length - 3) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 3;
  }
  updateCarousel();
});
var dots = document.querySelectorAll(".carousel-indicator");

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    var target = Array.from(dots).indexOf(this);
    for (var j = 0; j < dots.length; j++) {
      dots[j].classList.remove("active");

      dots[j].classList.remove("bg-accent", "scale-125");
      dots[j].classList.add("bg-slate-400", "dark:bg-slate-600");
    }

    currentIndex = target;
    updateCarousel();

    this.classList.remove("bg-slate-400", "dark:bg-slate-600");
    this.classList.add("bg-accent", "scale-125");
    this.classList.add("active");
  });
}
var slider = document.querySelector("#settings-toggle");
var closeSettings = document.querySelector("#close-settings");
var sidebar = document.querySelector("#settings-sidebar");

function toggleSettingsPanel() {
  sidebar.classList.remove("translate-x-full");

  slider.style.right = "20rem";
}

if (slider) {
  slider.addEventListener("click", toggleSettingsPanel);
}

if (closeSettings) {
  closeSettings.addEventListener("click", function () {
    sidebar.classList.add("translate-x-full");
    slider.style.right = "0";
  });
}

var fonts = document.querySelectorAll(".font-option");

for (var i = 0; i < fonts.length; i++) {
  fonts[i].addEventListener("click", function () {
    var selectedFont = this.getAttribute("data-font");

    for (var j = 0; j < fonts.length; j++) {
      fonts[j].classList.remove("active");
      fonts[j].classList.remove(
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800",
      );

      fonts[j].classList.add("border-slate-200", "dark:border-slate-700");
    }

    this.classList.add("active");
    this.classList.remove("border-slate-200", "dark:border-slate-700");
    this.classList.add("border-primary", "bg-slate-50", "dark:bg-slate-800");

    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo",
    );
    document.body.classList.add("font-" + selectedFont);
  });
}
var reset = document.getElementById("reset-settings");

reset.addEventListener("click", function () {
  for (var j = 0; j < fonts.length; j++) {
    fonts[j].classList.remove(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800",
    );
    fonts[j].classList.add("border-slate-200", "dark:border-slate-700");
  }

  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo",
  );

  fonts[1].classList.add(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );
  fonts[1].classList.remove("border-slate-200", "dark:border-slate-700");
  document.body.classList.add("font-tajawal");

  var defaultPrimary = colorbtn[0].getAttribute("data-primary");
  var defaultSecondary = colorbtn[0].getAttribute("data-secondary");

  document.documentElement.style.setProperty("--color-primary", defaultPrimary);
  document.documentElement.style.setProperty(
    "--color-secondary",
    defaultSecondary,
  );
  document.documentElement.style.setProperty(
    "--color-accent",
    defaultSecondary,
  );

  sidebar.classList.add("translate-x-full");
  slider.style.right = "0";
});
var colorbtn = document.querySelectorAll(".colorbtn");
for (var i = 0; i < colorbtn.length; i++) {
  colorbtn[i].addEventListener("click", function () {
    for (var j = 0; j < colorbtn.length; j++) {
      colorbtn[j].classList.remove(
        "active",
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900",
      );
    }

    var firstcolor = this.getAttribute("data-primary");
    var secondcolor = this.getAttribute("data-secondary");

    this.classList.add(
      "active",
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );

    document.documentElement.style.setProperty("--color-primary", firstcolor);
    document.documentElement.style.setProperty(
      "--color-secondary",
      secondcolor,
    );
    document.documentElement.style.setProperty("--color-accent", secondcolor);
  });
}
var tabs = document.querySelectorAll(".portfolio-filter");
var items = document.querySelectorAll(".portfolio-item");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
      );
      tabs[j].classList.add("dark:bg-slate-800");
    }

    this.classList.add(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
    );

    var filter = this.getAttribute("data-filter");

    for (var k = 0; k < items.length; k++) {
      if (filter == "all" || items[k].getAttribute("data-category") == filter) {
        items[k].classList.remove("hidden");
      } else {
        items[k].classList.add("hidden");
      }
    }
  });
}
