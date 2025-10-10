const citySearch = document.getElementsByClassName("city-search");
const cityInput = document.getElementById("cityInput")
const buttonOK = document.getElementById('buttonOK')
const cityDisplay = document.getElementById("city")
const gpsDisplay = document.getElementById("gps")
const temperature = document.getElementById("temperature")
const details = document.getElementById("details")


buttonOK.addEventListener("click", async (event) => {
    event.preventDefault();
    const city = cityInput.value;

    const coordinates = await fetchCoordinates(city);
    if (!coordinates) {
        gpsDisplay.innerText = "Aucune coordonnée trouvée pour cette ville.";
        return;
    }
    const{userLongitude, userLatitude} = coordinates
    cityDisplay.innerText = city
    gpsDisplay.innerText = `les coordonnées GPS sont ${userLongitude} et ${userLatitude}`
    temperature.innerText = await fetchWeather(userLatitude, userLongitude)
    details.innerText = "Heure actuelle"

})



async function fetchCoordinates(city){
    try{
        const responseCoord = await fetch (`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);
        if (!responseCoord.ok) throw new Error("Erreur lors de la récupération")
        const dataCoord = await responseCoord.json();

        console.log(dataCoord)


        const userLongitude = dataCoord[0].lon;
        const userLatitude = dataCoord[0].lat;
       

         return { userLatitude, userLongitude };
    
    } catch (error) {
        console.error("Erreur :", error);
}
}
// fetchCoordinates('Montpellier')

async function fetchWeather(userLatitude, userLongitude){
    try{
        const responseWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${userLatitude}&longitude=${userLongitude}&hourly=temperature_2m&models=meteofrance_seamless`) 
        if (!responseWeather.ok) throw new Error("Erreur lors de la récupération");
        const dataWeather = await responseWeather.json();
        
        const temperatures = dataWeather.hourly.temperature_2m;
        return `${temperatures[0]} °C`

   
    }

    catch (error){
        console.error("Erreur :", error);

    }
}