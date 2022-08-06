let toggleNavStatus = false;

const menu = document.querySelector('.Toggle-menu');
const btn = document.querySelector('.btn');
const items = document.querySelector('.Navbar__Items');

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items');

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Toggle-links-display').addEventListener('click', classToggle);

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    btn.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  }  else {
    menu.classList.add("active");
    btn.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

btn.addEventListener('click', toggleMenu, false);

  if (toggleNavStatus === false) {
    items.style.visibility = "visible";
    items.style.opacity = "1";

    items.style.visibility = "visible";

    toggleNavStatus = true;
  }
  else if (toggleNavStatus === true){

    items.style.visibility = "hidden";
  }
