const map = L.map("mapid").setView([-8.0239515, -35.0023675], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [68, 68],
  iconAnchor: [22, 94],
});
let marker;
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  marker && map.removeLayer(marker);
  marker = L.marker([lat, lng], { icon }).addTo(map);
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
});

let i = 1;
function addPhotoField() {
  const imageContainer = document.querySelector("#images");

  const imageFields = document.querySelectorAll(".new-upload");

  const fieldClone = imageFields[imageFields.length - 1].cloneNode(true);

  if (fieldClone.children[0].value !== "") {
    fieldClone.children[0].value = "";
    imageContainer.appendChild(fieldClone);
  }

  i++;
}
let j = 0;
function removeField(event) {
  const imageFields = document.querySelectorAll(".new-upload");
  const btn = event.currentTarget;
  if (imageFields.length > 1) {
    btn.parentNode.remove();
  }
  btn.parentNode.children[0].value = "";
}

function selectOp(event) {
  const btn = document.querySelectorAll(".button-select button");
  const input = document.querySelector(".input-block input[value]");
  
  btn.forEach((actives) => {
    actives.classList.remove("active");
  });
  
  const click = event.currentTarget;
  if (click.classList.value === "") {
    click.classList.add("active");
  }
  input.value = click.dataset.value
  
}
function validate(event){
  const lat = document.querySelector("[name='lat']").value;
  const lng = document.querySelector("[name='lng']").value;
  const erMsg = document.querySelector(".error").style = 'flex';

  if(lat === "" || lng === ""){
    event.preventDefault();
  }
}