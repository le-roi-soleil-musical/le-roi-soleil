
// Accessibility helpers for modals (non-intrusive wrapper)
(function(){
  const main = document.getElementById('main-content') || document.querySelector('main');
  let lastFocused = null;

  function getFocusable(container){
    return Array.from(container.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
    )).filter(el => el.offsetParent !== null || el.getAttribute('aria-hidden') !== 'true');
  }

  function trapKeydown(e, container){
    if (e.key !== 'Tab' && e.key !== 'Escape') return;
    const focusables = getFocusable(container);
    if (e.key === 'Escape'){
      const closeBtn = container.querySelector('[data-modal-close], .close, [aria-label="Fermer"], [aria-label="Close"]');
      if (closeBtn) closeBtn.click();
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first){
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last){
      first.focus();
      e.preventDefault();
    }
  }

  function enhanceOpen(modal){
    if (!modal) return;
    modal.setAttribute('aria-hidden','false');
    if (main) main.setAttribute('aria-hidden','true');
    const content = modal.querySelector('.modal-content, [role="document"]') || modal;
    // ensure content focusable
    if (!content.hasAttribute('tabindex')) content.setAttribute('tabindex','-1');
    content.focus({preventScroll:true});
    const keyHandler = (e)=>trapKeydown(e, modal);
    modal.__a11yKeyHandler = keyHandler;
    modal.addEventListener('keydown', keyHandler);
  }

  function enhanceClose(modal){
    if (!modal) return;
    modal.setAttribute('aria-hidden','true');
    if (main) main.removeAttribute('aria-hidden');
    if (modal.__a11yKeyHandler){
      modal.removeEventListener('keydown', modal.__a11yKeyHandler);
      delete modal.__a11yKeyHandler;
    }
    if (lastFocused && typeof lastFocused.focus === 'function'){
      try { lastFocused.focus(); } catch(e){}
    }
  }

  // Wrap existing modal open/close functions (if present)
  function wrapOpenClose(openName, closeName, modalId){
    const modal = document.getElementById(modalId);
    if (!window[openName] || typeof window[openName] !== 'function') return;
    if (!window[closeName] || typeof window[closeName] !== 'function') return;

    const originalOpen = window[openName];
    const originalClose = window[closeName];

    window[openName] = function(...args){
      // remember focus/source element
      lastFocused = document.activeElement;
      const ret = originalOpen.apply(this, args);
      // When original has set display, enhance
      enhanceOpen(modal);
      return ret;
    };
    window[closeName] = function(...args){
      const ret = originalClose.apply(this, args);
      enhanceClose(modal);
      return ret;
    };
  }

  // Character modal
  wrapOpenClose('openCharacterModal', 'closeModal', 'character-modal');
  // Historical character modal
  wrapOpenClose('openHistoricalCharacterModal', 'closeHistoricalCharacterModal', 'historical-character-modal');

  // For safety: if open/close functions are bound to click without wrapping,
  // also capture clicks to remember the last focused trigger.
  document.addEventListener('click', (e)=>{
    const t = e.target;
    if (!t) return;
    if (t.closest('[data-modal-open], .character-card, button, a')){
      lastFocused = t.closest('[data-modal-open], .character-card, button, a') || t;
    }
  }, true);
})();
