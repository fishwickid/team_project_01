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
  $("#wineQuestion").html("<p>Pick what kind of cuisine you in the mood for " + userName.val() + " and we will pop out a wine suggestion! </p>");
  renderQuestion();
};

function renderQuestion() {
  // Event listener for our cat-button
  $("#barbequeButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Malbec <br></strong>An affordable Argentinian Malbec will do a good job of standing up to the sweet BBQ heat. You can try a Rhone blend if you want to shell out a few more bucks.<p></p><strong>White: Rose</strong><br>It's not a white wine, but rosé will give you the crisp, cool flavors you're looking for while standing up to the fat and smokiness of the meat.");
    $("#cuisine-ID").val("barbeque");
    document.getElementById("btnSearch").style.display = "block";
  });

  $("#burgerButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Cabernet Sauvignon<br></strong>An affordable Argentinian Malbec will do a good job of standing up to the sweet BBQ heat. You can try a Rhone blend if you want to shell out a few more bucks.<p></p><strong>White: Oaked Chardonnay</strong><br>If you're going white here, you need a powerful white wine that can handle the meatiness of the burger. That's a classic Margaret River Chardonnay.");
    $("#cuisine-ID").val("burgers");
    document.getElementById("btnSearch").style.display = "block";
  });

  $("#chineseButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Blaufränkisch<br></strong>This wine can handle the saltiness of soy sauce due to its fruity flavors. For sweet, peppery heat (e.g. General Tso's Chicken) go with a Gamay.<p></p><strong>White: German Riesling</strong><br>The semi-sweetness of the wine tempers the spice of the food perfectly.");
    $("#cuisine-ID").val("chinese");
    document.getElementById("btnSearch").style.display = "block";
  });

  $("#friedFoodButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Lambrusco <br></strong>This classic sparkling Italian red goes perfectly with salty fried foods<p></p><strong>White: Champagne</strong><br>Sparkling wines go well with salty fried foods, especially fast-food fried chicken.");
    $("#cuisine-ID").val("fried food");
    document.getElementById("btnSearch").style.display = "block";
  });

  $("#indianButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Syrah<br></strong>A Syrah stands up well to classic Indian curries and cream sauces. It also cuts through the spice.<p></p><strong>White: German Riesling</strong><br>The semi-sweetness of the wine tempers the spice of the food perfectly.");
    $("#cuisine-ID").val("indian");
    document.getElementById("btnSearch").style.display = "block";
  });

  $("#italianButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Chianti<br></strong>It's the red sauce classic, plus it's dry enough to go well with the depth of flavor of the tomato sauce, especially if the sauce includes meat.<p></p><strong>White: Pinot Grigio</strong><br>While a red wine is the better pairing here, this white wine is the best for standing up to classic red sauce flavors.");
    $("#cuisine-ID").val("italian");
    document.getElementById("btnSearch").style.display = "block";
  });

  $("#pizzaButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Barbera<br></strong>It's the red sauce classic, plus it's dry enough to go well with the depth of flavor of the tomato sauce, especially if the sauce includes meat.<p></p><strong>White: Grüner Veltliner</strong><br>The acidity and bright flavors go well with many pizza pies, but especially those with veggie toppings or white sauces.");
    $("#cuisine-ID").val("Pizza");
    document.getElementById("btnSearch").style.display = "block";
  });

  $("#sushiButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Pinot Noir<br></strong>The earthiness, acidity and fruit flavors of this light red are a perfect match.<p></p><strong>White: Chenin Blanc</strong><br>This white wine is fantastic with fish. With some of the best stuff coming from South Africa it's also a bargain.");
    $("#cuisine-ID").val("sushi");
    document.getElementById("btnSearch").style.display = "block";

  });

  $("#thaiButton").on("click", function () {
    $("#displayFood").html("<strong>Red: Gamay<br></strong>To stand up to the spice, you want a light and fruity red wine and Gamay serves this purpose perfectly. Gamay is most commonly found in French Beaujolais.<p></p><strong>White: Gewürztraminer</strong><br>The sweet flavors and bright acidity cuts through the spice common in Thai dishes.");
    $("#cuisine-ID").val("Thai");
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
  setTimeout(function () {
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

userCuisineChoiceToCuisineIdsMapping.forEach(element => {
  var option = document.createElement('option')
  option.textContent = element.cuisineName;
  document.getElementById('cuisine-ID').appendChild(option);
})

var userCuisineChoice = [];
function getCuisineId(userCuisineChoice) {


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

function createEntry(data, ind) {
  let elementId = `restaurant-${ind}`
  let html = `
  <div class="col-lg-4 col-12 mb-2 mb-lg-0">
    <div id="${elementId}" class="card">
      ${data.thumb && `<img class="card-img-top" src="${data.thumb}" alt="${data.name} image" style="max-height: 120px; object-fit:cover"/>`}
      <div class="card-body">
        <h5 class="card-title city-data" id="city-name">${data.name}</h3>
        <p class="card-text city-data" id="city-address"><strong>Address:</strong> ${data.location.address}</p>
        <p class="card-text city-data" id="city-phone-number"><strong>Phone Number:</strong> ${data.phone_numbers}</p>
        <p class="card-text city-data" id="city-opening-hours"><strong>Opening Hours:</strong> ${data.timings}</p>
        <a href="${data.url}" class="card-link">View Restaurant</a>
      </div>
    </div>
  </div>
  `
  $('#recommended-restaurants').append(html);
}

function userCuisineSearch() {
  console.log('test');
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
        // also declare j = 1
        // this lets you use i to go through everything starting from the start, and use j to give them a unique number for id
        for (var i = 0, j = 1; i < response.responseJSON.restaurants.length; i++) {

          //shorter name to use!
          let data = response.responseJSON.restaurants[i].restaurant;

          // put all this into a bootstrap card
          // give each card an id, don't really need to give all the divs inside an id
          let card = $('<div/>').addClass('card').attr('id', 'restaurant-' + j);

          let cityName = $('<div>' + data.name + '</div>').addClass('city-data');
          let cityPhoneNumber = $('<div>' + data.phone_numbers + '</div>').addClass('city-data');
          let cityAddress = $('<div>' + data.location.address + '</div>').addClass('city-data');
          let cityOpeningHours = $('<div>' + data.timings + '</div>').addClass('city-data');

          // add these into the card
          card.append(cityName, cityPhoneNumber, cityAddress, cityOpeningHours)

          // add the card to the container
          $('#recommended-restaurants').append(card);

          //increment j at the end
          j++

        }
      },
      error: function () {
        $('#output').html('Bummer: there was an error!');
      },


    });


  }

}

$("#btnSearch").on("click", userCuisineSearch)
$("#cuisine-ID").empty();

event.preventDefault();
      // query URL and custom API KEY variable for current day weather 
      const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=perth&units=metric&appid=82c89536a936fdf2b3461ac6bec2669f";
      //ajax "get" method for the JSON object
      $.get({
        url: queryURL,
      }).then(function (response) {
        // apply cont variables to the data collected from the API
        const cityTemp = response.main.temp;
        const cityIcon = response.weather[0].icon;
        // assign fetched data to HTML id
        $("#weather-city-icon").attr("src", "https://openweathermap.org/img/w/" + cityIcon + ".png")
        $("#weather-city-temp").text("Temperature:" + cityTemp.toFixed(1) + "°C")
          ;
      });