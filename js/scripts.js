// UI logic
function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=grocery-option]:checked");
  const userSelectionsArray = Array.from(userSelections);

  // creating results heading
  const resultsHeading = document.createElement("h2");
  resultsHeading.append("You have ordered these items from New Horizons Market:");
  document.body.append(resultsHeading);

  userSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#groceries_survey").addEventListener("submit", handleForm);
});