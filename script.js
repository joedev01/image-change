// Select the image from HTML
let image = document.getElementById("myImage");

// Select the button from HTML
let button = document.getElementById("changeBtn");

// Store all pictures inside an array
let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];

// Start from the first picture
let currentIndex = 0;

// Listen for button clicks
button.addEventListener("click", function() {

    // Move to the next picture
    currentIndex++;

    // Check if we have reached the last picture
    if (currentIndex >= images.length) {

        // Go back to the first picture
        currentIndex = 0;
    }

    // Display the selected picture
    image.src = images[currentIndex];

});