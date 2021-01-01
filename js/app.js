/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// create li dynamically on loading the page
document.body.onload = addLi;
function addLi(){
    const navBar = document.querySelector("#navbar__list");
    let section = document.getElementsByTagName("section");
    for (let i = 1 ; i <= section.length ; i++){
        const navbar_li = document.createElement("li");
        const navbar_a = document.createElement("a");
        let sectionId = section[i-1].id;
        navbar_a.href= "#" + sectionId;  
        navbar_a.innerHTML = "Section" + i;  
        if ( i == 1){
            navbar_li.className = 'list active';
        }else {
        navbar_li.className = 'list';
        }
        navbar_li.id = 'current';
        navbar_a.id = 'first';


        // add "active" class to the menu after click on it 

        navbar_li.onclick = function (){
            let navs = document.getElementsByClassName("list");
            let content = document.getElementsByClassName("content");
            for (let j = 0 ; j < content.length ; j++){
                content[j].classList.remove("active"); 
            }
            document.getElementById(sectionId).className += " " + "active";

            for (let index = 0; index < navs.length; index++) {
                navs[index].classList.remove("active"); 
            }
            navbar_li.classList.add("active");
        }
        
// making scroll smoothly to the section
        let anchorSelector = 'a[href^="#"]'; 
      
        // Collect all such anchor links 
        let anchorList =  
            document.querySelectorAll(anchorSelector); 
          
        // Iterate through each of the links 
        anchorList.forEach(link => { 
            link.onclick = function (e) { 
        
                // Prevent scrolling if the 
                // hash value is blank 
                e.preventDefault(); 
          
                // Get the destination to scroll to 
                // using the hash property 
                let destination =  
                    document.querySelector(this.hash); 
          
                // Scroll to the destination using 
                // scrollIntoView method 
                destination.scrollIntoView({ 
                    behavior: 'smooth' ,
                }); 
            } 
        }); 
        

        navbar_li.appendChild(navbar_a);
        navBar.appendChild(navbar_li);

    }

}


// add "current" class to the div which is in the viewport

let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
window.addEventListener('scroll', function (event) {
    let divs = document.getElementsByTagName("div");
for(let i = 0; i < divs.length; i++){
   
	if (isInViewport(divs[i])) {
		divs[i].className = "current";
	}else {
		divs[i].className = "";
    }
}
});


/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


