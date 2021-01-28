function displayElement(element){
    let childrenOfText = document.querySelector(".text").children;
    for(let i = 0 ; i < 7 ; i++){
        document.getElementById(childrenOfText[i].id).style.display = 'none';
    }
    let textSection = document.getElementById(element);
    textSection.style.display = 'block';
    let button = document.getElementById("menuButton2");
    button.style.background = '1b9bff';
    button.style.transition = '.5s';
}