'use strict';

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksList = document.querySelectorAll("#nav-links a");
const toggleBtn = document.getElementById('toggle-dark-mode');


form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  setTimeout(() => {
    form.reset();
  }, 1000);

  const response = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    form.reset();
    successMessage.style.display = 'block';
  } else {
    successMessage.textContent = '❌ Er is iets misgegaan. Probeer opnieuw.';
    successMessage.style.display = 'block';
    }
    
});
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
      hamburger.classList.toggle("open");
});
  

navLinksList.forEach(link => {
    link.addEventListener("click", () => {
     
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent='☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
})

 function openModal(src) {
   document.getElementById('modal-img').src = src;
   document.getElementById('modal').style.display = 'flex';
 }

 function closeModal() {
   document.getElementById('modal').style.display = 'none';
 }

window.onscroll = function () {
  const btn = document.getElementById('scrollTopBtn');
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
};

// Scroll smooth naar boven
document.getElementById('scrollTopBtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
const links = document.querySelectorAll('nav ul li a');

links.forEach((link) => {
  link.addEventListener('click', function (e) {
    links.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Scroll smooth naar beneden 
document.getElementById("scrollDownBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });