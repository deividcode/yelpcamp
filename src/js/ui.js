import { elListCampground } from "./app.js";

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
}

class Camp{
  arrCampground;  

  saveCampgrounds(data){
    this.arrCampground = data;
  }

  showCampgrounds(data){          
    
    ui.removeChildElements(elListCampground);

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

  searchCampground(text){
    console.log(text);
    ui.removeChildElements(elListCampground);    
    ui.addSpinner(elListCampground);

    let patternReg = text;     

    const resultSearch = this.arrCampground.filter(obj => {  
      
      let {name} = obj;

      let objReg = new RegExp(patternReg, "i");    

      if(objReg.test(name) === true){      
        return obj;            
      }       

    });

    ui.removeChildElements(elListCampground);        

    if(resultSearch.length === 0){
      let msjNotResult = `
        <span class="mx-0 my-auto text-center text-lg font-medium" style="color: rgb(156 163 175);">No results found for: ${text}</span>
      `;

      elListCampground.insertAdjacentHTML("beforeend", msjNotResult);                 

      return;
    }
      
    this.showCampgrounds(resultSearch);

  }
  
}


const camp = new Camp();

const ui = new Ui();

export {ui, camp}
