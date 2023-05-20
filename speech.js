// Function to read the description using the SpeechSynthesis API
function readDescription(description) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = description;
  window.speechSynthesis.speak(speech);
}

// Add event listener to all buttons with the class 'readButton'
const buttons = document.querySelectorAll('.readButton');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the target ID from the data attribute
    const targetID = this.getAttribute('data-target');
    const element = document.getElementById(targetID);
    if (element) {
      // Read the description using the SpeechSynthesis API
      readDescription(element.textContent);
    }
  });
});
