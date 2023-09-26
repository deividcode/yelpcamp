import { elListCampground, elOneCamp } from "./app.js";

const propertiesCamp = {
  id: "id",
  name: "name",

}

class Ui{
  
  addSpinner(el){

    let elSpinner = `
      <div class="loader"></div>
    `
    el.insertAdjacentHTML("beforeend", elSpinner);                 

  }

  removeChildElements(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }

  formSearch(text){

    console.log(text);
    ui.removeChildElements(elListCampground);    
    ui.addSpinner(elListCampground);

    let resultSearch = camp.searchCampground(text, propertiesCamp.name);

    ui.removeChildElements(elListCampground);              
    
    if(resultSearch.length === 0){
      let msjNotResult = `
        <span class="mx-0 my-auto text-center text-lg font-medium" style="color: rgb(156 163 175);">No results found for: ${text}</span>
      `;

      elListCampground.insertAdjacentHTML("beforeend", msjNotResult);                 

      return;
    }else{
      this.showCampgrounds(resultSearch);
    }

  }  

  showCampgrounds(data){          
    
    this.removeChildElements(elListCampground);

    data.forEach(campground => {
        
      const {id, name, description1, img} = campground;
      
      let elCard = `      
        <div class="flex flex-col justify-between px-4 py-4 border-2">
          <header>
            <img class="w-full h-full min-h-[170px] max-h-[170px] mb-3 rounded" src="${img}">
            <h2 class="mb-1 font-semibold">${name}</h2>
            <p class="mb-4 text-sm">${description1}</p>          
          </header>
          <a class="btn-secundary w-full text-center" href="/nested/camp.html?camp=${id}">View Campground</a>
        </div>
      `;

      elListCampground.insertAdjacentHTML("beforeend", elCard);           
    });
          
  }

  getOneCampground(valueId){
    let oneCamp = camp.searchCampground(valueId, propertiesCamp.id);
    
    this.showOneCampground(oneCamp);
    
  }

  showOneCampground(oneCamp){    
    console.log(oneCamp);

    const { name, description2, img, author, price, modalityType, ubicationCamp} = oneCamp[0];
    console.log(ubicationCamp);
        
    let elCamp = `

      <div class="grid gap-5 lg:gap-10 md:grid-cols-2 justify-items-center lg:justify-items-start pt-5 pb-2">
        <div class="md:order-1 flex flex-col justify-between px-4 lg:px-8 py-4 lg:py-8 border-2">
          <img class="w-full h-full min-h-h max-h-[220px] mb-3 rounded" src="${img}">    
          <header class="flex justify-between">
            <h2 class="mb-1 lg:text-lg font-semibold">${name}</h2>
            <span>$${price}/${modalityType}</span>
          </header>
          <blockquote>
            <p class="lg:text-sm2">${description2}</p>
            <footer class="mt-3">
              <cite class="text-sm2 text-gray-600">Submitted by ${author}</cite>
            </footer>
          </blockquote>              
        </div>         

        <div class="w-full min-h-[320px] max-w-md max-h-[340px] flex flex-col justify-between px-4 py-4 border-2">        
          <iframe class="w-full h-full" src="${ubicationCamp}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>            
    `
    elOneCamp.insertAdjacentHTML("beforeend", elCamp);           
  }

}

class Camp{
  arrCampground;  

  saveCampgrounds(data){        
    localStorage.setItem('arrayCamp', JSON.stringify(data));
  }
  
  searchCampground(value, typevalue){
    
    let patternReg = value.toString();     

    let arrCampground = JSON.parse(localStorage.getItem('arrayCamp'));

    const resultSearch = arrCampground.filter(obj => {  
      
      let {[typevalue]: value} = obj;
      
      let objReg = new RegExp(patternReg, "i");    

      if(objReg.test(value) === true){      
        return obj;            
      }       

    });

    return resultSearch

  }
  
}

const camp = new Camp();

const ui = new Ui();

export {ui, camp}
