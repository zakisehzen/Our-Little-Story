// ==============================
// MUSIC
// ==============================
const btn = document.getElementById("musicBtn");
let audio = null;

btn.addEventListener("click", () => {
  if (!audio) {
    audio = new Audio();
    audio.loop = true;
    // Pastikan file music.mp3 berada di folder yang sama dengan index.html.
    audio.src = "music.mp3";
  }

  if (audio.paused) {
    audio.play().then(() => {
      btn.textContent = "Ⅱ";
      btn.setAttribute("aria-label", "Pause music");
    }).catch(() => {
      btn.textContent = "♪";
      alert("Tambahkan file music.mp3 ke folder website untuk mengaktifkan musik.");
    });
  } else {
    audio.pause();
    btn.textContent = "♪";
    btn.setAttribute("aria-label", "Play music");
  }
});

// ==============================
// OPEN WHEN LETTERS
// ==============================
const letters = {
  sad: {
    label: "OPEN WHEN — 01",
    title: "Buka saat kamu sedih",
    content: `
      <p>Kalau kamu sedang membaca ini, mungkin hari ini sedang terasa berat. Aku cuma ingin kamu tahu bahwa kamu nggak harus selalu terlihat kuat di depan semua orang.</p>
      <p>Kalau hari ini kamu ingin menangis, istirahatlah. Kalau kamu ingin diam, nggak apa-apa. Kamu boleh merasa capek dan kamu boleh punya hari yang nggak baik.</p>
      <p>Aku mungkin sedang jauh dari kamu, tapi bukan berarti aku nggak peduli. Kalau aku bisa berada di samping kamu sekarang, mungkin aku cuma akan duduk di sana dan menemani kamu sampai semuanya terasa sedikit lebih ringan.</p>
      <p class="highlight">Pelan-pelan ya. Kamu nggak sendirian. ♡</p>
    `
  },

  miss: {
    label: "OPEN WHEN — 02",
    title: "Buka saat kamu merindukanku",
    content: `
      <p>Kalau rasa kangen sedang datang, ingat bahwa kemungkinan besar aku juga sedang merasakan hal yang sama.</p>
      <p>Jarak memang bikin kita nggak bisa bertemu kapan pun kita mau. Tapi setiap kali kita saling mencari, saling menunggu, dan tetap menyempatkan waktu untuk satu sama lain, aku merasa jarak itu nggak sepenuhnya menang.</p>
      <p>Jadi kalau malam ini kamu kangen, jangan sedih karena kita sedang berjauhan. Ingat saja bahwa ada seseorang di tempat lain yang juga sedang memikirkan kamu.</p>
      <p class="highlight">Someday, I hope missing you won't have to mean being far from you. ♡</p>
    `
  },

  misunderstanding: {
    label: "OPEN WHEN — 03",
    title: "Buka saat kita sedang salah paham",
    content: `
      <p>Kalau kamu sedang membaca ini, mungkin saat ini kita sedang tidak baik-baik saja. Mungkin ada kata-kata yang membuat kamu sakit hati, ada sikapku yang membuat kamu kecewa, atau mungkin kita sama-sama terlalu terbawa emosi sampai lupa bahwa sebenarnya kita sedang berada di pihak yang sama.</p>
      <p>Aku nggak mau pura-pura kalau setiap masalah yang terjadi di antara kita itu mudah. Kadang kesalahpahaman memang membuat semuanya terasa lebih berat, apalagi ketika kita dipisahkan oleh jarak. Kita nggak bisa langsung bertemu, melihat ekspresi satu sama lain, atau sekadar duduk bersama untuk menyelesaikan semuanya dengan tenang.</p>
      <p>Tapi ada satu hal yang aku ingin kamu ingat.</p>
      <p class="highlight">Masalah yang sedang kita hadapi bukan berarti aku ingin kehilangan kamu.</p>
      <p>Mungkin aku pernah salah dalam berbicara. Mungkin aku belum cukup memahami perasaan kamu. Dan mungkin ada saat di mana sikapku membuat kamu merasa tidak dihargai. Kalau itu yang kamu rasakan, aku benar-benar minta maaf.</p>
      <p>Aku tidak sempurna dalam menjalani hubungan ini. Aku masih belajar bagaimana menjadi seseorang yang bisa lebih memahami kamu, lebih sabar menghadapi keadaan, dan lebih baik dalam menjaga perasaan kamu.</p>
      <p>Tapi di tengah semua kekurangan itu, perasaanku tentang kamu bukan sesuatu yang ingin aku main-mainkan.</p>
      <p>Aku masih peduli. Aku masih menghargai kamu. Dan aku masih ingin memperbaiki apa yang sedang rusak di antara kita.</p>
      <p>Aku nggak ingin kita membiarkan satu kesalahpahaman mengalahkan semua hal baik yang sudah pernah kita lewati bersama. Aku percaya sebuah hubungan bukan tentang siapa yang paling benar ketika sedang bertengkar, tapi tentang bagaimana dua orang yang saling sayang bisa kembali memahami satu sama lain.</p>
      <p>Jadi kalau kamu sedang marah, aku akan mengerti kalau kamu butuh waktu. Kalau kamu sedang kecewa, aku akan mencoba mendengarkan. Kalau kamu sedang terluka karena aku, aku ingin memperbaikinya.</p>
      <p>Dan kalau hari ini kita belum bisa menyelesaikan semuanya, aku harap kita nggak menyerah hanya karena keadaan sedang sulit.</p>
      <p class="highlight">Karena dari semua hal yang bisa kita lawan, aku nggak mau melawan kamu. Aku maunya kita sama-sama melawan masalahnya.</p>
      <p>Terima kasih karena masih bertahan sejauh ini. Dan maaf kalau hari ini aku belum menjadi pasangan yang kamu butuhkan sepenuhnya.</p>
      <p>Aku nggak bisa menjanjikan hubungan kita akan selalu sempurna. Tapi aku bisa berjanji untuk tetap belajar, tetap memperbaiki diri, dan nggak menganggap perasaan kamu sebagai sesuatu yang sepele.</p>
      <p>Jadi setelah kamu selesai membaca surat ini, aku cuma ingin kamu tahu satu hal:</p>
      <p class="highlight">Di balik semua kesalahpahaman, rasa kesal, dan masalah yang sedang kita hadapi, aku masih memilih kamu. Dan kalau kamu masih mau, aku ingin kita memperbaiki semuanya—pelan-pelan, bersama-sama. ❤️</p>
    `
  },

  loved: {
    label: "OPEN WHEN — 04",
    title: "Buka saat kamu merasa aku nggak sayang",
    content: `
      <p>Aku tahu terkadang cara seseorang menunjukkan rasa sayang nggak selalu terlihat seperti yang kita harapkan. Mungkin ada saat di mana aku terlalu sibuk, terlalu diam, atau kurang peka sampai kamu bertanya-tanya apakah aku masih peduli.</p>
      <p>Kalau suatu hari kamu merasa seperti itu, aku harap kamu nggak langsung menyimpulkan bahwa perasaanku berubah.</p>
      <p>Aku memilih kamu bukan hanya ketika semuanya menyenangkan. Aku juga ingin tetap ada ketika hubungan ini sedang sulit, ketika kita berbeda pendapat, dan ketika kita harus belajar memahami satu sama lain lagi.</p>
      <p class="highlight">Kalau aku belum cukup baik menunjukkannya, bukan berarti aku nggak sayang.</p>
      <p>Aku masih di sini. Dan aku masih ingin punya banyak halaman berikutnya bersama kamu.</p>
    `
  },

  tired: {
    label: "OPEN WHEN — 05",
    title: "Buka saat kamu lelah",
    content: `
      <p>Hei, istirahat dulu sebentar.</p>
      <p>Nggak semua hal harus selesai hari ini. Kamu nggak harus selalu produktif, selalu kuat, atau selalu punya jawaban untuk semuanya.</p>
      <p>Kalau hari ini terlalu melelahkan, cukup lakukan apa yang kamu mampu. Sisanya bisa menunggu sampai kamu punya tenaga lagi.</p>
      <p>Dan kalau kamu butuh seseorang untuk mendengarkan semua keluhanmu, aku mau jadi orang itu.</p>
      <p class="highlight">Tarik napas. Pelan-pelan. Kamu sudah melakukan yang terbaik yang kamu bisa hari ini. ♡</p>
    `
  },

  sleep: {
    label: "OPEN WHEN — 06",
    title: "Buka saat kamu mau tidur",
    content: `
      <p>Sebelum kamu tidur, aku cuma mau bilang terima kasih karena hari ini kamu sudah melewati semuanya.</p>
      <p>Kalau ada hal buruk yang terjadi hari ini, biarkan malam ini menjadi tempat untuk meletakkannya sebentar. Besok adalah hari baru dan kita selalu punya kesempatan untuk membuatnya lebih baik.</p>
      <p>Semoga malam ini kamu tidur dengan tenang. Semoga mimpi kamu menyenangkan. Dan semoga ketika kamu bangun nanti, ada sedikit lebih banyak alasan untuk tersenyum.</p>
      <p class="highlight">Selamat tidur. Jaga diri kamu baik-baik. Good night, kamu. ❤️</p>
    `
  },

  proud: {
    label: "OPEN WHEN — 07",
    title: "Buka saat kamu butuh diingatkan kalau kamu hebat",
    content: `
      <p>Mungkin ada hari ketika kamu melihat dirimu sendiri dan merasa kamu belum cukup baik. Kalau hari itu datang, aku ingin kamu berhenti sebentar dan melihat semua hal yang sudah berhasil kamu lewati.</p>
      <p>Kamu mungkin nggak sadar seberapa kuat dirimu karena kamu terlalu sibuk menjalani semuanya. Tapi dari tempatku melihat kamu, aku tahu kamu sudah berusaha sejauh yang kamu bisa.</p>
      <p>Aku nggak sayang sama kamu karena kamu harus selalu hebat. Aku sayang sama kamu bahkan ketika kamu sedang bingung, gagal, capek, atau merasa nggak punya tenaga lagi.</p>
      <p class="highlight">Jadi jangan terlalu keras sama diri sendiri. Aku bangga sama kamu, bahkan pada hari ketika kamu belum bisa bangga sama dirimu sendiri. ♡</p>
    `
  },

  choose: {
    label: "OPEN WHEN — 08 · THE LAST ONE",
    title: "Kenapa aku memilih kamu",
    content: `
      <p>Kalau kamu sampai membuka surat terakhir ini, mungkin kamu sudah membaca beberapa bagian kecil dari apa yang ingin aku sampaikan.</p>
      <p>Aku sebenarnya nggak punya satu alasan sederhana kenapa aku memilih kamu. Karena rasanya bukan cuma satu hal. Ada cara kamu bercerita, cara kamu peduli, cara kamu membuat hari-hari biasa terasa punya sesuatu untuk dikenang.</p>
      <p>Aku juga memilih kamu bukan karena aku yakin semuanya akan selalu mudah. Justru aku tahu akan ada hari ketika kita capek, salah paham, berjauhan, dan mungkin saling mengecewakan.</p>
      <p>Tapi kalau setelah semua itu kita masih mau duduk, mendengarkan, meminta maaf, belajar, dan mencoba lagi, menurutku itu jauh lebih berarti daripada hubungan yang terlihat sempurna dari luar.</p>
      <p class="highlight">Aku memilih kamu karena dari sekian banyak orang yang bisa menjadi bagian dari hidupku, aku ingin cerita ini tetap menjadi cerita kita.</p>
      <p>Dan kalau suatu hari nanti kamu kembali membaca surat ini, aku harap jawabannya masih sama:</p>
      <p class="highlight">Aku masih memilih kamu. ❤️</p>
    `
  }
};

