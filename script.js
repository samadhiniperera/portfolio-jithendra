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
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle && themeToggle.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// --- HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger && hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a non-dropdown link is clicked
document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 960) {
      e.preventDefault();
      toggle.closest('.nav-dropdown').classList.toggle('open');
    }
  });
});

// --- NAVBAR SCROLL STYLE ---
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.3)' : 'none';
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  links.forEach(l => {
    l.classList.remove('active');
    const href = l.getAttribute('href');
    if (href === '#' + current || href === 'index.html#' + current) {
      l.classList.add('active');
    }
  });
}

// --- TYPED TEXT ANIMATION ---
const phrases = ['CAD Design Engineer', 'MATLAB Analyst', 'Mechatronics Engineer', 'Fluid Dynamics Researcher'];
let phraseIdx = 0, charIdx = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];
  if (!isDeleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { isDeleting = true; setTimeout(type, 2200); return; }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
  }
  setTimeout(type, isDeleting ? 55 : 85);
}
type();

// --- PARTICLE BACKGROUND ---
const particlesEl = document.getElementById('particles');
if (particlesEl) {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:0.3;';
  particlesEl.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let pts = [];

  function resize() { canvas.width = particlesEl.offsetWidth; canvas.height = particlesEl.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 55; i++) {
    pts.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = html.getAttribute('data-theme') === 'dark';
    const c = isDark ? '79,184,240' : '26,124,201';
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c},0.8)`; ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 110) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(${c},${0.12 * (1 - dist/110)})`; ctx.lineWidth = 0.6; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// --- ABOUT SLIDESHOW ---
function initAboutSlideshow() {
  const slides = document.querySelectorAll('.slide-img');
  const dotsContainer = document.getElementById('aboutDots');
  if (!slides.length || !dotsContainer) return;
  let current = 0;
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  function goTo(idx) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }
  setInterval(() => goTo((current + 1) % slides.length), 3800);
}
initAboutSlideshow();

// --- SKILL BAR ANIMATION ---
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(fill => {
    const target = fill.getAttribute('data-width') || fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = target; }, 150);
  });
}
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;
if (skillsSection) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !skillsAnimated) {
      skillsAnimated = true; animateSkillBars();
    }
  }, { threshold: 0.2 }).observe(skillsSection);
}

// --- PROJECT SLIDESHOWS ---
function initProjectSlideshows() {
  document.querySelectorAll('.project-slideshow').forEach(ss => {
    const slides = ss.querySelectorAll('.proj-slide, .proj-video');
    const dotsContainer = ss.querySelector('.proj-dots');
    const prevBtn = ss.querySelector('.proj-prev');
    const nextBtn = ss.querySelector('.proj-next');
    if (!slides.length) return;

    let current = 0;
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'proj-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer && dotsContainer.appendChild(dot);
    });

    function goTo(idx) {
      const prev = slides[current];
      // Pause video if leaving
      if (prev.tagName === 'VIDEO') { prev.pause(); prev.currentTime = 0; }
      prev.classList.remove('active');
      const dots = dotsContainer ? dotsContainer.querySelectorAll('.proj-dot') : [];
      dots[current] && dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
      // Play video if entering
      if (slides[current].tagName === 'VIDEO') {
        slides[current].play().catch(() => {});
      }
    }

    prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));
    setInterval(() => goTo(current + 1), 4500);
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
  window.location.href = `mailto:jithendrapathiraja3434@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
}

// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll('.project-card, .skill-card, .about-grid, .contact-grid');
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 }).observe && revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
});

// Separate observer to actually observe
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => obs.observe(el));
