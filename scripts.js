// Get a reference to the header element
const header = document.querySelector('header');

// Function to change the background color on mouseover
function changeBackgroundColor() {
    header.style.backgroundColor = '#ff9900';
}

// Function to revert the background color on mouseout
function revertBackgroundColor() {
    header.style.backgroundColor = '#007bff';
}

// Add the 'mouseover' event listener to the header
header.addEventListener('mouseover', changeBackgroundColor);

// Add the 'mouseout' event listener to the header
header.addEventListener('mouseout', revertBackgroundColor);
