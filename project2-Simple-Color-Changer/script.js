// Select DOM elements
const button = document.getElementById("colorBtn");
const changeColor = document.getElementById("colorMode");

// Function to generate a random RGB color
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to change the background color
function changeBgColor() {
  const randomColor = generateRandomColor(); // Correctly invoke the function
  document.body.style.backgroundColor = randomColor; // Apply color to the body
  changeColor.textContent = `Current Color: ${randomColor}`; // Update the displayed text
}

// Attach event listener to the button
button.addEventListener("click", changeBgColor);
