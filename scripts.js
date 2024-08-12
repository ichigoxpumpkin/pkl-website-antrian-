document.addEventListener("DOMContentLoaded", function () {
  // Redirect to booking page after login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();
          // Here you can add actual authentication
          window.location.href = "booking.html";
      });
  }

  // Set the current date in the booking page
  const dateElement = document.getElementById("date");
  if (dateElement) {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateElement.textContent = today.toLocaleDateString(undefined, options);
  }

  // Handle booking form submission
  const queueForm = document.getElementById("queueForm");
  if (queueForm) {
      queueForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.getElementById("name").value;
          const category = document.getElementById("category").value;
          const problem = document.getElementById("problem").value;
          const attachment = document.getElementById("attachment").files[0];

          if (attachment) {
              const reader = new FileReader();
              reader.onload = function (e) {
                  console.log("Attached Image:", e.target.result);  // For demo purpose
                  alert(`Thank you ${name}, you have booked a slot under ${category}. We'll review your attached image and problem: ${problem}`);
              };
              reader.readAsDataURL(attachment);
          } else {
              alert(`Thank you ${name}, you have booked a slot under ${category}. We'll assist you shortly with the problem: ${problem}`);
          }
          
          // Clear the form after submission
          queueForm.reset();
      });
  }
});
