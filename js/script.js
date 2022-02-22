// --- GO TO TOP FUNCTIONS --- //
//Get the button
let goToTopButton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
goToTopButton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --- GRETTINGS FUNCTION --- //
// Using Function
printGreetings("hour", false)

// Function Declaration
function printGreetings(id, replaceText) {
  /* The input is an ID from a label in HTML File
    Two possible text positions
      - false: Puts the greetings in the begining of the text
      - true: Replaces text with the greetings
  The output is the greetings in the ID labe */

  // Initialize Variables
  let date = new Date();
  let hour = date.getHours();
  let hourString = "Hello!";
  let actualText = document.getElementById(id);

  // Select Case when a condition is TRUE
  switch (true) {
    // Good Morning between 05:00 am and before 12:00 pm
    case (hour >= 5 && hour < 12):
      hourString = "Good morning!"
      break;

    // Good Afternoon after 12:00 am and before 7:00 pm
    case (hour >= 12 && hour < 18):
      hourString = "Good afternoon!"
      break;

    // Good Night after 7:00 pm and before 05:00 am
    case (hour >= 18 && hour <= 23 || hour >= 0 && hour < 5):
      hourString = "Good evening!"
      break;

    default:
      // Keep original text
      break;
  }
  // Printing Greetings in ID
  if (replaceText) {
    // Replace Text
    actualText.textContent = hourString;
  } else {
    // Add text at the begining
    actualText.textContent = hourString + actualText.textContent;
  }
}

// --- COPY TO CLIPBOARD --- //
function copyToClipboard() {
  // Get the text field
  var copyText = document.getElementById("elementToClipboard");

  // Get the href
  var text = copyText.getAttribute("href").toString();

  // Write the text into the clipboard
  navigator.clipboard.writeText(text);
}

// --- VALIDATION --- //


/* BOOTSTRAP FUNCTIONS */

// --- TOOLTIP --- //
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// --- TOAST TRIGGER --- //
function toastTriggerer(buttonId,toastMessageId) {
  var toastTrigger = document.getElementById(buttonId)
  var toastLiveMailCopy = document.getElementById(toastMessageId)
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      var toast = new bootstrap.Toast(toastLiveMailCopy)
  
      toast.show()
    })
  }
}