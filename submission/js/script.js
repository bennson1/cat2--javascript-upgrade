// ===============================
// Step 2 - Add and Remove Items
// ===============================

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