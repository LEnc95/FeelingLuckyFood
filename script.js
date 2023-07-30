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
  

  // SQLite

  const sqlite3 = require('sqlite3').verbose();

// Create a new database connection or open an existing one
const db = new sqlite3.Database('./feeling_lucky_food.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

// Perform database operations
db.serialize(() => {
  // Create tables (if not exist) and insert data (you can customize this based on your needs)
  db.run(`
    CREATE TABLE IF NOT EXISTS breakfast (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
    )
  `);

  db.run(`INSERT INTO breakfast (name) VALUES ('Egg McMuffin')`);
  db.run(`INSERT INTO breakfast (name) VALUES ('Hotcakes and Sausage')`);
  // Insert other breakfast options...

  // Add similar code for lunch and dinner options

  // Retrieve data
  db.all('SELECT name FROM breakfast', (err, breakfastOptions) => {
    if (err) {
      console.error(err);
    } else {
      // Here, breakfastOptions will contain an array of breakfast option names
      console.log(breakfastOptions);
    }
  });
});

// Close the database connection when done
db.close();
