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

window.onresize = resetMobile;
resetMobile();