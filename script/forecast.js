const key = 'qsqc0y3JDmdDpFccFYH1K9Kk9daqeui1'

// get weather information
const getWeather = async (id) => {
    console.log(id)
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};



// get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    console.log(response);
    const data = await response.json()
    console.log(data);

    return data[0]
}

// getCity('manchester')
//     .then(data => {
//         return getWeather(data.key)
//     }).then(data => {
//         console.log(data)
//     })
//     .catch((err) => { console.log(err) })