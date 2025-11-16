// Toggle navbar on mobile
const navToggle = document.getElementById("navToggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
});

// Simple fake search handler
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const term = searchInput.value.trim();

  if (!term) {
    alert("Masukkan kata kunci layanan dulu ya 🙂");
    return;
  }

  alert(`(Demo) Kamu mencari layanan: "${term}"`);
});

// CTA button scroll to hero (bisa diganti ke section lain)
const ctaButton = document.getElementById("ctaButton");
ctaButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
