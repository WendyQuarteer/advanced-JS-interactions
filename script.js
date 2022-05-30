const carousel = document.getElementsByClassName("carouselContainer");//location for paralax-carousel
const carouselImg = [ //imgs to use for parallax carousel.
    "images/carousel1.jpg",
    "images/carousel2.jpg",
    "images/carousel3.jpg",
]
let slideIndex = 0;//set variable for each time images change.
function slide() {//set function to change images.
    carousel[0].style.backgroundImage = "url(" + carouselImg[slideIndex] + ")";//change the blue background-image into the images.
    slideIndex += 1;//each time picture changes slideIndex add 1.
    if (slideIndex >= carouselImg.length) {//if slideIndex at the end of images it restarts at 0.
        slideIndex = 0;
    }
}
setInterval(slide, 2000);//images will change every 2 seconds.

/////
carousel[0].style.backgroundAttachment = "fixed";//fix background for parallax-effect.





//Array.from(document.querySelectorAll(".letter")).forEach(el => {
//el.innerText = randomLetter();
//});

//function randomLetter(){
//const alphabet = "abcdefghijklmnopqrstuvwxyz"
//return alphabet[Math.floor(Math.random() * alphabet.length)]
//}
