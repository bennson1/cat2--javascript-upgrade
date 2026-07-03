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