(function () {
  function byId(id) { return document.getElementById(id); }

  function initYear() {
    const yearEl = byId('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initNav() {
    const toggle = document.querySelector('.nav__toggle');
    const list = document.querySelector('.nav__list');
    if (!toggle || !list) return;
    toggle.addEventListener('click', () => {
      const isOpen = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Smooth scroll
    list.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const targetId = a.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          list.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function initForm() {
    const form = byId('lead-form');
    if (!form) return;
    const elError = form.querySelector('.form__msg--error');
    const elSuccess = form.querySelector('.form__msg--success');

    function show(el, show) {
      if (!el) return;
      el.hidden = !show;
    }

    function validate(data) {
      const hasPhone = (data.get('phone') || '').toString().trim().length >= 7;
      const hasEmail = /.+@.+\..+/.test((data.get('email') || '').toString());
      const hasName = (data.get('name') || '').toString().trim().length >= 2;
      return hasName && (hasPhone || hasEmail);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      show(elError, false); show(elSuccess, false);
      const data = new FormData(form);
      if (!validate(data)) {
        show(elError, true);
        return;
      }

      // Simulate async submit. Replace with your backend endpoint.
      try {
        await new Promise((res) => setTimeout(res, 600));
        form.reset();
        show(elSuccess, true);
      } catch (err) {
        show(elError, true);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initNav();
    initForm();
  });
})();

