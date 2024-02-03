function changeBg() {
    var navbar =document.getElementById("navbar") ;
    var scrollValue = window.scrollY;
    if (scrollValue <= 200 ) {
        navbar.classList.remove('bgColor');
        navbar.classList.add('container');
    } else {
        navbar.classList.add('bgColor');
        navbar.classList.remove('container');
    }
}
window.addEventListener('scroll',changeBg);
 
var Btn =document.getElementById("Btn");
 function direction() {
    if (scrollY >= 1460) {
        Btn.style.display= "block";
    } else {
        Btn.style.display= "none";
    }
 }
 window.onscroll= direction;
  
 Btn.onclick = function top() {
    scroll(0,631.33331);
 }