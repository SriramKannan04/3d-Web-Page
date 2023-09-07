
/* "event object" means what?
      when an event listenermouse move occurs, it calls its associated function and it also passes a 
single argument to the function that is a reference  to the event object*/

const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

window.addEventListener('mousemove', (e) => {
  e.preventDefault();
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach(el => {
    
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});


/*In JavaScript, clientX and clientY are properties of the MouseEvent object that represent the 
    horizontal and vertical coordinates of the mouse pointer's position relative to the browser's viewport 
    (the visible area of the web page).*/
//Represents the horizontal coordinate of the mouse pointer's position relative to the viewport in pixels,  measured in pixels,.
//Represents the vertical coordinate of the mouse pointer's position, measured in pixels, relative to the top edge of the viewport. 