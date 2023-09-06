const URL_API = "http://localhost:3000/campground/";

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