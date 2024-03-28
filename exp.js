// var icon = document.getElementById("icon");

// icon.onclick = function(){
//   document.body.classList.toggle("light-theme");
//   if(document.body.classList.contains("light-theme")){
//     icon.src = "images/moon-solid.svg"
//   } else {
//     icon.src = "images/sun_image.png"
//   }
// }


var sections = document.querySelectorAll(".section");

var options = {
    threshold: 0
}

sections.forEach(section => {
    var observer = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add("toggle");
                console.log(entry);
            } else {
                entry.target.classList.remove("toggle");
            }
        })
    },options)
    observer.observe(section)
})