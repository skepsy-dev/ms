
// Contact Tab form submit action
document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission

  const submitButton = this.querySelector("button[type=submit]");
  submitButton.disabled = true; // Disable button to prevent multiple submissions

   // Show success message immediately
   document.getElementById("successMessage").style.display = "block";
   document.getElementById("successMessage").innerText = "Sending..."; // Show loading message

  const formData = new FormData(this);

  try {
    const response = await fetch("https://formsubmit.co/ajax/maryschepisi@gmail.com", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      document.getElementById("successMessage").innerText = "Message sent successfully!";
      this.reset(); // Clear form fields
    } else {
      document.getElementById("successMessage").innerText = "Error sending message. Please try again.";
    }
    } catch (error) {
      document.getElementById("successMessage").innerText = "Network error. Please check your connection.";
    }

  setTimeout(() => {
  document.getElementById("successMessage").style.display = "none"; // Hide after 5 seconds
  }, 5000);

  submitButton.disabled = false; // Re-enable button after submission
});

// Needle Work Custom Order Contact form submit action
document.getElementById("customNeedleForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission

  const submitButton = this.querySelector("button[type=submit]");
  submitButton.disabled = true; // Disable button to prevent multiple submissions

   // Show success message immediately
   document.getElementById("needleSuccessMessage").style.display = "block";
   document.getElementById("needleSuccessMessage").innerText = "Sending..."; // Show loading message

  const formData = new FormData(this);

  try {
    const response = await fetch("https://formsubmit.co/ajax/maryschepisi@gmail.com", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      document.getElementById("needleSuccessMessage").innerText = "Message sent successfully!";
      this.reset(); // Clear form fields
    } else {
      document.getElementById("needleSuccessMessage").innerText = "Error sending message. Please try again.";
    }
    } catch (error) {
      document.getElementById("needleSuccessMessage").innerText = "Network error. Please check your connection.";
    }

  setTimeout(() => {
  document.getElementById("needleSuccessMessage").style.display = "none"; // Hide after 5 seconds
  }, 5000);

  submitButton.disabled = false; // Re-enable button after submission
});




// Show the expanded img modal and insert the clicked img.
function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        var modal = document.getElementById("img-bg-modal");

        expandImg.src = imgs.src;
        modal.style.display = "flex"; // Using flex to center in viewport

        // imgText.innerHTML = imgs.alt;
        document.getElementById("img-bg-modal").style.display = "block";
    }

// Close Button IMG Modal
document.querySelector('.imgModal-close').addEventListener("click", function() {
	document.querySelector('.img-bg-modal').style.display = "none";
});

// Close IMG modal on escape button 
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.img-bg-modal').style.display = "none";
  }
})

// Close IMG modal when clicking outside the image
document.getElementById("img-bg-modal").addEventListener("click", function(event) {
  var expandImg = document.getElementById("expandedImg");
  if (!expandImg.contains(event.target)) {
      document.getElementById("img-bg-modal").style.display = "none";
  }
});








// Page Tabs changing function
function openPage(evt, pgName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("pageContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("pageLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pgName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




// Needl Work Pg Tabs changing function
function openNeedle(evt, pgName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("needleTabContent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("needleTabLinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pgName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenNeedle").click();




// Excibition Pg Tabs changing function
function openExhibition(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("exhibitionTabContent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("exhibitionTabLinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenExhibition").click();