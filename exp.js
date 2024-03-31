// UPDATED AND REQUIRED METHOD FOR USING INTERSECTION OBSERVER TO OBSERVER MULTIPLE ELEMENTS AT ONCE

var sections = document.querySelectorAll(".section");

var options = {
    threshold: 0
}

sections.forEach(section => {
    var observer = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add("toggle");
            } else {
                entry.target.classList.remove("toggle");
            }
        })
    },options)
    observer.observe(section)
})