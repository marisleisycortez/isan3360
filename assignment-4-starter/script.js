// Checklist 2: the array. 4 or more items of my own.
const projects = [
  "About Me Website",
  "Baking App Prototype",
  "Marketing Research: Sewell River Cleanliness",
  "Alarm App Prototype",
  "Culture Website (WordPress)",
  "Advertisements for Monster"
];

// Checklist 4: querySelector finds the empty <ul id="list">. The # means id, as in CSS.
const list = document.querySelector("#list");

// Checklist 3: forEach runs this function once for each item. On each pass,
// project holds the next item: "About Me Website", then "Baking App Prototype", and so on.
projects.forEach(function (project) {
  // Checklist 4: createElement makes a new, empty <li>. It is NOT on the page yet.
  const li = document.createElement("li");
  // textContent puts the item's words inside the new <li>.
  li.textContent = project;
  // appendChild adds the <li> to the end of the list. NOW it shows on the page.
  list.appendChild(li);
});

// Checklist 5: getElementById finds the empty <p id="count">. It takes the id with no #.
const count = document.getElementById("count");
// textContent writes the sentence. projects.length counts the items, so it is 6 here.
count.textContent = "I have " + projects.length + " projects.";