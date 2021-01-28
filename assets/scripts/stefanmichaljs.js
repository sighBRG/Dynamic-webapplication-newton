function scrollDown() {
    let pageHeight = window.innerHeight;
    let btn;
    for (let s = 0; s < btn.length; s++) {
        btn[s].addEventListener('click', function () {
            window.scrollBy(0, pageHeight);
        });
    }
}
