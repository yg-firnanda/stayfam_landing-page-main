// ==============================
// Page Loader
// ==============================

const pageLoader = document.querySelector(".page-loader");

window.addEventListener("load", function() {
    pageLoader.style.visibility = "hidden";
    pageLoader.style.opacity = "0";
})

// ==============================
// Scroll Header
// ==============================

const navbar = document.querySelector(".navbar");
const scrollHeader = () => {
	const navbar = document.querySelector(".navbar");
    const menu = document.querySelector('.menu');
    // const close = document.querySelector('.close');
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if( this.scrollY >= 50 ) {
        navbar.classList.add("scroll-header");
        menu.style.color = 'var(--primary)';
    } else {
        navbar.classList.remove("scroll-header");
        menu.style.color = '#fff';
    }
};
window.addEventListener("scroll", scrollHeader);

// ==============================
// Count Animation
// ==============================

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach( (valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt( valueDisplay.getAttribute("data-val") );

    let duration = Math.floor( interval / endValue );
    let counter = setInterval( function() {
        startValue += 1;

        valueDisplay.textContent = startValue;
        if( startValue == endValue ) {
            clearInterval(counter);
        }
    }, duration);
})

// ==============================
// Sidebar
// ==============================

let menu = document.querySelector('#menu');
let slider = document.querySelector('.slide-menu');
let close = document.querySelector('#close');
let overlay = document.querySelector('#overlay');

// Ketika diaktifkan
menu.addEventListener('click', function() {
    slider.style.transform = "translateX(0%)";
    overlay.classList.add('show');
})


// Ketika dinonaktif
close.addEventListener('click', function() {
    slider.style.transform = "translateX(100%)";
    overlay.classList.remove("show");
})
overlay.addEventListener('click', function() {
    slider.style.transform = "translateX(100%)";
    overlay.classList.remove("show");
})
slider.addEventListener('click', function() {
    slider.style.transform = "translateX(100%)";
    overlay.classList.remove("show");
})

// User Experience
// if( overlay.contains('') )
// document.onclick = function(e) {
//     if(e.target.id !== 'close') {
//         slider.style.transform = "translateX(100%)"; // not normal
//         overlay.classList.remove('show');
//     }
// }


// ==============================
// Catalog (Load More)
// ==============================

// !UNSOLVED PROBLEM : item values are 34, how to change item values according to the catalog-item number in every catalog-type?

let navLink = document.querySelectorAll(".nav-link");
let loadMore = document.querySelector('#load-more');
let currentItem = 3;


// navLink.addEventListener('click', function() {
//     for (let i = 0; i < navLink.length; i++) {
//         navLink[i].style.color = "green";
//     }
// })

loadMore.onclick = () => {
    let item = [...document.querySelectorAll('.tab-content .catalog-type .catalog-item')];
    for( let i = currentItem; i < currentItem + 3; i++ ) {
        item[i].style.display = "inline-block";
    }
    currentItem += 3;
    // alert(currentItem);

    //Original: if( currentItem >= item.length ) {
    if( currentItem > 6 ) {
        loadMore.style.display = "none";
    }
}

// ==============================
// Featured
// ==============================

var swiperFeatured = new Swiper(".featured-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        578: {
            slidesPerView: 2
        },
        769: {
            slidesPerView: 3
        }
    }
});

// ==============================
// Testimonial
// ==============================

var swiperTestimonial = new Swiper(".testimonial-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
