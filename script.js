document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-toggle');
  var sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      var arrow = toggle.querySelector('.arrow');
      if (arrow) arrow.textContent = sidebar.classList.contains('open') ? '▴' : '▾';
    });
  }
});
