//Navigation menu scripts
var mobileMenu = document.getElementById("mobile-nav");
function toggleOpen(){
  mobileMenu.style.display = "flex";
}

function toggleClose() {
  mobileMenu.style.display = "none";
}

function resetMobile() {
  if (window.innerWidth >= 1000) {
    mobileMenu.style.display = "none";
  }
}
// Hide mobile navigation on screen resize
window.onresize = resetMobile;
resetMobile();