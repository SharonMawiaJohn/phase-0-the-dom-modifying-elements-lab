// Write your code here!
// Create a new <div> element
const newHeader = document.createElement("h1");
document.getElementById("main").remove();
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with the actual name

document.body.appendChild(newHeader); // Append newHeader to the document body or another appropriate element
const element = document.createElement("div");

// Append the <div> element to the <body>
document.body.append(element);

// Create an <ul> element
const ul = document.createElement("ul");

// Populate the <ul> with <li> elements using a loop
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the <ul> to the previously created <div>
element.append(ul);

// Change properties on a DOM node (e.g., modify styles)
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

// Add or remove classes from an element
element.classList.add("pet-listing", "cat");
element.classList.remove("dog");

// Remove elements from the DOM
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Alternatively, remove the entire <ul> element
// ul.remove();