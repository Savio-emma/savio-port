
  // const allRadioButtons = document.querySelectorAll(".radio-buttons");
  // allRadioButtons.addEventListener('click', function(){
  //   allRadioButtons.forEach(value => {
  //     if (value.checked === true){
  //       value.checked = false;
  //     }
  //   })
  // })

// const icon = document.querySelector("#icon");

// icon.onclick = function(){
//   document.body.classList.toggle("light-theme");
//   if(document.body.classList.contains("light-theme")){
//     icon.src = "images/moon-solid.svg"
//   } else {
//     icon.src = "images/sun_image.png"
//   }
// }

var flexMainImage = document.querySelector(".flex-main-image");

const flexSubImage = document.querySelector(".flex-sub-image");

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

observer.observe(flexMainImage);
observer.observe(flexSubImage);

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