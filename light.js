var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    icon.src = "images/moon-solid.svg"
  } else {
    icon.src = "images/sun_image.png"
  }
}

var scrollTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 500){
    scrollTop.classList.add("static");
  } else {
    scrollTop.classList.remove("static")
  }
})