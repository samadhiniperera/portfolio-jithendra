// // =============================================
// // JITHENDRA PATHIRAJA PORTFOLIO — script.js
// // =============================================

// // --- THEME TOGGLE ---
// const themeToggle = document.getElementById('themeToggle');
// const themeIcon   = document.getElementById('themeIcon');
// const html        = document.documentElement;

// function applyTheme(theme) {
//   html.setAttribute('data-theme', theme);
//   localStorage.setItem('theme', theme);
//   if (themeIcon) themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
// }
// applyTheme(localStorage.getItem('theme') || 'dark');
// themeToggle && themeToggle.addEventListener('click', () => {
//   applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
// });

// // --- HAMBURGER ---
// const hamburger = document.getElementById('hamburger');
// const navLinks  = document.getElementById('navLinks');
// hamburger && hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
// document.querySelectorAll('.nav-link').forEach(link => {
//   link.addEventListener('click', () => navLinks.classList.remove('open'));
// });

// // --- NAVBAR SCROLL ---
// window.addEventListener('scroll', () => {
//   const nb = document.getElementById('navbar');
//   if (nb) nb.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.3)' : 'none';
//   updateActiveNav();
// });
// function updateActiveNav() {
//   const sections = document.querySelectorAll('section[id]');
//   const links    = document.querySelectorAll('.nav-link');
//   let current = '';
//   sections.forEach(s => {
//     if (window.scrollY >= s.offsetTop - 130) current = s.id;
//   });
//   links.forEach(l => {
//     l.classList.remove('active');
//     const href = l.getAttribute('href');
//     if (href === '#' + current || href === 'index.html#' + current) l.classList.add('active');
//   });
// }

// // --- HERO BACKGROUND SLIDESHOW ---
// (function () {
//   const slides = document.querySelectorAll('.hero-bg-slide');
//   if (!slides.length) return;
//   let i = 0;
//   setInterval(() => {
//     slides[i].classList.remove('active');
//     i = (i + 1) % slides.length;
//     slides[i].classList.add('active');
//   }, 5000);
// })();

// // --- 2-MINUTE SUMMARY MODAL ---
// const summaryBtn     = document.getElementById('summaryBtn');
// const summaryModal   = document.getElementById('summaryModal');
// const modalClose     = document.getElementById('modalClose');
// const modalBackdrop  = document.getElementById('modalBackdrop');

// function openModal() {
//   summaryModal  && summaryModal.classList.add('open');
//   modalBackdrop && modalBackdrop.classList.add('open');
//   document.body.style.overflow = 'hidden';
// }
// function closeModal() {
//   summaryModal  && summaryModal.classList.remove('open');
//   modalBackdrop && modalBackdrop.classList.remove('open');
//   document.body.style.overflow = '';
// }
// summaryBtn    && summaryBtn.addEventListener('click', openModal);
// modalClose    && modalClose.addEventListener('click', closeModal);
// modalBackdrop && modalBackdrop.addEventListener('click', closeModal);

// // --- SKILL BAR ANIMATION ---
// function animateSkillBars() {
//   document.querySelectorAll('.sbar-fill').forEach(fill => {
//     const target = fill.style.width;
//     fill.style.width = '0%';
//     setTimeout(() => { fill.style.width = target; }, 150);
//   });
// }
// const skillSection = document.getElementById('skills');
// let skillsAnimated = false;
// if (skillSection) {
//   new IntersectionObserver(entries => {
//     if (entries[0].isIntersecting && !skillsAnimated) {
//       skillsAnimated = true;
//       animateSkillBars();
//     }
//   }, { threshold: 0.15 }).observe(skillSection);
// }

// // --- PROJECT SLIDESHOWS ---
// document.querySelectorAll('.project-slideshow').forEach(ss => {
//   const slides = ss.querySelectorAll('.proj-slide, .proj-video, .proj-slide-placeholder');
//   const dots   = ss.querySelector('.proj-dots');
//   const prev   = ss.querySelector('.proj-prev');
//   const next   = ss.querySelector('.proj-next');
//   if (!slides.length) return;

//   let cur = 0;
//   slides.forEach((_, i) => {
//     const d = document.createElement('div');
//     d.className = 'proj-dot' + (i === 0 ? ' active' : '');
//     d.addEventListener('click', () => goTo(i));
//     dots && dots.appendChild(d);
//   });

//   function goTo(idx) {
//     const prevSlide = slides[cur];
//     if (prevSlide.tagName === 'VIDEO') { prevSlide.pause(); prevSlide.currentTime = 0; }
//     prevSlide.classList.remove('active');
//     const allDots = dots ? dots.querySelectorAll('.proj-dot') : [];
//     allDots[cur] && allDots[cur].classList.remove('active');
//     cur = (idx + slides.length) % slides.length;
//     slides[cur].classList.add('active');
//     allDots[cur] && allDots[cur].classList.add('active');
//     if (slides[cur].tagName === 'VIDEO') slides[cur].play().catch(() => {});
//   }

//   prev && prev.addEventListener('click', () => goTo(cur - 1));
//   next && next.addEventListener('click', () => goTo(cur + 1));
//   setInterval(() => goTo(cur + 1), 5000);
// });

