const jolieSlides = [
  {
    image: "../Jolie/uploads/collections/01f697af0a61f3c847b0370f279904c0.png",
    title: "The Jolie Edit",
    caption: "A look for the moments that matter.",
    alt: "Jolie featured dress collection",
  },
  {
    image: "../Jolie/uploads/collections/1c607c3c1569bdad3ca13bda1b4ea2f2.png",
    title: "The Evening Edit",
    caption: "A little more for the special night.",
    alt: "The Evening Edit dress collection",
  },
  {
    image: "../Jolie/uploads/collections/222c799a735ad0d8024ddee20632273a.png",
    title: "Celebration",
    caption: "Find a favorite for the day.",
    alt: "Jolie celebration collection",
  },
];

let activeJolieSlide = 0;

document.querySelector(".mobile-menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const menu = document.querySelector(".nav-menu");
  const isOpen = menu.classList.toggle("is-open");
  button.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector(".showcase-controls").addEventListener("click", (event) => {
  const button = event.target.closest("[data-jolie-step]");
  if (!button) return;

  activeJolieSlide = (activeJolieSlide + Number(button.dataset.jolieStep) + jolieSlides.length) % jolieSlides.length;
  const slide = jolieSlides[activeJolieSlide];
  const image = document.querySelector("#jolie-showcase-image");

  image.src = slide.image;
  image.alt = slide.alt;
  document.querySelector("#jolie-showcase-title").textContent = slide.title;
  document.querySelector("#jolie-showcase-caption").textContent = slide.caption;
  document.querySelector("#jolie-showcase-count").textContent = `0${activeJolieSlide + 1} / 0${jolieSlides.length}`;
});
