let btnMobil = document.querySelector('#btn-mobile');
let nav = document.querySelector('.navbar');

btnMobil.onclick =()=>{
  btnMobil.classList.toggle('fa-times');
  nav.classList.toggle('side')
}


window.onscroll  = () => {
  btnMobil.classList.remove('fa-times');
  nav.classList.remove('side');
}







// section menu click button//

let fiter = document.querySelectorAll('.filter .button');

let items = document.querySelectorAll('.menu .grid .coulm');
fiter.forEach(button =>{
  button.onclick =()=>{
    fiter.forEach(btn => btn.classList.remove('hedin'));
    button.classList.add('up');
    
    let dateFilter = button.getAttribute('data-filter');
    items.forEach(item =>{
      item.classList.remove('up');
      item.classList.add('hedin');
      
     if (item.getAttribute('data-item') == dateFilter || dateFilter == 'all') {
       item.classList.remove('hedin');
       item.classList.add('up');
     } 
      
      
      
    });
  }
  
  
  
});


//
var swiper = new Swiper(".box-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
