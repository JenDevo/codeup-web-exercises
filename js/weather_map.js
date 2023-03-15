"use strict";

function geoCodeBuilder(searchString) {

    // Mapbox code goes below not weather key

    geocode(searchString, mapKey).then(function (results) {
        // BELOW: Calls back previous marker to move when searched.
        let myOptionsObj = {
            center: results,
            zoom: 13
        };
        map.flyTo(myOptionsObj);
        marker.setLngLat(results)

        // Get information from open weather API
        $.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`).done(function (data){

            let html = "<div class='row d-flex justify-content-between'>";

            for (let i = 0; i <= 39; i += 8) {

                html += `<div class="card-decor col-2"><div class="date-header" ><p>${data.list[i].dt_txt}</p></div>`


                html += `<div class="d-flex justify-content-center" >`

                html += `<h6 class="" >High: ${data.list[i].main.temp_max}&deg / Low: ${data.list[i].main.temp_min}&deg</h6>`;

                html += `</div>`

                html += `<div class="d-flex justify-content-center" >`

                html += `<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" class="align-content-center" >`

                html += `</div>`


                html += `<br><span>Description: <strong>${data.list[i].weather[0].description}</strong></span><br>`;

                html += `<span>Humidity: <strong>${data.list[i].main.humidity} %</strong></span><br>`;

                html += `<span>Wind: <strong>${data.list[i].wind.speed} MPH</strong></span><br>`;

                html += `<span>Pressure: <strong>${data.list[i].main.pressure}</strong></span></div>`;

            }
            html += "</div>"
            $("#weatherBody").html(html);

            // BELOW: Top right corner where city is displayed
            let city ="";
            city += `<h6>Current Location: ${data.city.name}</h6>`;
            $("#currentCity").html(city)
        })
    })
}

<!--    Create Map   -->
mapboxgl.accessToken = mapKey;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.4946, 29.4252],
    zoom: 9,
});

// Create marker... return draggable true for marker to be movable
const marker = new mapboxgl.Marker({
    draggable: true
});
marker.setLngLat([-98.4946, 29.4252]);
marker.addTo(map);


marker.on('dragend', function (e){
    let lonLat = e.target._lngLat;
    reverseGeocode({lat: lonLat.lat, lng:lonLat.lng}, mapKey).then(function(results){
        console.log(results)

        geocode(results, mapKey).then(function (results) {

            let myOptionsObj = {
                center: results,
                zoom: 11
            };
            map.flyTo(myOptionsObj);
            marker.setLngLat(results)

            $.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`).done(function (data){

                let html = "<div class='row d-flex justify-content-evenly'>";

                for (let i = 0; i <= 39; i += 8) {

                    html += `<div class="card-decor col-2"><div class="date-header" ><p>${data.list[i].dt_txt}</p></div>`

                    html += `<h6 class="" >High: ${data.list[i].main.temp_max}&deg / Low: ${data.list[i].main.temp_min}&deg</h6>`;

                    html += `<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" class="align-content-center" >`

                    html += `<br><span>Description: ${data.list[i].weather[0].description}</span><br>`;

                    html += `<span>Humidity: ${data.list[i].main.humidity} %</span><br>`;

                    html += `<span>Wind: ${data.list[i].wind.speed} MPH</span><br>`;

                    html += `<span>Pressure: ${data.list[i].main.pressure}</span></div>`;

                }
                html += "</div>"
                $("#weatherBody").html(html);

                // BELOW: Top right corner where city is displayed
                let city ="";
                city += `<h6>Current Location: ${data.city.name}</h6>`;
                $("#currentCity").html(city)
            })
        })
    })
})

// BELOW: Button for search bar functionality
$("#myBtn").click(function(e){
    e.preventDefault()
    geoCodeBuilder($("#searchInput").val())
})

geoCodeBuilder("San Antonio, TX");