// =============================================
// JITHENDRA PATHIRAJA PORTFOLIO - script.js
// =============================================

// --- THEME TOGGLE ---
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    themeIcon.className = 'fas fa-moon';
  } else {
    themeIcon.className = 'fas fa-sun';
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle && themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// --- HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger && hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when link clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('dropdown-toggle')) {
      navLinks.classList.remove('open');
    }
  });
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const parent = toggle.closest('.nav-dropdown');
      parent.classList.toggle('open');
    }
  });
});

// --- NAVBAR SCROLL STYLE ---
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 24px rgba(0,0,0,0.3)' : 'none';
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  links.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current || l.getAttribute('href') === 'index.html#' + current) {
      l.classList.add('active');
    }
  });
}

// --- TYPED TEXT ANIMATION ---
const phrases = ['CAD Design Engineer', 'MATLAB Analyst', 'Mechatronics Engineer', 'Problem Solver'];
let phraseIdx = 0, charIdx = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];
  if (!isDeleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { isDeleting = true; setTimeout(type, 2000); return; }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
  }
  setTimeout(type, isDeleting ? 60 : 90);
}
type();

// --- PARTICLE BACKGROUND ---
const canvas = document.createElement('canvas');
const particlesEl = document.getElementById('particles');
if (particlesEl) {
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:0.35;';
  particlesEl.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = particlesEl.offsetWidth;
    canvas.height = particlesEl.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const color = isDark ? '56,189,248' : '14,165,233';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},0.8)`;
      ctx.fill();
    });
    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color},${0.15 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

// --- ABOUT SLIDESHOW (auto + dots) ---
function initAboutSlideshow() {
  const slides = document.querySelectorAll('.slide-img');
  const dotsContainer = document.getElementById('aboutDots');
  if (!slides.length || !dotsContainer) return;

  let current = 0;
  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(idx) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  setInterval(() => goToSlide((current + 1) % slides.length), 3500);
}
initAboutSlideshow();

// --- SKILL BAR ANIMATION ---
function animateSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  fills.forEach(fill => {
    const target = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = target; }, 200);
  });
}
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;
if (skillsSection) {
  const skillObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !skillsAnimated) {
      skillsAnimated = true;
      animateSkillBars();
    }
  }, { threshold: 0.2 });
  skillObs.observe(skillsSection);
}

// --- PROJECT SLIDESHOWS (prev/next + auto) ---
function initProjectSlideshows() {
  document.querySelectorAll('.project-slideshow').forEach(ss => {
    const slides = ss.querySelectorAll('.proj-slide');
    const dotsContainer = ss.querySelector('.proj-dots');
    const prevBtn = ss.querySelector('.proj-prev');
    const nextBtn = ss.querySelector('.proj-next');
    if (!slides.length) return;

    let current = 0;

    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'proj-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer && dotsContainer.appendChild(dot);
    });

    function goTo(idx) {
      slides[current].classList.remove('active');
      const dots = dotsContainer ? dotsContainer.querySelectorAll('.proj-dot') : [];
      dots[current] && dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
    }

    prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

    // Auto-advance every 4 seconds
    setInterval(() => goTo(current + 1), 4000);
  });
}
initProjectSlideshows();

// --- EMAIL SEND via mailto ---
function sendEmail() {
  const name = document.getElementById('senderName')?.value.trim();
  const email = document.getElementById('senderEmail')?.value.trim();
  const subject = document.getElementById('msgSubject')?.value.trim();
  const body = document.getElementById('msgBody')?.value.trim();

  if (!name || !email || !subject || !body) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const fullBody = `Name: ${name}\nEmail: ${email}\n\n${body}`;
  const mailtoLink = `mailto:jithendrapathiraja3434@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  window.location.href = mailtoLink;
}

// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll('.project-card, .skill-card, .about-grid, .contact-grid');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObs.observe(el);
});
