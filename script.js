// Define the meal options for each time of day and restaurant
const breakfastOptions = [
    "Egg McMuffin",
    "Hotcakes and Sausage",
    "Sausage Burrito",
    "Fruit 'N Yogurt Parfait",
    "Fruit & Maple Oatmeal",
    "Bacon, Egg & Cheese McGriddles",
    "Sausage McMuffin with Egg",
    "Hotcakes",
    "Peanut Butter Overnight Oats",
    "Blueberry Muffins",
    "Greek Yogurt with Berries",
    "Chia Seed Pudding",
    "Smoothie Bowl with Granola",
    "Breakfast Burrito",
    "Avocado Toast",
    "Banana Pancakes",
    "Acai Bowl",
  ];
  
  const lunchOptions = [
    "Big Mac",
    "Quarter Pounder with Cheese",
    "McChicken",
    "Filet-O-Fish",
    "Double Cheeseburger",
    "Chicken McNuggets (10 pc)",
    "Crispy Chicken Sandwich",
    "Premium Southwest Salad",
    "Bacon, Egg & Cheese Biscuit",
    "Hash Brown Scramble Bowl",
    "Chicken Caesar Salad",
    "Grilled Chicken Wrap",
    "Classic Sausage, Egg & Cheese",
    "Asiago Ranch Chicken Club",
    "Spicy Chicken Sandwich",
    "Son of Baconator",
    "Spicy Chicken Go-Wrap",
    "Bacon Jalapeño Chicken Sandwich",
  ];
  
  const dinnerOptions = [
    "Double Quarter Pounder with Cheese",
    "McDouble",
    "Artisan Grilled Chicken Sandwich",
    "Filet-O-Fish",
    "Buttermilk Crispy Chicken Sandwich",
    "Crispy Chicken Sandwich",
    "Quarter Pounder with Cheese",
    "Premium Bacon Ranch Salad",
    "Bacon Jalapeño Cheeseburger",
    "Homestyle Chicken Biscuit",
    "Sushi Rolls",
    "Grilled Vegetable Salad",
    "Dave's Single",
    "Classic Chicken Nuggets (6 pc)",
    "Grilled Chicken Sandwich",
    "Spicy Chicken Sandwich",
    "Grilled Market Salad",
    "Chick-fil-A Deluxe Sandwich",
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
  