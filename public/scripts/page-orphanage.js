const options = {
  dragging: false,
  zoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;
const map = L.map("mapid", options).setView([lat, lng], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [68, 68],
  iconAnchor: [22, 94],
  popupAnchor: [200, -20],
});



L.marker([lat, lng], { icon }).addTo(map);

// image galery

function selectImage(event) {
  const button = event.currentTarget;
  const buttons = document.querySelectorAll(".images button");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  button.classList.add("active");

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img ");
  imageContainer.src = image.src;
}
