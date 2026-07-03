

const menuItems = [
    {
        name: "Chicken Burger",
        description: "Crispy fried chicken, lettuce, tomato and special sauce in a toasted bun.",
        price: "From Ksh 350",
        icon: "🍔"
    },
    {
        name: "Shawarma",
        description: "Spiced chicken or beef, garlic sauce and veggies in warm flatbread.",
        price: "From Ksh 380",
        icon: "🌯"
    },
    {
        name: "Pizza",
        description: "Hand-stretched dough with rich tomato sauce and fresh toppings.",
        price: "From Ksh 650",
        icon: "🍕"
    },
    {
        name: "Loaded Fries",
        description: "Golden fries piled with cheese, sauces and crispy chicken.",
        price: "From Ksh 300",
        icon: "🍟"
    },
    {
        name: "Chicken Wings",
        description: "Crispy wings in BBQ, peri-peri or garlic butter sauce.",
        price: "From Ksh 420",
        icon: "🍗"
    },
    {
        name: "Fresh Juices",
        description: "Cold-pressed tropical juices and smoothies made daily.",
        price: "From Ksh 150",
        icon: "🥤"
    }
];

const menuContainer = document.getElementById("menuContainer");

menuItems.forEach(function(item) {

    const card = document.createElement("article");

    card.classList.add("menu-card");

    card.innerHTML = `
        <div class="card-icon">${item.icon}</div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span class="price">${item.price}</span>
    `;

    menuContainer.appendChild(card);

});

const foodInput = document.getElementById("foodInput");
const addFoodButton = document.getElementById("addFood");
const foodList = document.getElementById("foodList");

addFoodButton.addEventListener("click", function () {

    const foodName = foodInput.value.trim();

    if (foodName === "") {
        alert("Please enter a food item.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = foodName + " ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(removeButton);

    foodList.appendChild(listItem);

    foodInput.value = "";

});

const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const message = document.getElementById("customerMessage").value.trim();

    if (name === "" || email === "" || message === "") {

        feedback.textContent = "Please fill in all the fields.";
        feedback.style.color = "red";

        return;
    }

    feedback.textContent = "Thank you, " + name + "! Your order has been received.";
    feedback.style.color = "green";

    contactForm.reset();

});

const themeButton = document.getElementById("themeButton");

// Check if a saved theme exists
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});
// ===============================
// Step 5 - Banner Click Toggle
// ===============================

const bannerImage = document.getElementById("bannerImage");
const bannerCaption = document.getElementById("bannerCaption");

bannerImage.addEventListener("click", function () {

    bannerCaption.classList.toggle("hidden");

    bannerCaption.classList.toggle("show-caption");

});