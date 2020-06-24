$("#start").on("click", startQuiz);


// start quiz
function startQuiz() {
  event.preventDefault()
  document.getElementById("divQuiz").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  console.log("quiz started");
  document.getElementById("wineQuestion").html = "hello";
  $("#wineQuestion").html("<p>YWhat type of whine are you in the mood for Thibs</p>");
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




  // Storing our giphy API URL for a random cat image
  // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

  // // Perfoming an AJAX GET request to our queryURL
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // })

  // // After the data from the AJAX request comes back
  //   .then(function(response) {

  //   // Saving the image_original_url property
  //     var imageUrl = response.data.image_original_url;

  //     // Creating and storing an image tag
  //     var catImage = $("<img>");

  //     // Setting the catImage src attribute to imageUrl
  //     catImage.attr("src", imageUrl);
  //     catImage.attr("alt", "cat image");

  //     // Prepending the catImage to the images div
  //     $("#images").prepend(catImage);

      // show response in HTML

// });