(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const year = document.querySelector('#ano');

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 18);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const closeMenu = () => {
    toggle?.classList.remove('active');
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  toggle?.addEventListener('click', () => {
    const open = !nav?.classList.contains('open');
    toggle.classList.toggle('active', open);
    nav?.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    reveals.forEach((el) => observer.observe(el));
  }

  const cfg = window.SITE_CONFIG || {};
  const contactActions = document.querySelector('.contact-actions');
  let activeChannels = 0;

  document.querySelectorAll('[data-channel]').forEach((el) => {
    const channel = el.dataset.channel;
    if (channel === 'whatsapp' && cfg.whatsapp) {
      const msg = encodeURIComponent('Olá, Vanessa! Gostaria de saber mais sobre a contabilidade especializada para profissionais da saúde.');
      el.href = `https://wa.me/${String(cfg.whatsapp).replace(/\D/g, '')}?text=${msg}`;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
      el.hidden = false;
      activeChannels++;
    }
    if (channel === 'email' && cfg.email) {
      el.href = `mailto:${cfg.email}?subject=${encodeURIComponent('Contato pelo site — Vanessa Contabilidade')}`;
      el.hidden = false;
      activeChannels++;
    }
    if (channel === 'instagram' && cfg.instagram) {
      el.href = cfg.instagram;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
      el.hidden = false;
      activeChannels++;
    }
  });

  if (contactActions && activeChannels > 0) contactActions.hidden = false;
})();
