import { ui, camp } from "./ui.js";
import { requestApi } from "./api.js";

// Varialbes
let elCloseBanner =  document.querySelectorAll(".close-banner");
const navButtonMenu = document.querySelector('.nav-button-menu');
const menuNav = document.querySelector('.nav-menu');

let elFormSearch = document.querySelector('[for="searchCamp"]');
let inputSearchCampgrounds = document.querySelector('[name="searchCampground"]');
let elListCampground = document.querySelector('.listCampground');
let elOneCamp = document.querySelector('.elOneCamp');


navButtonMenu.addEventListener('click', () => {
  menuNav.classList.toggle('hidden');
});

// URL Page
var currentURL = window.location.href;

console.log(currentURL);
// EventListener

document.addEventListener('DOMContentLoaded', ()=>{  
    
  elCloseBanner.forEach(elHTML => {
    
    elHTML.addEventListener('click', (e) => {
      e.stopPropagation();

      let elClose = e.target.parentElement.parentElement;      
      elClose.remove();           
    });  
  });

  if(elFormSearch){
    elFormSearch.addEventListener('submit', (e) => {
      
      e.preventDefault();

      ui.formSearch(inputSearchCampgrounds.value);  

    });
  }
  
  if(currentURL.includes("search.html")){
    dataApi();
  } 

  if(currentURL.includes("camp.html")){
    
    let params = new URLSearchParams(window.location.search);    
    
    console.log(params.get("camp")); 
    ui.getOneCampground(params.get("camp"))

  }  

})

// Functions

async function dataApi(){    
  
  let dataAPI = await requestApi();

  await camp.saveCampgrounds(dataAPI);
  await camp.showCampgrounds();  

}



export {elListCampground, elOneCamp};