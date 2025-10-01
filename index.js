function addingEventListener() {
}
function addingEventListener() {
  // Grab the button element
  const input = document.getElementById('button');

  // Define the callback function
  function clickAlert() {
    alert('I was clicked!');
  }

  // Add the click event listener
  input.addEventListener('click', clickAlert);
}

// Call the outer function to set up the event listener
addingEventListener();
