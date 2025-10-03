/* snow */
// JS: generate snowflakes
const snowContainer = document.querySelector('.snow');
for(let i=0; i<50; i++){
  const flake = document.createElement('div');
  flake.classList.add('snowflake');
  flake.style.left = Math.random() * 100 + 'vw';
  flake.style.animationDuration = (3 + Math.random() * 5) + 's';
  flake.style.opacity = Math.random();
  flake.style.width = flake.style.height = (5 + Math.random()*10) + 'px';
  snowContainer.appendChild(flake);
}

/* home */

function hellobakenav() {
   const nav = document.querySelector('.navlist');
   nav.classList.toggle('active');
}

const menuItems = document.querySelectorAll('.navlist li a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active')); 
    item.classList.add('active'); 
  });
});

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});

 window.addEventListener("load", function() {
    if (window.instgrm) {
      instgrm.Embeds.process();
    }
  });

  

  /* MENU */
 let currentIndex = 0;
const items = document.querySelectorAll('.menu-item');

function showMenu(index) {
  const slider = document.querySelector('.menu-slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextMenu() {
  let newIndex = (currentIndex + 1) % items.length;
  showMenu(newIndex);
}

function prevMenu() {
  let newIndex = (currentIndex - 1 + items.length) % items.length;
  showMenu(newIndex);
}


/* MENU ITEM SCROLL */
document.addEventListener('DOMContentLoaded', () => {
  const menuTexts = document.querySelectorAll('.menu-text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); 
      }
    });
  }, { threshold: 0.5 });

  menuTexts.forEach(text => observer.observe(text));
});

/* custom your hampers */

document.addEventListener("DOMContentLoaded", () => {
  const stepBoxes = document.querySelectorAll(".step-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  stepBoxes.forEach(step => observer.observe(step));
});

/* SLIDE OTOMATIS CUSTOM HAMPERS */
const images = document.querySelectorAll('.custom-hampers-img img');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if(i === index) img.classList.add('active');
  });
}

setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 3000);

/* stepbox */
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show'); 
      }
    });
  }, { threshold: 0.3 }); 

  steps.forEach(step => observer.observe(step));
});

/* type effect p what they say */
 const text = "“Indulge in a desert dream of Milk Bun, Fudgy Brownies & Soft Cookies🌵🍨 Embracing the sweet side of life with every bite with @hellobake.id”";
const typingElement = document.getElementById("typing-text");

let typingIndex = 0;   // khusus typing
let typingTimeout = null;

function typeEffect(callback) {
  if (!typingElement) {
    if (callback) callback();
    return;
  }

  // reset isi sebelum mulai
  typingElement.textContent = "";
  typingIndex = 0;

  function step() {
    if (typingIndex < text.length) {
      typingElement.textContent += text.charAt(typingIndex);
      typingIndex++;
      typingTimeout = setTimeout(step, 50);
    } else {
      if (callback) callback();
    }
  }

  step();
}

// ========== SLIDER ==========
const slides = document.querySelectorAll(".testimonial-item");
let currentSlide = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === idx));

  const activeSlide = slides[idx];
  const video = activeSlide.querySelector("video");

  if (video) {
    video.currentTime = 0;
    video.play();
    video.onended = () => nextSlide();
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// ========== START ==========
window.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);

  // jalankan typing dulu di slide 1
  typeEffect(() => {
    // setelah typing selesai → delay sebentar → next
    setTimeout(nextSlide, 1000);
  });
});

/* auto play what they say */

  document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".testimonial-item");
  if (!slides.length) return;

  let currentSlide = 0;
  let timer = null;

  function stopAllVideos(resetTime = true, mute = true) {
    slides.forEach(slide => {
      const v = slide.querySelector("video");
      if (v) {
        try { v.pause(); } catch(e) {}
        if (resetTime) v.currentTime = 0;
        if (mute) v.muted = true;
        v.onended = null;
      }
    });
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;

    slides.forEach(s => s.classList.remove("active"));
    stopAllVideos(true, true);

    const active = slides[currentSlide];
    active.classList.add("active");

    const video = active.querySelector("video");
    clearTimeout(timer);

    if (video) {
      video.muted = false;
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.onended = () => nextSlide();
          })
          .catch(err => {
            console.warn("Autoplay blocked:", err);
            video.muted = true;
            video.play().catch(e => console.warn("Muted play failed:", e));
            video.onended = () => nextSlide();
          });
      } else {
        video.onended = () => nextSlide();
      }
    } 
  }

  function nextSlide() { showSlide(currentSlide + 1); }
  function prevSlide() { showSlide(currentSlide - 1); }

  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  if (nextBtn) nextBtn.addEventListener("click", () => { stopAllVideos(); nextSlide(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { stopAllVideos(); prevSlide(); });

  // pause kalau tab tidak aktif
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAllVideos();
    } else {
      const rect = slider.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        showSlide(currentSlide);
      }
    }
  });

  // pause kalau section keluar layar
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stopAllVideos();
      } else {
        showSlide(currentSlide);
      }
    });
  }, { threshold: 0.3 });

  io.observe(slider);

  // start awal
  showSlide(currentSlide);
});


/* scroll effect about us */
document.addEventListener("DOMContentLoaded", () => {
  // Ambil section hanya kalau ada
  const sections = document.querySelectorAll(".about-description, .about-values, .about-team, .findus");

  if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // supaya animasi cuma sekali
        }
      });
    }, { threshold: 0.2 }); // mulai animasi kalau 20% elemen kelihatan

    sections.forEach(section => {
      observer.observe(section);
    });
  }
});

/* mute button */
document.addEventListener("DOMContentLoaded", () => {
  const muteBtns = document.querySelectorAll(".mute-btn");

  muteBtns.forEach(btn => {
    const videoId = btn.dataset.video;
    const video = document.getElementById(videoId);

    // pastikan video mulai mute
    if (video) {
      video.muted = true;
      video.play().catch(err => console.warn("Autoplay blocked:", err));
    }

    btn.addEventListener("click", () => {
      if (!video) return;
      video.muted = !video.muted;
      btn.textContent = video.muted ? "🔇" : "🔊";
    });
  });
});

/* navbar scroll */

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // sesuaikan sama tinggi navbar
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});