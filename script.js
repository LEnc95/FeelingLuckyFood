// Define the meal options for each time of day and restaurant
const breakfastOptions = [
    "Egg McMuffin",
    "Hotcakes and Sausage",
    "Sausage Burrito",
    // Add more breakfast options here...
  ];
  
  const lunchOptions = [
    "Big Mac",
    "Quarter Pounder with Cheese",
    "McChicken",
    // Add more lunch options here...
  ];
  
  const dinnerOptions = [
    "Double Quarter Pounder with Cheese",
    "McDouble",
    "Artisan Grilled Chicken Sandwich",
    // Add more dinner options here...
  ];
  
  // Function to get a random item from an array
  function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // Function to display the randomly selected meal
  function getRandomMeal() {
    const currentTime = new Date().getHours();
    let selectedMeal;
  
    if (currentTime >= 5 && currentTime < 11) {
      // Breakfast (5 AM to 11 AM)
      selectedMeal = getRandomItemFromArray(breakfastOptions);
    } else if (currentTime >= 11 && currentTime < 16) {
      // Lunch (11 AM to 4 PM)
      selectedMeal = getRandomItemFromArray(lunchOptions);
    } else {
      // Dinner (4 PM to 5 AM)
      selectedMeal = getRandomItemFromArray(dinnerOptions);
    }
  
    const mealDisplay = document.getElementById("mealDisplay");
    mealDisplay.textContent = `You should try: ${selectedMeal}`;
  }
  
  // Run the getRandomMeal function when the page loads
  getRandomMeal();
  