const modal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const modalLabel = document.getElementById("modalLabel");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

let openingTimer = null;

function openLetter(letterKey) {
  const letter = letters[letterKey];
  if (!letter) return;

  modalLabel.textContent = letter.label;
  modalTitle.textContent = letter.title;
  modalContent.innerHTML = letter.content;

  clearTimeout(openingTimer);
  modal.classList.remove("revealed");
  modal.classList.add("show", "opening");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  openingTimer = setTimeout(() => {
    modal.classList.remove("opening");
    modal.classList.add("revealed");
    closeLetter.focus();
  }, 1050);
}

function closeLetterModal() {
  clearTimeout(openingTimer);
  modal.classList.remove("show", "opening", "revealed");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".letter-card").forEach(card => {
  card.addEventListener("click", () => openLetter(card.dataset.letter));
});

closeLetter.addEventListener("click", closeLetterModal);

document.querySelectorAll("[data-close-letter]").forEach(el => {
  el.addEventListener("click", closeLetterModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeLetterModal();
  }
});

// ==============================
// SMALL REVEAL ANIMATION
// ==============================
const items = document.querySelectorAll(
  ".section, .photo-frame, .polaroid, .memory-grid article, .openwhen-section, .letter-card"
);

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
  const originalTransform = getComputedStyle(el).transform;
  el.dataset.originalTransform = originalTransform === "none" ? "none" : originalTransform;
  el.style.opacity = "0";
  el.style.transition = "opacity .8s ease, transform .8s ease";
  el.style.transform = "translateY(25px)";
  observer.observe(el);
});
