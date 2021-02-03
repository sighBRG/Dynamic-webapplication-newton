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
for(let i = 0 ; i < 10 ; i++){
let section = fillAnnoucementInfo('Javautvecklare söks', 'Newton', '2021-02-22', 'Newton@skola.se', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et porta nisl. Aenean maximus erat eu finibus tempor. Duis eu porttitor ligula. Aliquam mattis urna vitae enim ultricies, sagittis varius justo ornare. Curabitur lorem lorem, ullamcorper sit amet laoreet non, faucibus in lorem. Phasellus a ex suscipit, semper est quis, vestibulum metus. Curabitur sit amet accumsan eros. Aenean faucibus dui vel tortor consectetur hendrerit. Curabitur ornare condimentum nulla eu tempus. Aliquam erat volutpat. Nulla sed magna convallis, rutrum nisl sit amet, mattis erat. Suspendisse mollis pulvinar sapien, eu iaculis lacus congue in. Aenean ultrices urna eu felis feugiat porta. Maecenas libero purus, iaculis at luctus ac, varius in felis.');

announcements.insertBefore(section, announcements.firstChild);
};

// splitting down all anncouncements into one page for every 5 announcements 



console.log(announcements);

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