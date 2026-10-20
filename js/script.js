'use strict';

// Navegación móvil: estado accesible, cierre con Escape y al navegar.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
  navigation.classList.remove('open');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
const desktop = window.matchMedia('(min-width: 801px)');
desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });

// Sombra del header y fecha del copyright, sin dependencias.
const header = document.querySelector('.header');
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 15); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
document.querySelector('#year').textContent = new Date().getFullYear();

// Revelado progresivo. El contenido permanece visible sin JS o sin soporte.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      document.documentElement.classList.remove('js-motion');
      observer.disconnect();
    }
  });
}

// Guía interactiva: botones nativos, utilizables con ratón, Enter y espacio.
const captions = [
  '01 / Tu próxima parada empieza eligiendo.',
  '02 / Consulta en la máquina las opciones de pago disponibles.',
  '03 / Recoge tu producto en el compartimento de entrega.'
];
const steps = [...document.querySelectorAll('.step')];
steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    steps.forEach(item => {
      const active = item === step;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('.step-caption').textContent = captions[index];
  });
  step.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
    const next = steps[(index + direction + steps.length) % steps.length];
    next.focus();
    next.click();
  });
});
