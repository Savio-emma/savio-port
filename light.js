//THIS JS AFFECTS ALL THE WEBPAGES

//LIGHT AND DARK THEME TOGGLE FUNCTION
// Retrieve checkbox state from local storage when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  const checkboxState = localStorage.getItem('checkboxState');

  if (checkboxState === 'checked') {
    checkbox.checked = true;
    document.body.classList.add('light-theme');
    icon.src = "images/moon-solid.svg"
  }

  // Update local storage and toggle dark mode when checkbox state changes
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      localStorage.setItem('checkboxState', 'checked');
      document.body.classList.add('light-theme');
    icon.src = "images/moon-solid.svg"
    } else {
      localStorage.removeItem('checkboxState');
      document.body.classList.remove('light-theme');
    icon.src = "images/sun_image.png";
    }
  });

});



// THIS AFFECTS ONLY THE SCROLL TO THE TOP PROPERTY ACROSS THE WEBPAGES
var scrollTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 500){
    scrollTop.classList.add("static");
  } else {
    scrollTop.classList.remove("static")
  }
})

//this part is the open and close menu for pads and mobiles only!


const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mainMenu = document.querySelector(".header-buttons");


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
}

function close(){
  mainMenu.style.top = '-110%'
}