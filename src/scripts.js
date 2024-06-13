// Time in seconds before redirect
var timeLeft = 3;

// Update the countdown every second
var countdownTimer = setInterval(function () {
  // Decrement the time left
  timeLeft--;

  // Update the countdown display
  document.getElementById("countdown").textContent = timeLeft;

  // If the time left is 0, redirect to the new URL
  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    window.location.href = "https://chamzz.pythonanywhere.com/";
  }
}, 1000); // 1000 milliseconds = 1 second
