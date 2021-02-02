function displayNavContents(ul, section){
    let allUls = document.getElementsByTagName('ul');
    let aTag = document.getElementById(section);

    for(let i = 0 ; i < allUls.length ; i++){
        allUls[i].style.display = 'none';
        
        let navTag = document.getElementById('navTag'+ (i + 1));
        let newInnerHTML = replaceCharaterOfString(navTag.innerHTML, 0, '+');
        navTag.innerHTML = newInnerHTML;        
    }
    let childrenOfUl = document.getElementById(ul);
    childrenOfUl.style.display = 'inline-block';

    let newInnerHTML = aTag.innerHTML.replace('+', '-');
    aTag.innerHTML = newInnerHTML;
}

function replaceCharaterOfString(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}