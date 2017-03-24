
// external links
var links = document.getElementsByTagName('a');
var currentDomain = location.protocol + '//' + location.hostname;
// console.log(currentDomain);
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  var href = link.getAttribute('href');
  if (href &&
    href.startsWith('http') &&
    !href.startsWith(currentDomain)) {
    link.setAttribute('target', '_blank');
    // console.log(link);
  }
}

// navigation
var navLinks = document.querySelectorAll('nav a');
var currentPath = window.location.pathname;
for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];
  var href = link.getAttribute('href');
  // console.log(href, currentPath);
  if (href === currentPath) {
    link.className += 'current';
  }
}
