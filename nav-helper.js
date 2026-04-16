// nav-helper.js — shared navbar logic for sub-pages
// Inject active state on Projects dropdown for sub-pages
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const projectPages = ['design-manufacturing', 'fluid-dynamics', 'mechanical-simulations', 'academic-projects'];
  const isProjectPage = projectPages.some(p => path.includes(p));
  if (isProjectPage) {
    const toggle = document.querySelector('.dropdown-toggle');
    if (toggle) toggle.classList.add('active');
  }
});
