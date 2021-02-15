// function scrollDown() {
//     let pageHeight = window.innerHeight;
//     let btn;
//     for (let s = 0; s < btn.length; s++) {
//         btn[s].addEventListener('click', function () {
//             window.scrollBy(0, pageHeight);
//         });
//     }
// }


let ads = document.getElementsByClassName("inner-grid-sidebar")[0];
let divs = ads.getElementsByTagName("div");

function randomizeAds() {

    let div = divs[0];
    let img = ads.getElementsByTagName("img");

    divs[0].remove();
    ads.append(div);

    for (let i = 0; i < img.length; i++) {
        if (i === 0) {
            $(divs[0]).delay(3000).fadeOut(2000);
        } else {
            $(divs[0]).fadeIn(750);
        }
    }
}

setInterval(randomizeAds, 5000);

