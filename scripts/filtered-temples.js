const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bogota Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-29872.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7571.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  }
];

function displayTemples(filtered) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  filtered.forEach(temple => {
    let card = document.createElement("figure");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
      </figcaption>
    `;

    gallery.appendChild(card);
  });
}

function filterTemples(criteria) {
  let filtered = temples;

  if (criteria === "old") {
    filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  }

  if (criteria === "new") {
    filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
  }

  if (criteria === "large") {
    filtered = temples.filter(t => t.area > 90000);
  }

  if (criteria === "small") {
    filtered = temples.filter(t => t.area < 10000);
  }

  displayTemples(filtered);
}

document.getElementById("home").addEventListener("click", () => filterTemples("home"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

displayTemples(temples);
