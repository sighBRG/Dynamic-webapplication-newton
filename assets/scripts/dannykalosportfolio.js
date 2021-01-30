$(window).resize(function() {
    let icon = document.getElementById("icon");
    let mobileNumber = document.getElementById("mobileNumber");
    if(window.innerWidth < 670){
        let aTag = document.createElement('a');
        aTag.innerHTML = icon.outerHTML;
        aTag.href = '0736679360';
        aTag.id = 'aTagAdded';
        icon.parentNode.insertBefore(aTag, icon);
        icon.remove();
        aTag.remove();
    }
    if(window.innerWidth > 669){
        let tagAdded = document.getElementById("aTagAdded");
        console.log(tagAdded);
        if(tagAdded){
        tagAdded.remove();
        console.log(tagAdded);
        }
    }
});
function displayElement(text, menuButton){
    let childrenOfText = document.querySelector(".text").children;
    for(let i = 0 ; i < 7 ; i++){
        document.getElementById(childrenOfText[i].id).style.display = 'none';
        document.getElementById("menuButton"+(i+1)).style.background = 'none';
    }
    let textSection = document.getElementById(text);
    textSection.style.display = 'block';
    let buttonSelected = document.getElementById(menuButton);
    buttonSelected.style.background = 'dodgerblue';
}