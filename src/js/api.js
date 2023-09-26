// const URL_API = "http://localhost:3000/campground/";

const URL_API = '/.netlify/functions/functions';

async function requestApi() {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();    
    
    // Haz algo con los datos.
    return data;          

  } catch (error) {
    // Maneja el error.
    console.error(error);
  }
}

export {requestApi}



