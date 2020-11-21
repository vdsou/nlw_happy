
const map = L.map('mapid').setView([-8.0239515,-35.0023675], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}
).addTo(map);


const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [68, 68],
    iconAnchor: [22, 94],
    popupAnchor: [200, -20]
});

function addMarker({id, name, lat, lng}){
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240                                   
    }).setContent(`${name}  <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"</a>`);
    
    
    L
    .marker([lat, lng], {icon})
    .bindPopup(popup)
    .addTo(map)
}

const orphanageSpans = document.querySelectorAll("#mapid span");
    orphanageSpans.forEach(span => {
        const orphanage = {
            id: span.dataset.id,
            name: span.dataset.name,
            lat: span.dataset.lat,
            lng: span.dataset.lng
        }
        addMarker(orphanage);
    }
    );
