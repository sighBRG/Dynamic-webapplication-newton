// screen height
let screenHeight = screen.availHeight;
document.getElementsByTagName("body")[0].style.minHeight = screenHeight - 10  +"px";

// navigation
function displayNavContents(ul, section){
    let allUls = document.getElementsByTagName('ul');
    let aTag = document.getElementById(section);
    let ulTag = document.getElementById(ul);

    if(ulTag.style.display == 'inline-block'){
        ulTag.style.display = 'none';
        let newInnerHTML = aTag.innerHTML.replace('-', '+');
        aTag.innerHTML = newInnerHTML;
    }else{
        for(let i = 0 ; i < allUls.length ; i++){
            allUls[i].style.display = 'none';
            
            let navTag = document.getElementById('navTag'+ (i + 1));
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


// Pagination
let announcements = document.getElementsByClassName("announcements")[0];

// adding some dummy data
for(let i = 0 ; i < 18 ; i++){
let section = fillAnnoucementInfo((i+1) + '. Javautvecklare söks', 'Newton', '2021-02-22', 'Newton@skola.se', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et porta nisl. Aenean maximus erat eu finibus tempor. Duis eu porttitor ligula. Aliquam mattis urna vitae enim ultricies, sagittis varius justo ornare. Curabitur lorem lorem, ullamcorper sit amet laoreet non, faucibus in lorem. Phasellus a ex suscipit, semper est quis, vestibulum metus. Curabitur sit amet accumsan eros. Aenean faucibus dui vel tortor consectetur hendrerit. Curabitur ornare condimentum nulla eu tempus. Aliquam erat volutpat. Nulla sed magna convallis, rutrum nisl sit amet, mattis erat. Suspendisse mollis pulvinar sapien, eu iaculis lacus congue in. Aenean ultrices urna eu felis feugiat porta. Maecenas libero purus, iaculis at luctus ac, varius in felis.');
section.style.display = 'none';
announcements.insertBefore(section, announcements.firstChild);
};

// splitting down all anncouncements into one page for every 5 announcements
for(let i = 0 ; i < 5 ; i++){
    announcements.children[i].style.display = 'block';
}

var page = parseInt(document.getElementById("page").innerHTML);

function pageReference(page){
    let leftArrow = document.getElementById("btn_prev");
    let rightArrow = document.getElementById("btn_next");
    if(page == 1) {
        leftArrow.style.visibility = 'hidden';
    }else if(page == Math.ceil(announcements.getElementsByTagName("section").length / 5) ){
        rightArrow.style.visibility = 'hidden';
    }
    else{
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
    }
}

function getFirstIndexOfBlock(){
    var firstIndexOfBlock;
    for(firstIndexOfBlock = 0 ; firstIndexOfBlock < announcements.getElementsByTagName("section").length ; firstIndexOfBlock++){
    if(announcements.children[firstIndexOfBlock].style.display == 'block'){
        break;
        }
    }
    return firstIndexOfBlock;
}

function browseNext(){
    var firstOccurence = getFirstIndexOfBlock();
    for(let i = 0; i < 5; i++){
        announcements.children[i + firstOccurence].style.display = 'none';
        if(announcements.children[i + firstOccurence + 5]){
        announcements.children[i + firstOccurence + 5].style.display = 'block';
        }
    }

    page++;
    document.getElementById("page").innerHTML = page;
    console.log(announcements);
    pageReference(page);
} 

function browsePrevious(){
    var firstOccurence = getFirstIndexOfBlock();
    console.log(firstOccurence);
    for(let i = 0; i < 5; i++){
        if(announcements.getElementsByTagName("section")[i + firstOccurence]){
            announcements.getElementsByTagName("section")[i + firstOccurence].style.display = 'none';
        }
        announcements.children[i + firstOccurence - 5].style.display = 'block';
        
    }

    page--;
    document.getElementById("page").innerHTML = page;
    pageReference(page);
} 

// creates a section element for announcement
function createAnnouncementsSection(){
    let section = document.createElement('section');
    let title = document.createElement('h3');
    let span = document.createElement('span');
    let paragraph = document.createElement('p');
    let company = document.createElement('h5');
    let deadline = document.createElement('h5');
    let email = document.createElement('h5');

    section.appendChild(title);
    span.appendChild(company);
    span.appendChild(deadline);
    span.appendChild(email);
    section.appendChild(span);
    section.appendChild(paragraph);
    return section;
}

// fill in the announcement
function fillAnnoucementInfo(title, company, deadline, email, description){
    let section = createAnnouncementsSection();
    section.firstChild.innerHTML = title;
    section.children[1].firstChild.innerHTML = 'Företag: '+ company;
    section.children[1].children[1].innerHTML = 'Utgångsdatum: '+ deadline;
    section.children[1].children[2].innerHTML = 'Mejladress: '+ email;
    section.lastChild.innerHTML = description;
    return section;
}