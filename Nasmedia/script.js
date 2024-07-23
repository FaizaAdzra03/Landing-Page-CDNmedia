document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
  
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  