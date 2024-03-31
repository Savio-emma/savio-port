
// OBSERVER FUNCTION BEGINS
const firstSection = document.querySelector(".form-section");
const secondSection = document.querySelector(".contact-section");
const thirdSection = document.querySelector(".social-section");

const Options = {
    threshold: 0.4
}

const observer = new IntersectionObserver (function(entries, observer){
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("toggle");
      } else {
        entry.target.classList.remove("toggle");
      }
    });
}, Options);

observer.observe(firstSection);
observer.observe(secondSection);
observer.observe(thirdSection);


const Option = {
  threshold: 0.4
}

const observers = new IntersectionObserver (function(entries, observer){
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("toggle");
    } else {
      entry.target.classList.remove("toggle");
    }
  });
}, Option);

const elements = document.querySelectorAll(".input");

elements.forEach(element => {
  const checker = new IntersectionObserver (function(entries, checker){
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
// OBSERVER FUNCTION ENDS




// ALERT AT THE SUBMISSION OF THE FORM

const submitButton = document.getElementById("submit-button");

submitButton.onclick = function(){
  alert('submited successfully! we will get back to you in no time')
}

