function updateVisitCounter() {
    let visits = localStorage.getItem("visits");

    if (visits === null) {
        visits = 1;
    } else {
        visits = Number(visits) + 1;
    }

    localStorage.setItem("visits", visits);

    const visitDisplay = document.querySelector("#visitCounter");

    if (visitDisplay) {
        visitDisplay.textContent = `You have visited this page ${visits} times.`;
    }
}

function showWelcomeMessage() {
    const welcomeDisplay = document.querySelector("#welcomeMessage");
    const storedName = localStorage.getItem("userName");

    if (welcomeDisplay) {
        if (storedName) {
            welcomeDisplay.textContent = `Welcome back, ${storedName}!`;
        } else {
            welcomeDisplay.textContent = "Welcome to our store!";
        }
    }
}

const products = [
    {
        name: "iPhone 14",
        brand: "Apple",
        price: 799,
        category: "Smartphone",
        image: "images/iphone14.webp"
    },
    {
        name: "Galaxy S23",
        brand: "Samsung",
        price: 749,
        category: "Smartphone",
        image: "images/galaxys23.jpg"
    },
    {
        name: "AirPods",
        brand: "Apple",
        price: 199,
        category: "Accessory",
        image: "images/airpods.jpg"
    },
    {
        name: "Wireless Charger",
        brand: "Anker",
        price: 39,
        category: "Accessory",
        image: "images/wirelesscharger.avif"
    }
];

function displayProducts(productList) {
    const container = document.querySelector("#productContainer");
    if (!container) return;

    container.innerHTML = "";

    productList.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Price:</strong> $${product.price}</p>
            </div>
        `;
    });
}

function setupFilters() {
    const allBtn = document.querySelector("#allBtn");
    const smartphoneBtn = document.querySelector("#smartphoneBtn");
    const accessoryBtn = document.querySelector("#accessoryBtn");

    if (!allBtn) return;

    allBtn.addEventListener("click", function () {
        displayProducts(products);
    });

    smartphoneBtn.addEventListener("click", function () {
        const smartphones = products.filter(product => product.category === "Smartphone");
        displayProducts(smartphones);
    });

    accessoryBtn.addEventListener("click", function () {
        const accessories = products.filter(product => product.category === "Accessory");
        displayProducts(accessories);
    });
}

function setupContactForm() {
    const form = document.querySelector("#contactForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        const formMessage = document.querySelector("#formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
            return;
        }

        localStorage.setItem("userName", name);

        formMessage.textContent = `Thank you for contacting us, ${name}! We will respond soon.`;

        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    updateVisitCounter();
    showWelcomeMessage();
    displayProducts(products);
    setupFilters();
    setupContactForm();
});