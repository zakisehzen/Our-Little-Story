const btn = document.getElementById("musicBtn");
let audio = null;
btn.addEventListener("click", () => {
  if (!audio) {
    audio = new Audio();
    audio.loop = true;
    // Put your own royalty-free audio file at: music.mp3
    audio.src = "music.mp3";
  }
  if (audio.paused) {
    audio.play().then(() => btn.textContent = "Ⅱ").catch(() => {
      btn.textContent = "♪";
      alert("Tambahkan file music.mp3 ke folder website untuk mengaktifkan musik.");
    });
  } else {
    audio.pause();
    btn.textContent = "♪";
  }
});

// Small reveal animation without any library.
const items = document.querySelectorAll(".section, .photo-frame, .polaroid, .memory-grid article");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = entry.target.dataset.originalTransform || "none";
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

items.forEach(el => {
  el.style.opacity = "0";
  el.style.transition = "opacity .8s ease, transform .8s ease";
  el.dataset.originalTransform = getComputedStyle(el).transform === "none" ? "none" : getComputedStyle(el).transform;
  el.style.transform = "translateY(25px)";
  observer.observe(el);
});
