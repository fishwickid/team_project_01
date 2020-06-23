
//User form

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

  }
};

document.onload = populateForm(); // populate the form when the document is loaded


// zomato function

//<a href="#" onclick="return getSuccessOutput();"> test success </a> | <a href="#" onclick="return getFailOutput(); return false;"> test failure</a>
//<div id="output">waiting for action</div>

function getSuccessOutput() {
  var apiKey = "9c2e8be76bd98aff754b5cded36af347"
  var requestUrl = "https://developers.zomato.com/api/v2.1/categories"
  var headers = {
    "Accept": 'application/json',
    "user-key": "9c2e8be76bd98aff754b5cded36af347"
  }
      $.ajax({
          url:requestUrl,
          headers: headers,
          complete: function (response) {
              $('#output').html(response.responseText);

          },
          error: function () {
              $('#output').html('Bummer: there was an error!');
          },
      });
      return false;

  }




