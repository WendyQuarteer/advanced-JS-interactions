const carousel = document.getElementsByClassName("carouselContainer");//location for paralax-carousel
const carouselImg = [ //img's to use for parallax carousel.
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

carousel[0].style.backgroundAttachment = "fixed";//fix background for parallax-effect.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fruits = [
    {
       name: "Blackberry",
        url: "images/blackberry.jpg",
        info: "An edible soft fruit consisting of a cluster of soft purple-black drupelets.",
    },
    {
        name: "Strawberry",
        url: "images/strawberry.jpg",
        info: "A sweet soft red fruit with a seed-studded surface",
    },
    {
        name: "Clementine",
        url: "images/clementine.png",
        info: "A tangerine of a deep orange-red North African variety which is grown around the Mediterranean and in South Africa.",
    },
    {
        name: "Apple",
        url: "images/apple.jpg",
        info: "The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.",
    },
    {
        name: "Pear",
        url: "images/pear.jpg",
        info: "A yellowish- or brownish-green edible fruit that is typically narrow at the stalk and wider towards the base, with sweet, slightly gritty flesh.\n",
    },
    {
        name: "Starfruit",
        url: "images/starfruit.jpg",
        info: "A golden-yellow juicy fruit with a star-shaped cross section.",
    },
    {
        name: "Watermelon",
        url: "images/watermelon.jpg",
        info: "The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice.",
    },
    {
        name: "Blueberry",
        url: "images/blueberry.jpg",
        info: "A small sweet blue-black edible berry which grows in clusters on North American shrubs related to the bilberry.",
    },
    {
        name: "Pomegranate",
        url: "images/pomegranate.jpg",
        info: "A spherical fruit with a tough golden-orange outer skin and sweet red gelatinous flesh containing many seeds.",
    },
    {
        name: "Date",
        url: "images/date.jpg",
        info: "A sweet, dark brown oval fruit containing a hard stone, usually eaten dried.\n",
    },
    {
        name: "Cantaloupe",
        url: "images/cantaloupe.jpg",
        info: "A small round melon of a variety with orange flesh and ribbed skin.",
    },
    {
        name: "Plum",
        url: "images/plum.jpg",
        info: "An oval fleshy fruit which is purple, reddish, or yellow when ripe and contains a flattish pointed stone.",
    },
    {
        name: "Peach",
        url: "images/peach.jpg",
        info: "A round stone fruit with juicy yellow flesh and downy pinkish-yellow skin.",
    },
    {
        name: "Passion-fruit",
        url: "images/passionfruit.jpg",
        info: "The edible purple fruit of a kind of passion flower that is grown commercially, especially in tropical America and the Caribbean.",
    },
    {
        name: "Lime",
        url: "images/lime.jpg",
        info: "A round fruit containing a lot of juice that is sour like a lemon but smaller and green, or the small tree on which this fruit grows.",
    },
    {
        name: "Papaya",
        url: "images/papaja.jpg",
        info: "A round fruit containing a lot of juice that is sour like a lemon but smaller and green, or the small tree on which this fruit grows.",
    },
]

function toCollage() {//function to add images to the collage.
    let tiles = document.querySelectorAll(".image");
    for (let i = 0; i < fruits.length; i++) {
        tiles[i].style.backgroundImage = "url(" + fruits[i].url + ")";
    }
}
toCollage()//call the function

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Array.from(document.querySelectorAll(".letter")).forEach(el => {
//el.innerText = randomLetter();
//});

//function randomLetter(){
//const alphabet = "abcdefghijklmnopqrstuvwxyz"
//return alphabet[Math.floor(Math.random() * alphabet.length)]
//}
