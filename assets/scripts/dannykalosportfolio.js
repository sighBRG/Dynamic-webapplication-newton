function displayElement(text, menuButton){
    let childrenOfText = document.querySelector(".text").children;

    for(let i = 1 ; i < childrenOfText.length ; i++){
        document.getElementById(childrenOfText[i - 1].id).style.display = 'none';
        document.getElementById("menuButton"+(i)).style.background = 'none';
    }
    let textSection = document.getElementById(text);
    textSection.style.display = 'block';
    let buttonSelected = document.getElementById(menuButton);
    buttonSelected.style.background = 'dodgerblue';
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("mobileIconTag").href = "0046736679360";
}else{
    document.getElementById("mobileIconTag").href = "#";
}