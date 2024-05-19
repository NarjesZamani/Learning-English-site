const submenuOpenBtn = document.querySelector('.submenu-open-btn');
const submenu = document.querySelector('.submenu');
const navOpenBtn= document.querySelector('.nav-icon');
const menuNav =document.querySelector('.menuNav');
const overlay = document.querySelector('.overlay');
const closeNav = document.querySelector('.close-nav');
const swiperElem = document.querySelector('.swiper');


 // Toggle Mobile Menu
 submenuOpenBtn.addEventListener("click",e=>{
    submenu.classList.toggle("flex")
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
})

// Mobile Menu
function closeNavMenu(){
    menuNav.classList.remove('right-0');
    menuNav.classList.add('-right-64');
    overlay.classList.add('hidden');
}

navOpenBtn.addEventListener("click" ,function () { 
    menuNav.classList.add('right-0');
    menuNav.classList.remove('-right-64');
    overlay.classList.remove('hidden');
    overlay.addEventListener('click',closeNavMenu);
  
 })


closeNav.addEventListener('click',closeNavMenu);


// Swiper Slider





