document.addEventListener('DOMContentLoaded', () => {
  // MENÚ DESKTOP
  const desktopToggleBtn = document.getElementById('product-desktop-button');
  const desktopSubMenu = document.getElementById('product-desktop-menu');
  
  if (desktopToggleBtn && desktopSubMenu) {
    desktopToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = desktopToggleBtn.getAttribute('aria-expanded') === 'true';
      desktopToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      desktopSubMenu.classList.toggle('hidden');
    });
  }

  // MENÚ MÓVIL
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenuButton = document.getElementById('close-mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  if (closeMobileMenuButton && mobileMenu) {
    closeMobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Submenú móvil
  const mobileToggleBtn = document.querySelector('button[aria-controls="products"]');
  const mobileSubMenu = document.getElementById('products');
  const mobileIcon = mobileToggleBtn?.querySelector('svg');
  
  if (mobileToggleBtn && mobileSubMenu) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
      mobileToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileSubMenu.classList.toggle('hidden');
      if (mobileIcon) mobileIcon.classList.toggle('rotate-180');
    });
  }
  
  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && e.target !== mobileMenuButton) {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });
});