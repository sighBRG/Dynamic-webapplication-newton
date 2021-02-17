let ads = document.getElementsByClassName("inner-grid-sidebar")[0];
let imgDiv = ads.getElementsByTagName("div");
let articles = document.getElementsByClassName("desktop-p");
let articleImages = document.getElementsByClassName("inner-grid-big")[0];
let images = articleImages.getElementsByTagName("img");
let pagination = document.getElementsByClassName("pagination")[0].children;
let firstSpan = document.getElementById("0");
let secondSpan = document.getElementById("1");
let thirdSpan = document.getElementById("2");
let fourthSpan = document.getElementById("3");

displayHandler(0);

firstSpan.addEventListener("click", () => {
    displayHandler(0);
    firstSpan.style.border = "3px solid #3498db";
})
secondSpan.addEventListener("click", () => {
    displayHandler(1);
    secondSpan.style.border = "3px solid #3498db";
})
thirdSpan.addEventListener("click", () => {
    displayHandler(2);
    thirdSpan.style.border = "3px solid #3498db";
})
fourthSpan.addEventListener("click", () => {
    displayHandler(3);
    fourthSpan.style.border = "3px solid #3498db";
})


function displayHandler(span) {
    for (let i = 0; i < articles.length; i++) {
        pagination[i].style.border = "none"
        articles[i].style.display = "none";
        images[i].style.display = "none";
    }
    articles[span].style.display = "grid";
    images[span].style.display = "grid";
}

firstSpan.style.border = "3px solid #3498db";

function carouselAds() {

    let div = imgDiv[0];
    imgDiv[0].remove();
    ads.append(div);

    $(imgDiv[0]).delay(4000).slideUp(1000);
    $(imgDiv[0]).fadeIn();
}

function queueFirstAd() {
    $(imgDiv[0]).delay(4000).slideUp(1000);
    $(imgDiv[0]).fadeIn();
}


setInterval(carouselAds, 5000);
queueFirstAd();
