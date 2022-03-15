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
// const getCountryHTMl = country => {
//     return `
//     <div class="country ">
//     <h2>${country.name.common}</h2>
//    <img src="${country.flags.png}">
//     </div>
//     `
// }
// const getCountryHTMl = (country) => {
//     // ?option o1
//     const { name, flags } = country
//     return `
//     <div class="country ">
//     <h2>${name.common}</h2>
//    <img src="${flags.png}">
//     </div>
//     `
// }
const getCountryHTMl = ({ name, flags, area, capital }) => {
    return `
    <div class="country ">
    <h2 title="This is a attribute">${name.common}</h2>
    <h4>Capital : ${capital}</h4>
    <p>Area : ${area}</p>
   <img src="${flags.png}">
    </div>
    `
}

