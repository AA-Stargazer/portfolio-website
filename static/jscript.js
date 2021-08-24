// Remove the transition class
const appear = document.querySelector('.appear');
appear.classList.remove('appear-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      appear.classList.add('appear-transition');
      return;
    }

    appear.classList.remove('appear-transition');
  });
});

observer.observe(document.querySelector('.appear-wrapper'));

//

function hide_element(y) {
    var x = document.getElementsByClassName(y);
    x[0].style.visibility = "hidden";
}
function show_element(y) {
    var x = document.getElementsByClassName(y);
    x[0].style.visibility = "visible";
}

//

//copying email of anchor tag's href or writing a display:none; and trying copying it with anchor tag or writng button
//instead of anchor tag unsuccessful, maybe later I can try if I learn something on javascript
