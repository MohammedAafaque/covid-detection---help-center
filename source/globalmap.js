function updateMap() {
    url = "https://corona.lmao.ninja/v2/countries";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        data.forEach(element => {
            latitude = element.countryInfo.lat;
            longitude = element.countryInfo.long;

            cases = element.cases;
            if (cases>1500000){
                color = "rgb(255, 0, 0)";
            }
            else{
                cases = (cases/1500000)*255;
                color = `rgb(${cases}, 0, 0)`;
            }

            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}

updateMap();

let interval = 120000;
setInterval(updateMap, interval);