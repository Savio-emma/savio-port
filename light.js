
// Retrieve checkbox state from local storage
document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  const checkboxState = localStorage.getItem('checkboxState');

  if (checkboxState === 'checked') {
    checkbox.checked = true;
    enableDarkMode();
  }

  // Update local storage and toggle dark mode when checkbox state changes
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      localStorage.setItem('checkboxState', 'checked');
      enableDarkMode();
    } else {
      localStorage.removeItem('checkboxState');
      disableDarkMode();
    }
  });

  function enableDarkMode() {
    document.body.classList.add('light-theme');
    icon.src = "images/moon-solid.svg"
  }

  function disableDarkMode() {
    document.body.classList.remove('light-theme');
    icon.src = "images/sun_image.png";
  }
});

var icon = document.getElementById("icon");


// icon.onclick = function(){
//   document.body.classList.toggle("light-theme");
//   if(document.body.classList.contains("light-theme")){
//     icon.src = "images/moon-solid.svg"
//   } else {
//     icon.src = "images/sun_image.png"
//   }
// }

var scrollTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 500){
    scrollTop.classList.add("static");
  } else {
    scrollTop.classList.remove("static")
  }
})