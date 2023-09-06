import { ui, camp } from "./ui.js";
import { requestApi } from "./api.js";

// Varialbes
let elCloseBanner =  document.querySelectorAll(".close-banner");
const navButtonMenu = document.querySelector('.nav-button-menu');
const menuNav = document.querySelector('.nav-menu');

let elFormSearch = document.querySelector('[for="searchCamp"]');
let inputSearchCampgrounds = document.querySelector('[name="searchCampground"]');
let elListCampground = document.querySelector('.listCampground');


navButtonMenu.addEventListener('click', () => {
  menuNav.classList.toggle('hidden');
});

// URL Page
var currentURL = window.location.href;

// EventListener
window.addEventListener('load', ()=>{
  
  elCloseBanner.forEach(elHTML => {
    
    elHTML.addEventListener('click', (e) => {
      e.stopPropagation();

      let elClose = e.target.parentElement.parentElement;      
      elClose.remove();           
    });  
  });

  elFormSearch.addEventListener('submit', searchCampground);
  
  if(currentURL.includes("search.html")){
    dataApi();
  } 

})


// Functions
function searchCampground(e){
  e.preventDefault();

  camp.searchCampground(inputSearchCampgrounds.value);    

}

async function dataApi(){    
  
  let dataAPI = await requestApi();

  camp.saveCampgrounds(dataAPI)
  camp.showCampgrounds(dataAPI);  
}



export {elListCampground};