// // --- EMAIL FORM ---
// function sendEmail() {
//   const name    = document.getElementById('senderName')?.value.trim();
//   const email   = document.getElementById('senderEmail')?.value.trim();
//   const subject = document.getElementById('msgSubject')?.value.trim();
//   const body    = document.getElementById('msgBody')?.value.trim();
//   if (!name || !email || !subject || !body) {
//     alert('Please fill in all fields before sending.'); return;
//   }
//   const fullBody = `Name: ${name}\nEmail: ${email}\n\n${body}`;
//   window.location.href = `mailto:jithendrapathiraja3434@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
// }

// // --- SCROLL REVEAL ---
// const revealEls = document.querySelectorAll(
//   '.project-card, .skill-group, .exp-card, .about-meta-item, .ai-block, .contact-card'
// );
// const revealObs = new IntersectionObserver(entries => {
//   entries.forEach(e => {
//     if (e.isIntersecting) {
//       e.target.style.opacity = '1';
//       e.target.style.transform = 'translateY(0)';
//     }
//   });
// }, { threshold: 0.06 });
// revealEls.forEach(el => {
//   el.style.opacity = '0';
//   el.style.transform = 'translateY(24px)';
//   el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//   revealObs.observe(el);
// });



// =============================================
// JITHENDRA PATHIRAJA PORTFOLIO — script.js
// =============================================

// --- THEME TOGGLE ---
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const html        = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeIcon) themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}
applyTheme(localStorage.getItem('theme') || 'dark');
themeToggle && themeToggle.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// --- HAMBURGER (shows ALL items at once as a full overlay) ---
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger && hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.querySelector('i').className =
    navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
});
// Close menu when any nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const icon = hamburger && hamburger.querySelector('i');
    if (icon) icon.className = 'fas fa-bars';
  });
});

// --- NAVBAR SCROLL SHADOW ---
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if (nb) nb.style.boxShadow = window.scrollY > 40
    ? '0 4px 30px rgba(0,0,0,0.4)'
    : 'none';
  updateActiveNav();
});

// --- ACTIVE NAV LINK on scroll ---
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.id;
  });
  links.forEach(l => {
    l.classList.remove('active');
    const href = l.getAttribute('href');
    if (
      href === '#' + current ||
      href === 'index.html#' + current ||
      (current === 'projects-preview' && href === '#projects-preview')
    ) {
      l.classList.add('active');
    }
  });
}

// --- HERO BACKGROUND SLIDESHOW ---
(function () {
  const slides = document.querySelectorAll('.hero-bg-slide');
  if (!slides.length) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 5000);
})();

// --- 2-MINUTE SUMMARY MODAL ---
const summaryBtn    = document.getElementById('summaryBtn');
const summaryModal  = document.getElementById('summaryModal');
const modalClose    = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function openModal() {
  summaryModal  && summaryModal.classList.add('open');
  modalBackdrop && modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  summaryModal  && summaryModal.classList.remove('open');
  modalBackdrop && modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}
summaryBtn    && summaryBtn.addEventListener('click', openModal);
modalClose    && modalClose.addEventListener('click', closeModal);
modalBackdrop && modalBackdrop.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// --- SKILL BAR ANIMATION ---
function animateSkillBars() {
  document.querySelectorAll('.sbar-fill').forEach(fill => {
    const target = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = target; }, 150);
  });
}
const skillSection = document.getElementById('skills');
let skillsAnimated = false;
if (skillSection) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !skillsAnimated) {
      skillsAnimated = true;
      animateSkillBars();
    }
  }, { threshold: 0.15 }).observe(skillSection);
}

// --- PROJECT SLIDESHOWS (sub-pages) ---
document.querySelectorAll('.project-slideshow').forEach(ss => {
  const slides = ss.querySelectorAll('.proj-slide, .proj-video, .proj-slide-placeholder');
  const dots   = ss.querySelector('.proj-dots');
  const prev   = ss.querySelector('.proj-prev');
  const next   = ss.querySelector('.proj-next');
  if (!slides.length) return;

  let cur = 0;
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'proj-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dots && dots.appendChild(d);
  });

  function goTo(idx) {
    const prevSlide = slides[cur];
    if (prevSlide.tagName === 'VIDEO') { prevSlide.pause(); prevSlide.currentTime = 0; }
    prevSlide.classList.remove('active');
    const allDots = dots ? dots.querySelectorAll('.proj-dot') : [];
    allDots[cur] && allDots[cur].classList.remove('active');
    cur = (idx + slides.length) % slides.length;
    slides[cur].classList.add('active');
    allDots[cur] && allDots[cur].classList.add('active');
    if (slides[cur].tagName === 'VIDEO') slides[cur].play().catch(() => {});
  }

  prev && prev.addEventListener('click', () => goTo(cur - 1));
  next && next.addEventListener('click', () => goTo(cur + 1));
  setInterval(() => goTo(cur + 1), 5000);
});

// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll(
  '.project-card, .skill-group, .exp-card, .about-meta-item, ' +
  '.ai-block, .contact-card, .proj-preview-card, .contact-info-box'
);
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.06 });
revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObs.observe(el);
});

// --- HASH ANCHOR SCROLL for sub-page project links ---
// When navigating to design-manufacturing.html#dm1 etc., the browser auto-scrolls.
// This ensures the correct offset accounting for sticky navbar + sub-nav.
(function () {
  if (!window.location.hash) return;
  setTimeout(() => {
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    const offset = 140; // navbar 68px + sub-nav ~50px + buffer
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 300);
})();