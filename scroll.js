
// CALLING OUT PARAMETERS TO BE OBSEVED. MORE FINLEY AND IMPROVED JAVASCRIPT FOR THIS CAN BE FOUND AT EXP.JS
var firstSection = document.querySelector(".first-section");

var secondSection = document.querySelector(".second-section");

var thirdSection = document.querySelector(".third-section");

var fourthSection = document.querySelector(".fourth-section");

var fifthSection = document.querySelector(".fifth-section");

var sixthSection = document.querySelector(".sixth-section");

var seventhSection = document.querySelector(".seventh-section");

var eightSection = document.querySelector(".eight-section");

var ninthSection = document.querySelector(".ninth-section");


var Options = {
    threshold: 0
}


//THE ACTUAL OBSERVER FUNCTION
var observer = new IntersectionObserver (function(entries, observer){
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("toggle");
        console.log(entry);
      } else {
        entry.target.classList.remove("toggle");
      }
    });
}, Options);



observer.observe(firstSection);
observer.observe (secondSection);
observer.observe(thirdSection);
observer.observe(fourthSection);
observer.observe(fifthSection);
observer.observe(sixthSection);
observer.observe(seventhSection);
observer.observe(eightSection);
observer.observe(ninthSection);




//OBSREVER OBSERVING GROUP OF ELEMENTS TOGETHER
var elements = document.querySelectorAll(".hidden");

elements.forEach(element => {
  var checker = new IntersectionObserver (function(entries, checker){
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("toggle");
      } else {
        entry.target.classList.remove("toggle");
      }
    });
  }, Option);
  checker.observe(element);
})

var savio;
