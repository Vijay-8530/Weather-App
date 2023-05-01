const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data, IsDayTime) => {
    // destructure properties
    const { cityDets, weather } = data
    // const cityDets = data.cityDets
    // const weather = data.weathers
    // update details templets

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;</span>
                </div>
                </div>`
    // update the night / day img & icon img

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    // let timeSrc = null
    // if (weather.IsDayTime) {
    //     console.log(weather.IsDayTime);
    //     timeSrc = "img/day.svg"
    //     console.log(timeSrc);
    // }
    // else {
    //     timeSrc = 'img/night.svg'
    // }

    let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg"
    time.setAttribute('src', timeSrc)



    // remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

const upDateCity = async (city) => {
    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets?.Key)

    return { cityDets, weather }


}

cityForm.addEventListener('submit', (e) => {
    // prevent defefault action
    e.preventDefault()

    // get city value 

    const city = cityForm.city.value.trim()
    cityForm.reset()
    // update the ui with new city
    upDateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))

})