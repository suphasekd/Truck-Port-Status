(() => {
  const menuToggle = document.getElementById('systemMenuToggle');
  const systemMenu = document.getElementById('systemMenu');
  if (!menuToggle || !systemMenu) return;

  function closeSystemMenu() {
    systemMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'เปิดเมนูระบบ');
  }

  menuToggle.addEventListener('click', () => {
    systemMenu.hidden = !systemMenu.hidden;
    menuToggle.setAttribute('aria-expanded', String(!systemMenu.hidden));
    menuToggle.setAttribute('aria-label', systemMenu.hidden ? 'เปิดเมนูระบบ' : 'ปิดเมนูระบบ');
    if (!systemMenu.hidden) systemMenu.querySelector('a').focus();
  });
  systemMenu.addEventListener('click', event => {
    if (event.target.closest('a')) closeSystemMenu();
  });
  document.addEventListener('click', event => {
    if (!systemMenu.hidden && !event.target.closest('.head-actions')) closeSystemMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !systemMenu.hidden) {
      closeSystemMenu();
      menuToggle.focus();
    }
  });
})();
