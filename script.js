let age = 20;
const name = "Mercy";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// ===============================
// Part 2: Custom Functions
// ===============================
function greetUser(username) {
  console.log("Hello, " + username + "! ");
}

function calculateSquare(num) {
  return num * num;
}

// Call functions
greetUser("Mercy");
console.log("Square of 5 is:", calculateSquare(5));

// ===============================
// Part 3: Loop Examples
// ===============================

// For loop example
for (let i = 1; i <= 3; i++) {
  console.log("For loop iteration:", i);
}

// While loop example
let counter = 1;
while (counter <= 3) {
  console.log("While loop iteration:", counter);
  counter++;
}


// Part 4: DOM Interactions


// 1. Change the text of an element
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("main-title").textContent = "Text Changed with JavaScript! ";
});

// 2. Add a new item to the list
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
});

// 3. Change style of an element
document.getElementById("description").style.color = "green";