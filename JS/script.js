let menuIcon=document.querySelector(".menu");
let links=document.querySelector('.left');
// let allLinks=document.querySelectorAll('.links li');
menuIcon.addEventListener('click',(e)=>{
    links.classList.toggle("show");
    menuIcon.classList.toggle("active");
})

// allLinks.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         allLinks.forEach(e=>{e.classList.remove('active')})
//         e.classList.add("active");
//         links.classList.remove("show");
//     })
// })


let year=document.querySelector('.year');
year.innerHTML=new Date().getFullYear();

var swiper = new Swiper(".content-maqal ", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});