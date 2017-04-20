var sidebarOpen = false;
var sidebar = document.getElementById('js-sidebar');
var menuToggle = document.getElementById('js-menu-toggle');
var sidebarContent = document.getElementById('js-sidebar-content');

// sidebar menu on narrow screens
function toggleMenu() { // declare a function that updates the state

  sidebarOpen = !sidebarOpen;

  var html = document.getElementsByTagName('html')[0];
  if (sidebarOpen) {
    html.className += ' sidebar-open';
    setScrollSidebar();
  } else {
    html.className = html.className.replace(/(?:^|\s)sidebar-open(?!\S)/g , '');
  }
}

menuToggle.addEventListener('click', toggleMenu);

// disallow scrolling if sidebar is open on mobile
var scrollSidebar = false;
function setScrollSidebar() {
  scrollSidebar = (sidebarContent.scrollHeight > sidebar.clientHeight);
  // console.log(scrollSidebar, sidebarContent.scrollHeight, sidebar.clientHeight);
}
setScrollSidebar();
sidebar.addEventListener('touchmove', function(e) {
  if (sidebarOpen && !scrollSidebar) {
    e.preventDefault();
  }
}, false);
window.addEventListener('resize', setScrollSidebar, true);
window.addEventListener('orientationchange', setScrollSidebar, true);
