var dinner = [
    "Milk Steak",
    "Boiled Eggs",
    "A Big Bowl of Sauerkraut",
    "14 Almonds",
    "McDonalds"
]

var dessert = [
    "Root Beer",
    "Cheese",
    "no dessert for you today",
    "Turtles",
    "Hands"
]

var sideDish = [
    "Mustard Crickets",
    "Frozen Fish Sticks",
    "Mayo",
    "concrete",
    "Furballs?"
]

var dessertRadio = document.getElementById("dessertRadio")
var dinnerRadio = document.getElementById("dinnerRadio")
var sideDishRadio = document.getElementById("sideDishRadio")
var entireMealRadio = document.getElementById("entireMealRadio")
var letsCookButton = document.getElementById("letsCookButton")
var imageBox = document.querySelector(".image-box");
var cookpotImage = imageBox.querySelector("img");
var mealText = imageBox.querySelector(".meal");

var selectedCatagory = ""

dessertRadio.addEventListener("change", function() {
    selectedCatagory = "dessert";
});
  
dinnerRadio.addEventListener("change", function() {
    selectedCatagory = "dinner"
});

sideDishRadio.addEventListener("change", function() {
    selectedCatagory = "side-dish"
});

entireMealRadio.addEventListener("change", function() {
    selectedCatagory = "entire-meal"
});

letsCookButton.addEventListener("click", function(){
    var recommendation = getRecommendation(selectedCatagory)
    displayRecommendation(recommendation)
})

function displayRecommendation(recommendation){
    cookpotImage.style.display = "none";
    mealText.style.display = "block";
    mealText.textContent = recommendation;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getRecommendation(category){
    if (category === "dessert"){
        return getRandomDessert()
    } else if (category === "dinner") {
        return getRandomDinner()
    } else if (category === "side-dish"){
        return getRandomSideDish()
    } else if (category === "entire-meal"){
        return entireMeal()
    } else {
        return "Select a category first please"
    }
}

function getRandomSideDish(){
    var randomSideDish = sideDish[getRandomIndex(sideDish)]
    return `You should have a side of ${randomSideDish} with your meal!`
}

function getRandomDessert(){
    var randomDessert = dessert[getRandomIndex(dessert)]
    return `For dessert... ${randomDessert} would be a great option for you! YUM!!!`
}

function getRandomDinner(){
    var randomDinner = dinner[getRandomIndex(dinner)]
    return `I think that the best dinner option for you would be ${randomDinner}.`
}

function entireMeal (){
    var randomDinner = dinner[getRandomIndex(dinner)];
    var randomDessert = dessert[getRandomIndex(dessert)];
    var randomSideDish = sideDish[getRandomIndex(sideDish)];
  
    return `You should have ${randomDinner} with a side of ${randomSideDish} and maybe, for dessert, ${randomDessert}. Treat Yourself!`
}

