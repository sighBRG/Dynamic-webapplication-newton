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