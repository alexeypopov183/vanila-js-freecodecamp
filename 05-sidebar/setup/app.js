let sidebarToggle = document.querySelector('.sidebar-toggle');
let sidebar = document.querySelector('.sidebar');
let closeButton = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function() {
  sidebar.classList.toggle('show-sidebar');
  
})

closeButton.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar')
})