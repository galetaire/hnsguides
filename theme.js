(function () {
  var root = document.documentElement;

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateButton() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var dark = currentTheme() === 'dark';
    btn.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  window.toggleTheme = function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    // Remembering the choice is optional: some private modes block storage.
    try { localStorage.setItem('theme', next); } catch (e) {}
    updateButton();
  };

  document.addEventListener('DOMContentLoaded', updateButton);
})();
