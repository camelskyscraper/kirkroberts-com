var links = document.getElementsByTagName('a');
var currentDomain = location.protocol + '//' + location.hostname;
// console.log(currentDomain);
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  // console.log(link);
  var href = link.getAttribute('href');
  if (href &&
    href.startsWith('http') &&
    !href.startsWith(currentDomain)) {
    link.setAttribute('target', '_blank');
    // console.log(link);
  }
}
