// Foursquare API Info
const clientId = '';
const clientSecret = '';
const url = '';

// OpenWeather Info
const openWeatherKey = '0829eaba0973a6a3efb55cafb293ae93';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city=$input.val();
    const urlToFetch=`${url}${city}&limin=5&client_id=${clientId}&client_secret=${clientSecret}&v=20230527`;
    try{
        const response= await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse= await response.json();
            const venues= jsonResponse.response.groups[0].items.map(item=>item.venue);
            return venues;
        }
    }
    catch{
        console.log(error);
    }
}

const getForecast = async () => {
    const urlToFetch= `${weatherUrl}?&q=${input.val()}&APPID=${openWeatherKey}`;
    try{
        const response= await fetch(urlToFetch);
        if(response.ok)
        {
            const jsonResponse= await response.json();
            return jsonResponse;
        }
    }
    catch(error){
        console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue=venues[index];
    const venueIcon=venue.categories[0].icon;
    const venueImgSrc=`${venueIcon.prefix}bg_64${venueIcon.suffix}`;

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = createWeatherHTML;
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)