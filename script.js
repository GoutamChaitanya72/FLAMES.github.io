// JavaScript code for adding functionality to the elements
// Get the elements by their ids
var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");
var form = document.getElementById("flames-form");
var result = document.getElementById("result");

// Define the FLAMES dictionary
var flames = {1: "Friends", 2: "Lovers", 3: "Affectionate", 4: "Marriage", 5: "Enemies", 6: "Siblings"};

// Add a submit event listener to the form element
form.addEventListener("submit", function(event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Get the values from the inputs and remove spaces
  var name1Value = name1.value.toLowerCase().replace(/\s/g, "");
  var name2Value = name2.value.toLowerCase().replace(/\s/g, "");

  // Remove the common letters from the names
  for (var letter of name1Value) {
    if (name2Value.includes(letter)) {
      name1Value = name1Value.replace(letter, "");
      name2Value = name2Value.replace(letter, "");
    }
  }

  // Count the total number of remaining letters
  var count = name1Value.length + name2Value.length;

  // Find the index of the relationship using modulo operation
  var index = count % 6;

  // If the index is zero, the relationship is Siblings
  if (index == 0) {
    result.textContent = "Siblings";
  }
  // Otherwise, return the relationship from the dictionary
  else {
    result.textContent = flames[index];
  }
});
