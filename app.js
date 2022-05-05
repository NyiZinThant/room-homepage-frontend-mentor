//-----------------custom-carousel-----------------
let left_btn = document.getElementById("left-btn");
let right_btn = document.getElementById("right-btn");

let phone_img = document.getElementById("home-phone-img");
let pc_img = document.getElementById("home-pc-img");
let default_img = document.getElementById("home-default-img")

let home_title = document.getElementById("home-title");
let home_para = document.getElementById("home-para");

let data = [
    {
        "img": [
            "./images/desktop-image-hero-1.jpg",
            "./images/mobile-image-hero-1.jpg"
        ],
        "text": [
            "Discover innovative ways to decorate",
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love."
        ]
    },
    {
        "img": [
            "./images/desktop-image-hero-2.jpg",
            "./images/mobile-image-hero-2.jpg"
        ],
        "text": [
            "We are available all across the globe",
            "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        ]
    },
    {
        "img": [
            "./images/desktop-image-hero-3.jpg",
            "./images/mobile-image-hero-3.jpg"
        ],
        "text": [
            "Manufactured with the best materials",
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        ]
    }
];

let current = 0;

left_btn.addEventListener('click', function () {
    if (current <= 0) {
        current = 2;
    } else {
        current--;
    }
    pc_img.srcset = data[current].img[0];
    phone_img.srcset = data[current].img[1];
    default_img.src = data[current].img[0];

    home_title.innerHTML = `${data[current].text[0]}`;
    home_para.innerHTML = `${data[current].text[1]}`;
});

right_btn.addEventListener('click', function () {
    if (current >= 2) {
        current = 0;
    } else {
        current++;
    }
    pc_img.srcset = data[current].img[0];
    phone_img.srcset = data[current].img[1];
    default_img.src = data[current].img[0];

    home_title.innerHTML = `${data[current].text[0]}`;
    home_para.innerHTML = `${data[current].text[1]}`;
});

//-----------------custom-navbar-----------------

let navbar_open_btn = document.getElementsByClassName('navbar-toggler')[0];
let navbar_close_btn = document.getElementsByClassName('close-btn')[0];
let navbar_container = document.getElementsByClassName('nav-container')[0];

navbar_open_btn.addEventListener('click', function(){
    navbar_container.classList.add('active');
});

navbar_close_btn.addEventListener('click', function(){
    navbar_container.classList.remove('active');
    // console.log("hello");
});