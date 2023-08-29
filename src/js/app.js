// Varialbes
let elFormSearch = document.querySelector('[for="searchCamp"]');

console.log(elFormSearch);
// EventListener
elFormSearch.addEventListener('submit', searchCampground);


function searchCampground(e){
  e.preventDefault();

  let inputSearchCampgrounds = document.querySelector('[name="searchCampground"]');

  console.log(inputSearchCampgrounds.value);


}