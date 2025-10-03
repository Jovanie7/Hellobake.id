document.addEventListener("DOMContentLoaded", () => {
  const cardInner = document.getElementById("card-inner");
  const cardBack = document.querySelector(".card-back");
  const cardMessage = document.getElementById("card-custom-text");
  const messageInput = document.getElementById("message");
  const themeSelect = document.getElementById("theme");
  const fontColorInput = document.getElementById("font-color");
  const nextBtn = document.querySelector(".checkout-btn");

  // Notifikasi
  const notif = document.createElement("div");
  notif.classList.add("message-notif");
  messageInput.insertAdjacentElement("afterend", notif);

  const maxLines = 10; // maksimal 10 baris
  const lineHeight = 22; // harus sama dengan CSS .card-back p line-height

  // Flip card
  cardInner.addEventListener("click", () => {
    cardInner.style.transform = cardInner.style.transform === "rotateY(180deg)" 
      ? "rotateY(0deg)" 
      : "rotateY(180deg)";
  });

  // Fungsi hitung jumlah baris saat ini di preview
  function getTotalLines() {
    return Math.floor(cardMessage.scrollHeight / lineHeight);
  }

  // Update message real-time
  messageInput.addEventListener("input", () => {
    let value = messageInput.value.replace(/\t/g, '    ');

    // update sementara di preview
    cardMessage.textContent = value;

    // cek jumlah baris
    let totalLines = getTotalLines();

    if (totalLines > maxLines) {
      // batasi input agar maksimal 10 baris
      while (getTotalLines() > maxLines) {
        value = value.slice(0, -1);
        cardMessage.textContent = value;
      }
      messageInput.value = value;
      notif.textContent = `Maksimal ${maxLines} baris saja!`;
      notif.style.display = "block";
    } else {
      notif.style.display = "none";
    }
  });

  // Update back color
  themeSelect.addEventListener("change", () => {
    cardBack.style.backgroundColor = themeSelect.value;
  });

  // Update font color
  fontColorInput.addEventListener("input", () => {
    cardMessage.style.color = fontColorInput.value;
  });

  // Tombol checkout / next
  nextBtn.addEventListener("click", (e) => {
    const message = messageInput.value.trim();
    if (!message) {
      alert("Silakan isi pesan custom terlebih dahulu sebelum melanjutkan!");
      e.preventDefault();
      return;
    }
    localStorage.setItem("customMessage", message);
    window.location.href = "queue.html";
  });
});

/* navbar scroll */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

