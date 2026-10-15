// Project Title: Interactive Product Inventory & Analytics Dashboard

// 1. DATA & INPUT INITIALIZATION

console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// Input
let productName = prompt("Enter product name:");
let productPrice = prompt("Enter product price:");

productName = productName ? productName.trim() : "";
productPrice = Number(productPrice);

// check input using if else
if (productName === "" || !Number.isFinite(productPrice) || productPrice <= 0) {
  console.log(
    "Invalid product details. Please enter a valid name and positive price.",
  );
} else {
  inventory.push({ name: productName, price: productPrice });
  console.log(
    `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`,
  );
}


// 2. CONTROL FLOW & CATEGORY ASSIGNMENT

function getCategory(price) {
  let category;
  if (price < 80) {
    category = "Budget";
  } else if (price < 200) {
    category = "Standard";
  } else {
    category = "Premium";
  }
  switch (category) {
    case "Budget":
      return "Budget";
    case "Standard":
      return "Standard";
    case "Premium":
      return "Premium";
    default:
      return "Unknown";
  }
}

// 3. LOOPS & FLOW CONTROL

console.log("\n--- Processing Inventory Roster (forEach) ---");
for (let i = 0; i < inventory.length; i++) {
  if (!inventory[i].name ||!Number.isFinite(inventory[i].price) || inventory[i].price <= 0) {
    continue;
  }

  // Search for an expensive product
  if (inventory[i].price > 1000) {
    console.log("Expensive product found:", inventory[i].name);
    break;
  }
}

// Display the inventory using forEach()

inventory.forEach((product) => {
  console.log(
    `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`,
  );
});

// 4. FUNCTIONS & SCOPE

// Regular function to calculate total inventory value
function calculateTotal(products) {
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  return total;
}

// Arrow function to calculate discounted price
const calculateDiscount = (price, discount = 0) => {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice;
};

// Arrow function to calculate price with tax
const calculateTax = (price, taxRate = 10) => {
  let finalPrice = price + (price * taxRate) / 100;
  return finalPrice;
};

// 5. ARRAY METHODS & FINANCIAL ANALYTICS

console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

// Filter affordable products
const affordableProducts = inventory.filter((product) => {
  return product.price < 200;
});
const affordableNames = affordableProducts.map((product) => {
  return product.name;
});
console.log(
  "Filtered Affordable Items (Under $200):",
  JSON.stringify(affordableNames),
);

// Map
const report = inventory.map((product) => {
  return `${product.name.toUpperCase()}: $${product.price}`;
});

console.log("Formatted Report List:", JSON.stringify(report));

// 6. TAX & DISCOUNT DEMONSTRATION

const samplePrice = 150;
console.log("\n--- Tax & Discount Demonstration ---");
console.log(`Price after 10% tax: $${calculateTax(samplePrice)}`);
console.log(`Price after 20% discount: $${calculateDiscount(samplePrice, 20)}`);