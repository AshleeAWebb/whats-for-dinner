// Query Selectors
var addRecipeButton = document.querySelector('.add-recipe');
var letsCookButton = document.querySelector('.cook-button');
var potImage = document.querySelector('.cookpot')
var mealDisplay = document.querySelector('.meal-display')
var userRecipePage = document.querySelector('.recipe-page')
var mainPage = document.querySelector('.main-page')
var submitRecipeButton = document.querySelector('.submit-recipe-button')




// Global variables
var side = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];

var entree = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesan",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];

var dessert = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];


// Event listeners
letsCookButton.addEventListener('click', chooseMealRandom);
addRecipeButton.addEventListener('click',userAddRecipe)
submitRecipeButton.addEventListener('click',submitUserRecipe)

// Function declarations
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomMeal(meals) {
  var randomMealType = getRandomIndex(meals);
  return meals[randomMealType];
}

function chooseMealRandom() {
  potImage.classList.add("hidden")
  mealDisplay.innerHTML=''
  var mealSelected = document.querySelectorAll("input[name='meal-type']");
  if (mealSelected[0].checked){
    mealDisplay.innerHTML += `<h2 class="should-make">You should make:</h2>
    <h3>${randomMeal(side)}!</h3>`
  }else if (mealSelected[1].checked){
    mealDisplay.innerHTML += `<h2 class="should-make">You should make:</h2>
    <h3>${randomMeal(entree)}!</h3>` 
  }else if (mealSelected[2].checked){
    mealDisplay.innerHTML += `<h2 class="should-make">You should make:</h2>
    <h3>${randomMeal(dessert)}!</h3>`
  }
}

function userAddRecipe() {
  userRecipePage.classList.remove("hidden")
  potImage.classList.remove("hidden")
  mealDisplay.classList.add("hidden")
  window.scrollBy(0, 300);
}


function submitUserRecipe(){
  var userType = document.getElementById("recipe-input-type").value;
  var recipeSubmitted = document.getElementById("recipe-input").value; 
  var capitalizedRecipe = recipeSubmitted.charAt(0).toUpperCase() + recipeSubmitted.slice(1);
  if (userType === "side" || userType === "Side"){
    side.push(capitalizedRecipe);
  } else if (userType === "entree" || userType === "Entree"){
    entree.push(capitalizedRecipe);
  } else if (userType === "dessert" || userType === "Dessert"){
    dessert.push(capitalizedRecipe);
  } else {
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "This type of recipe does not exist! Please input a side, entree, or dessert";
    return;
  }
  window.scrollBy(0, -300);
  userRecipePage.classList.add("hidden");
  potImage.classList.add("hidden");
  mealDisplay.classList.remove("hidden");
  mealDisplay.innerHTML='';
  mealDisplay.innerHTML += `<h2 class="should-make">You should make:</h2>
    <h3>${capitalizedRecipe}!</h3>`;
}