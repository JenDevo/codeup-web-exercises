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

            let html = "<div class='row'>";

            for (let i = 0; i <= 39; i += 8) {

                html += `<div class="card-decor col-2"><div class="date-header" ><p>${data.list[i].dt_txt}</p></div>`

                html += `<h6>High: ${data.list[i].main.temp_max}&deg / Low: ${data.list[i].main.temp_min}&deg</h6>`;

                html += `<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`

                html += `<p>Description: ${data.list[i].weather[0].description}</p>`;

                html += `<p>Humidity: ${data.list[i].main.humidity} %</p>`;

                html += `<p>Wind: ${data.list[i].wind.speed} MPH</p>`;

                html += `<p>Pressure: ${data.list[i].main.pressure}</p></div>`;

            }
            html += "</div>"
            $("#weatherBody").html(html);

            // BELOW: Top right corner where city is displayed
            let city ="";
            city += `<h4>Current Location: ${data.city.name}</h4>`;
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

                let html = "<div class='row'>";

                for (let i = 0; i <= 39; i += 8) {

                    html += `<div class="card-decor col-2"><div class="date-header" ><p>${data.list[i].dt_txt}</p></div>`

                    html += `<h6>High: ${data.list[i].main.temp_max}&deg / Low: ${data.list[i].main.temp_min}&deg</h6>`;

                    html += `<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`

                    html += `<p>Description: ${data.list[i].weather[0].description}</p>`;

                    html += `<p>Humidity: ${data.list[i].main.humidity} %</p>`;

                    html += `<p>Wind: ${data.list[i].wind.speed} MPH</p>`;

                    html += `<p>Pressure: ${data.list[i].main.pressure}</p></div>`;

                }
                html += "</div>"
                $("#weatherBody").html(html);

                // BELOW: Top right corner where city is displayed
                let city ="";
                city += `<h4>Current Location: ${data.city.name}</h4>`;
                $("#currentCity").html(city)
            })
        })
    })
})

$("#myBtn").click(function(e){
    e.preventDefault()
    geoCodeBuilder($("#searchInput").val())
})

