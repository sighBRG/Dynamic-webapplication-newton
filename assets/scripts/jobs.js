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


/*############## pagination ##############*/ 
let announcements = document.getElementsByClassName("announcements")[0];
var sections = announcements.getElementsByTagName("section");
var announcementsPerPage = 5;
var searchResultIdArray = [];
var page = parseInt(document.getElementById("page").innerHTML);
var pageElement = document.getElementById("page");


// adding some dummy data
for(let i = 0 ; i < 21 ; i++){
    let section = fillAnnoucementInfo((i+1) + '. Javautvecklare söks', 'Newton', '2021-02-22', 'Newton@skola.se', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et porta nisl. Aenean maximus erat eu finibus tempor. Duis eu porttitor ligula. Aliquam mattis urna vitae enim ultricies, sagittis varius justo ornare. Curabitur lorem lorem, ullamcorper sit amet laoreet non, faucibus in lorem. Phasellus a ex suscipit, semper est quis, vestibulum metus. Curabitur sit amet accumsan eros. Aenean faucibus dui vel tortor consectetur hendrerit. Curabitur ornare condimentum nulla eu tempus. Aliquam erat volutpat. Nulla sed magna convallis, rutrum nisl sit amet, mattis erat. Suspendisse mollis pulvinar sapien, eu iaculis lacus congue in. Aenean ultrices urna eu felis feugiat porta. Maecenas libero purus, iaculis at luctus ac, varius in felis.');
    section.setAttribute("id", i);
    section.style.display = 'none';
    announcements.insertBefore(section, announcements.firstChild);
};

// splitting down all anncouncements into one page for every 5 announcements
function displayFirstPage(){
    for(let i = 0 ; i < sections.length ; i++){
        sections[i].style.display = 'none';
    }
    for(let i = 0 ; i < announcementsPerPage ; i++){
        sections[i].style.display = 'block';
    }
    page = 1
    document.getElementById("page").innerHTML = page;
    pageReference(page);
}

displayFirstPage();

// search feature
function searchJob(){
    let searchKey = document.getElementById("searchKey").value.toUpperCase();
    let title ;
    searchResultIdArray = []; // empty array on every new search
    if(!searchKey){
        displayNone();
        displayFirstPage();
    }else{
        page = 1;
        document.getElementById("page").innerHTML = page;
        for (i = 0; i < sections.length; i++) {
            title = sections[i].firstChild.innerHTML.toUpperCase();

            if (title.indexOf(searchKey) > -1) {
                searchResultIdArray.push(sections[i]);
            } 
        }
        displaySearchResult();
    }
}

// display search results
function displaySearchResult(){
    displayNone();
    if( searchResultIdArray.length <= announcementsPerPage){
        for(let i = 0 ; i < searchResultIdArray.length ; i++){
           searchResultIdArray[i].style.display = 'block';
        }
    }else{
        for(let i = 0 ; i < announcementsPerPage ; i++){
            searchResultIdArray[i].style.display = 'block';
         }
    }
    pageReferenceSearchResult(page);  
}

// set all sections to display none
function displayNone(){
    for(let i = 0 ; i < sections.length ; i++){
        sections[i].style.display = 'none';
    }
    
}

// paginantion
function pageReference(page){
    let leftArrow = document.getElementById("btn_prev");
    let rightArrow = document.getElementById("btn_next");
    console.log("page "+ page);
    if(page == 1) {
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'visible';
        pageElement.style.visibility = 'visible';
    }else if(page == Math.ceil(sections.length / announcementsPerPage) ){
        rightArrow.style.visibility = 'hidden';
        leftArrow.style.visibility = 'visible';
        pageElement.style.visibility = 'visible';
    }
    else{
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        pageElement.style.visibility = 'visible';
    }
    
}

function pageReferenceSearchResult(page){
    let leftArrow = document.getElementById("btn_prev");
    let rightArrow = document.getElementById("btn_next");
    console.log("searchPage "+page);
    if(searchResultIdArray.length <= announcementsPerPage){
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'hidden';
        pageElement.style.visibility = 'hidden';
    }else if(searchResultIdArray.length > announcementsPerPage && page == 1){
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'visible';
        pageElement.style.visibility = 'visible';
    }else if(page == Math.ceil(searchResultIdArray.length / announcementsPerPage) ){
        rightArrow.style.visibility = 'hidden';
        leftArrow.style.visibility = 'visible';
        pageElement.style.visibility = 'visible';
    }else{
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        pageElement.style.visibility = 'visible';
    }

}

function getFirstIndexOfBlock(sections){
    var firstIndexOfBlock;
    for(firstIndexOfBlock = 0 ; firstIndexOfBlock < sections.length ; firstIndexOfBlock++){
    if(sections[firstIndexOfBlock].style.display == 'block'){
        break;
        }
    }
    return firstIndexOfBlock;
}

function browseNext(){
    let firstOccurence = getFirstIndexOfBlock(sections);
    let firstOccurenceSearchResult = getFirstIndexOfBlock(searchResultIdArray);
    page++;
    document.getElementById("page").innerHTML = page;
    if(searchResultIdArray.length != 0){
        for(let i = 0; i < announcementsPerPage; i++){
            searchResultIdArray[i + firstOccurenceSearchResult].style.display = 'none';
            if(searchResultIdArray[i + firstOccurenceSearchResult + announcementsPerPage]){
                searchResultIdArray[i + firstOccurenceSearchResult + announcementsPerPage].style.display = 'block';
            }
        }
        pageReferenceSearchResult(page);
    }else{
        for(let i = 0; i < announcementsPerPage; i++){
            sections[i + firstOccurence].style.display = 'none';
            if(sections[i + firstOccurence + announcementsPerPage]){
                sections[i + firstOccurence + announcementsPerPage].style.display = 'block';
            }
        }
        pageReference(page);
    }

} 

function browsePrevious(){
    var firstOccurence = getFirstIndexOfBlock(sections);
    let firstOccurenceSearchResult = getFirstIndexOfBlock(searchResultIdArray);
    page--;
    document.getElementById("page").innerHTML = page;
    if(searchResultIdArray.length != 0){
        for(let i = 0; i < announcementsPerPage; i++){
            if(searchResultIdArray[i + firstOccurenceSearchResult]){
                searchResultIdArray[i + firstOccurenceSearchResult].style.display = 'none';
            }
            searchResultIdArray[i + firstOccurenceSearchResult - announcementsPerPage].style.display = 'block';
        }
        pageReferenceSearchResult(page);
    }else{
        for(let i = 0; i < announcementsPerPage; i++){
            if(sections[i + firstOccurence]){
                sections[i + firstOccurence].style.display = 'none';
            }
                sections[i + firstOccurence - announcementsPerPage].style.display = 'block';
            
        }
        pageReference(page);
    }
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