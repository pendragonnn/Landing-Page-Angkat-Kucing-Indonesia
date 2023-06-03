let nav = document.querySelector("nav");
let ham = document.querySelector(".hamburger");
let navItem = document.querySelector('#nav-link');

let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  let clicked = document.querySelector(".menu");
  if(scrollTop > lastScrollTop){
    nav.style.top="-100px";
    clicked.style.top = "-300px";
  } else {
    nav.style.top="0px";
    clicked.style.top = "65px";
  }
  lastScrollTop = scrollTop;
});

ham.addEventListener("click", function(){
  let clicked = document.querySelector(".menu");
  clicked.classList.toggle("clicked");
});

navItem.addEventListener("click", function (){
  let clicked = document.querySelector(".menu");
  clicked.classList.remove("clicked");
})




{/* <a href="#landing">Beranda</a>
                <a href="#about">Tentang</a>
                <a href="#service">Layanan</a>
                <a href="#contact" id="Contact">Hubungi</a> */}