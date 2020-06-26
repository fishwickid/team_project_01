$("#start").on("click", startQuiz);
// start quiz
function startQuiz() {
  event.preventDefault()
  document.getElementById("divQuiz").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  console.log("quiz started");
  renderQuestion();
}
function renderQuestion() {
  // Event listener for our cat-button
  $("#barbequeButton").on("click", function () {
    $("#displayFood").html("<p>You chose barbeque</p>");
  });
  $("#burgerButton").on("click", function () {
    $("#displayFood").html("<p>You chose burgers</p>");
  });
  $("#chineseButton").on("click", function () {
    $("#displayFood").html("<p>You chose Chinese</p>");
  });
  $("#friedFoodButton").on("click", function () {
    $("#displayFood").html("<p>You chose fried food</p>");
  });
  $("#indianButton").on("click", function () {
    $("#displayFood").html("<p>You chose Indian</p>");
  });
  $("#italianButton").on("click", function () {
    $("#displayFood").html("<p>You chose Italian</p>");
  });
  $("#pizzaButton").on("click", function () {
    $("#displayFood").html("<p>You chose Pizza</p>");
  });
  $("#sushiButton").on("click", function () {
    $("#displayFood").html("<p>You chose Sushi</p>");
  });
  $("#thaiButton").on("click", function () {
    $("#displayFood").html("<p>You chose Thai</p>");
  });
  $("#redButton").on("click", function () {
    $("#displayWine").html("<p>with red wine</p>")
      ;
  });
  $("#whiteButton").on("click", function () {
    $("#displayWine").html("<p>with white wine</p>");
  });
};

//User form
// form.js
const formId = "save-later-form"; // ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form
/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

/**  add a click event listener to our save button. When the button is clicked 
 * then we save a JSON string of that data to localstorage
*/ 
saveButton.onclick = event => {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
};
/**
 * PopulateForm () checks if data for the form exists in LocalStorage using the formIdentifier.
 * If the form exists, the data is retrieved and parsed into a javascrit object 
 * Next we look through the elements in our form and update the saved data.
 * The user can continue where they left off.
 */
const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};
