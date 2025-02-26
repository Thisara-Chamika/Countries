
// const tblCountries = document.getElementById("tblCountries");

// let tableBody = `<tr>
//                     <th><h3><b>Name</b></h3></th>
//                     <th><h3><b>Flag</b></h3></th>
//                 </tr>` ;



// fetch("https://restcountries.com/v3.1/all")
// .then((res)=>res.json())
// .then(data=>{

//     data.forEach(element => {

//         tableBody+=`<tr>
//                         <td><h5>${element.name.common}</h5><br>
//                         <b>Official- Name</b>: ${element.name.official}<br>
//                         <b>Capital</b>: ${element.capital}<br>
//                         <b>Region</b>: ${element.region}<br>
//                         <b>Continents</b>: ${element.continents}<br>
//                         <b>Population</b>: ${element.population}<br>
//                          <a class="btn btn-primary" href="${element.maps.googleMaps}">View On Map</a>
//                         <td><img src="${element.flags.png}" alt=""></td>
//                     </tr>`
//         console.log(element.name.common);
//     });

//     tblCountries.innerHTML=tableBody;
// })