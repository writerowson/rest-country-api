const loadCounrty = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCounrty()
const displayCountries = countries => {
    const allcountriesHTML = countries.map(country => getCountryHTMl(country))
    // console.log(allcountriesHTML[0])
    const showCountries = document.getElementById('countries')
    showCountries.innerHTML = allcountriesHTML.join(' ')

}
const getCountryHTMl = country => {
    console.log(country.flags.png)
    return `
    <div class="country container">
    <h2>${country.name.common}</h2>
   <img src="${country.flags.png}">
    </div>
    `
}

