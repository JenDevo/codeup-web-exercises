"use strict";

function geoCodeBuilder(searchString) {

    // Mapbox code goes below not weather key
    // Code below is for using search bar to render data
    geocode(searchString, mapKey).then(function (results) {
        // BELOW: Calls back previous marker to move when searched.
        let myOptionsObj = {
            center: results,
            zoom: 13
        };
        map.flyTo(myOptionsObj);
        marker.setLngLat(results)

        // Get information from open weather API
        $.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`).done(function (data) {

            let html = "<div class='row d-flex justify-content-around'>";

            for (let i = 0; i <= 39; i += 8) {

                html += `<div class="card-decor col-md-3"><div class="date-header" ><p>${data.list[i].dt_txt}</p></div>`

                html += `<div class="d-flex justify-content-center" >`

                html += `<h6 class="pt-2" >${data.list[i].main.temp_max}&deg / ${data.list[i].main.temp_min}&deg</h6>`;

                html += `</div>`

                html += `<div class="d-flex justify-content-center hiLoImg">`

                html += `<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" class="align-content-center" >`

                html += `</div>`

                html += `<div class="border" >Description: <strong>${data.list[i].weather[0].description}</strong></div>`;

                html += `<div class="border" >Humidity: <strong>${data.list[i].main.humidity} %</strong></div>`;

                html += `<div class="border" >Wind: <strong>${data.list[i].wind.speed} MPH</strong></div>`;

                html += `<div>Pressure: <strong>${data.list[i].main.pressure}</strong></div></div>`;

            }
            html += "</div>"
            $("#weatherBody").html(html);

            // BELOW: Top right corner where city is displayed
            let city = "";
            city += `<h6>Current Location: ${data.city.name}</h6>`;
            $("#currentCity").html(city)
        })
    })
}

<!--    Create Map   -->
mapboxgl.accessToken = mapKey;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [-98.4946, 29.4252],
    zoom: 9,
});

// Create marker... return draggable true for marker to be movable
const marker = new mapboxgl.Marker({
    draggable: true
});
marker.setLngLat([-98.4946, 29.4252]);
marker.addTo(map);

// Code below is for using marker to render data

marker.on('dragend', function (e) {
    let lonLat = e.target._lngLat;
    reverseGeocode({lat: lonLat.lat, lng: lonLat.lng}, mapKey).then(function (results) {
        console.log(results)

        geocode(results, mapKey).then(function (results) {

            let myOptionsObj = {
                center: results,
                zoom: 13
            };
            map.flyTo(myOptionsObj);
            marker.setLngLat(results)

            $.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`).done(function (data) {

                let html = "<div class='row d-flex justify-content-between'>";

                for (let i = 0; i <= 39; i += 8) {

                    html += `<div class="card-decor col-2"><div class="date-header" ><p>${data.list[i].dt_txt}</p></div>`

                    html += `<div class="d-flex justify-content-center" >`

                    html += `<h6 class="pt-2" >${data.list[i].main.temp_max}&deg / ${data.list[i].main.temp_min}&deg</h6>`;

                    html += `</div>`

                    html += `<div class="d-flex justify-content-center hiLoImg">`

                    html += `<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" class="align-content-center" >`

                    html += `</div>`

                    html += `<div class="border" >Description: <strong>${data.list[i].weather[0].description}</strong></div>`;

                    html += `<div class="border" >Humidity: <strong>${data.list[i].main.humidity} %</strong></div>`;

                    html += `<div class="border" >Wind: <strong>${data.list[i].wind.speed} MPH</strong></div>`;

                    html += `<div>Pressure: <strong>${data.list[i].main.pressure}</strong></div></div>`;

                }
                html += "</div>"
                $("#weatherBody").html(html);

                // BELOW: Top right corner where city is displayed
                let city = "";
                city += `<h6>Current Location: ${data.city.name}</h6>`;
                $("#currentCity").html(city)
            })
        })
    })
})

// BELOW: Button for search bar functionality
$("#myBtn").click(function (e) {
    e.preventDefault()
    geoCodeBuilder($("#searchInput").val())
})

geoCodeBuilder("San Antonio, TX");