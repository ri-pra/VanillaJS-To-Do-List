let nav_open = true;
function toggleNav() {
  const nav = document.getElementsByClassName("nav")[0];
  const nav_toggler = document.getElementsByClassName("nav__toggler")[0];
  if (nav_open) {
    nav.style.width = "0px";
    nav.style.padding = "0";
    nav_toggler.style.left = "20px";
  } else {
    nav.style.width = "300px";
    nav.style.padding = "20px";
    nav_toggler.style.left = "250px";
  }
  nav_open = !nav_open;
}
//https://img.icons8.com/ios-glyphs/344/circled-chevron-up.png
