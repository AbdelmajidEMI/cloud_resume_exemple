/* var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
}); */


var counterContainer = document.querySelector(".website-counter");

// Function to update the counter in the HTML
function updateCounter(count) {
  counterContainer.innerText = count;
}

// Function to get the visitor count from the API
function getVisitorCount() {
  fetch('https://tk90q8jq9e.execute-api.us-east-1.amazonaws.com/default/', {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming 'count' is the returned JSON field with the visitor count
    updateCounter(data.count);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

// Call the getVisitorCount() function when the page loads
getVisitorCount();

