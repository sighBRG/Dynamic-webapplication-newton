let screenHeight = screen.availHeight;
document.getElementsByTagName("body")[0].style.minHeight = screenHeight - 10 + "px";

function displayNavContents(ul, section) {
    let allUls = document.getElementsByTagName('ul');
    let aTag = document.getElementById(section);
    let ulTag = document.getElementById(ul);

    if (ulTag.style.display == 'inline-block') {
        ulTag.style.display = 'none';
        let newInnerHTML = aTag.innerHTML.replace('-', '+');
        aTag.innerHTML = newInnerHTML;
    } else {
        for (let i = 0; i < allUls.length; i++) {
            allUls[i].style.display = 'none';

            let navTag = document.getElementById('navTag' + (i + 1));
            let newInnerHTML = replaceCharaterOfString(navTag.innerHTML, 0, '+');
            navTag.innerHTML = newInnerHTML;
        }
        ulTag.style.display = 'inline-block';

        let newInnerHTML = aTag.innerHTML.replace('+', '-');
        aTag.innerHTML = newInnerHTML;
    }
}

function replaceCharaterOfString(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}
