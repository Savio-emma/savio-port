// THIS MARKS THEBEGINNING OF THE OBSERVATION FUNCTION

var flexMainImage = document.querySelector(".flex-main-image");

const flexSubImage = document.querySelector(".flex-sub-image");

const Options = {
  threshold: 0.4
}

//actual observation function
const observer = new IntersectionObserver (function(entries, observer){
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("toggle");
    } else {
      entry.target.classList.remove("toggle");
    }
  });
}, Options);

observer.observe(flexMainImage);
observer.observe(flexSubImage);


//observing a group of elements togethee
const elements = document.querySelectorAll(".profile-observer");

elements.forEach(element => {
  const checker = new IntersectionObserver (function(entries, checker){
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("toggle");
        console.log(entry);
      } else {
        entry.target.classList.remove("toggle");
      }
    });
  }, Option);
  checker.observe(element);
})
// END OF OBSERVATION FUNCTION




//FUNCTION THAT CLOSES THE ACCORDION WHEN IT IS CLICKED
var radioButtons = document.querySelectorAll('input[type="radio"]');

// Add click event listener to each radio button
radioButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (this.checked && this.getAttribute('data-checked') === 'true'){
      this.checked = false;
    } else {
      this.getAttribute('data-checked') === 'true';
    }
    // Update data-checked attribute
    this.setAttribute('data-checked', this.checked ? 'true' : 'false');
  });
});