
(function(){
  const main = document.querySelector('main') || document.getElementById('main-content');
  const modals = document.querySelectorAll('.modal');
  let lastFocused = null;

  function trapFocus(container, e) {
    const focusables = container.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    } else if (e.key === 'Escape') {
      // Try to find a close button
      const close = container.querySelector('[data-modal-close], .close, [aria-label="Fermer"], [aria-label="Close"]');
      if (close) close.click();
    }
  }

  function openEnhance(modal) {
    lastFocused = document.activeElement;
    if (main) {
      main.setAttribute('aria-hidden', 'true');
    }
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'block';
    const content = modal.querySelector('.modal-content, [role="document"]') || modal;
    content.setAttribute('tabindex', '-1');
    content.focus({preventScroll:true});
    modal.addEventListener('keydown', (e)=>trapFocus(content,e));
  }

  function closeEnhance(modal) {
    if (main) {
      main.removeAttribute('aria-hidden');
    }
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  // Expose helpers so existing open/close functions can call them
  window.__a11yOpenModal = openEnhance;
  window.__a11yCloseModal = closeEnhance;

  // Set dialog roles/attributes
  modals.forEach(m => {
    m.setAttribute('role','dialog');
    m.setAttribute('aria-modal','true');
    if (!m.hasAttribute('aria-label') && !m.hasAttribute('aria-labelledby')) {
      const id = m.id || 'modal';
      m.setAttribute('aria-label', id.replace(/[-_]/g,' '));
    }
    m.setAttribute('aria-hidden','true'); // default hidden
  });
})();
