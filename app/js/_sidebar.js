var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');
var scrollSidebar = false;

// sidebar menu on narrow screens
function toggleMenu() { // declare a function that updates the state

  sidebarOpen = !sidebarOpen;

  var root = document.getElementsByTagName('html')[0];
  if (sidebarOpen) {
    root.className += ' sidebar-open';
    setScrollSidebar();
  } else {
    root.className = root.className.replace(/(?:^|\s)sidebar-open(?!\S)/g , '');
  }
}
var element = document.getElementById('menu-toggle');
element.addEventListener('click', toggleMenu);

// disallow scrolling if sidebar is open on mobile
function setScrollSidebar() {
  var sidebar = document.getElementById('sidebar');
  var sidebarContent = document.getElementById('sidebar-content');
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
