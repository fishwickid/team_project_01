$("#save").on("click", startQuiz);
//collect user name from form to display
var userName = $("#full-name");
console.log(userName)
// start quiz
function startQuiz() {
  event.preventDefault()
  document.getElementById("divQuiz").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  console.log("quiz started");
  document.getElementById("wineQuestion").html = "hello";
  $("#wineQuestion").html("<p>What type of wine are you in the mood for  "+ userName.val() +"</p>");
  renderQuestion();
};


function renderQuestion() {
  // Event listener for our cat-button
  $("#barbequeButton").on("click", function () {
    $("#displayFood").html("<p>You chose barbeque</p>");
    $("#cuisine-ID").val("barbeque");
  });

  $("#burgerButton").on("click", function () {
    $("#displayFood").html("<p>You chose burgers</p>");
    $("#cuisine-ID").val("burgers");
  });

  $("#chineseButton").on("click", function () {
    $("#displayFood").html("<p>You chose Chinese</p>");
    $("#cuisine-ID").val("chinese");
  });

  $("#friedFoodButton").on("click", function () {
    $("#displayFood").html("<p>You chose fried food</p>");
    $("#cuisine-ID").val("fried food");
  });

  $("#indianButton").on("click", function () {
    $("#displayFood").html("<p>You chose Indian</p>");
    $("#cuisine-ID").val("indian");
  });

  $("#italianButton").on("click", function () {
    $("#displayFood").html("<p>You chose Italian</p>");
    $("#cuisine-ID").val("italian");
  });

  $("#pizzaButton").on("click", function () {
    $("#displayFood").html("<p>You chose Pizza</p>");
    $("#cuisine-ID").val("Pizza");
  });

  $("#sushiButton").on("click", function () {
    $("#displayFood").html("<p>You chose Sushi</p>");
    $("#cuisine-ID").val("sushi");
  });

  $("#thaiButton").on("click", function () {
    $("#displayFood").html("<p>You chose Thai</p>");
    $("#cuisine-ID").val("Thai");
  });
  $("#redButton").on("click", function () {
    $("#displayWine").html("<p>with red wine</p>")
    document.getElementById("btnSearch").style.display = "block";
    
  });
  $("#whiteButton").on("click", function () {
    $("#displayWine").html("<p>with white wine</p>");
    document.getElementById("btnSearch").style.display = "block";
    
  });
};


// form.js
const formId = "save-later-form"; // ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
const alertBox = document.querySelector(".alert"); // select alert display div
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
saveButton.onclick = event => {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
  const message = "Form draft has been saved!";
  displayAlert(message);
};
/**
 * This function displays a message
 * on the page for 1 second
 *
 * @param {String} message
 */
const displayAlert = message => {
  alertBox.innerText = message;
  alertBox.style.display = "block";
  setTimeout(function() {
    alertBox.style.display = "none";
  }, 1000);
};
/**
 * This function populates the form
 * with data from localStorage
 *
 */
const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
    const message = "Form has been refilled with saved data!";
    displayAlert(message);
  }
};

// Search Results Zomato API

var userCuisineChoice = [];
    function getCuisineId(userCuisineChoice) {

        const userCuisineChoiceToCuisineIdsMapping = [
            { cuisineName: "italian", cuisineIds: "55,82" },
            { cuisineName: "burgers", cuisineIds: "168" },
            { cuisineName: "chinese", cuisineIds: "3,121,25,69,831,128,119,99" },
            { cuisineName: "fried food", cuisineIds: "1" },
            { cuisineName: "indian", cuisineIds: "148,117,50" },
            { cuisineName: "pizza", cuisineIds: "82" },
            { cuisineName: "sushi", cuisineIds: "60,177" },
            { cuisineName: "thai", cuisineIds: "95,99" },
        ]
        const matchingCuisines = userCuisineChoiceToCuisineIdsMapping.filter(cuisineMapping => {
            return cuisineMapping.cuisineName === userCuisineChoice.trim().toLowerCase()

        });

        if (matchingCuisines.length > 0) {
            return matchingCuisines[0].cuisineIds;
        }
        else {
            //TODO (Sukey): add a div for error messages
        }

    }

    function userCuisineSearch() {
        event.preventDefault();

        userCuisineChoice = ($("#cuisine-ID").val());

        const selectedCuisineIds = getCuisineId(userCuisineChoice);

        if (selectedCuisineIds !== undefined) {

            var requestUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=296&entity_type=city&q=BYO&cuisines=" + selectedCuisineIds;
            var headers = {
                "Accept": 'application/json',
                "user-key": "b83a37834a49f80599c5c0c7e56a4977"
            }
            $.ajax({
                url: requestUrl,
                headers: headers,
                complete: function (response) {
                    $('#output').html(response.responseText);
                    console.log(requestUrl);
                    console.log(response.responseJSON);
                    console.log(response.responseJSON.restaurants[0]);
                    console.log(response.responseJSON.restaurants[0].restaurant.name);
                    console.log(response.responseJSON.restaurants[0].restaurant.phone_numbers);
                    console.log(response.responseJSON.restaurants[0].restaurant.location.address);
                    console.log(response.responseJSON.restaurants[0].restaurant.timings);

                    const dataResults = response.responseJSON.restaurants[0].restaurant;
                    const cityName = dataResults.name;
                    const cityPhoneNumber = dataResults.phone_numbers;
                    const cityAddress = dataResults.location.address;
                    const cityOpeningHours = dataResults.timings;

                    $("#city-name").text(cityName)
                    $("#city-address").text("Address:" + cityAddress)
                    $("#city-phone-number").text("Phone Number: " + cityPhoneNumber)
                    $("#city-opening-hours").text("Opening Hours: " + cityOpeningHours)

                },
                error: function () {
                    $('#output').html('Bummer: there was an error!');
                },

            });
        }

    }

    $("#btnSearch").on("click", userCuisineSearch)
;
