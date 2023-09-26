// const URL_API = "http://localhost:3000/campground/";

const URL_API = 'https://deividcode-yelpcamp.netlify.app/.netlify/functions/campground';

async function requestApi() {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    // Haz algo con los datos.
    console.log(data);
    return data;          

  } catch (error) {
    // Maneja el error.
    console.error(error);
  }
}

export {requestApi}



