function searchbtn() {
    const countryName = document.getElementById("country-name").value;
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => res.json())
.then(data => {
        displayCountryInfo(data);
        data.forEach(element => {

            `<img src="${element.flags.png}" id="flag-img">
                <p id="name">${element.name.common}</p>
                <p id="officialName">${element.name.official}</p>
                <p id="region">${element.region}</p>
                <p id="population">${element.population}</p>
            ` 

            console.log(element.name.common);
        });
    });
}

function displayCountryInfo(data) {
    const body = document.getElementById("card-body");
    body.innerHTML = ""; // Clear previous results

    data.forEach(element => {
        body.innerHTML += `
            <img src="${element.flags.png}" id="flag-img">
            <p id="name">${element.name.common}</p>
            <p id="officialName">${element.name.official}</p>
            <p id="region">${element.region}</p>
            <p id="population">${element.population}</p>
        `;
    });
}


// fetch("https://restcountries.com/v3.1/all")
// .then((res)=>res.json())
// .then(data=>{

    
    
// })