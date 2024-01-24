// Select all elements with class 'cool' that are direct children of <li> elements
const triggers = document.querySelectorAll('.cool > li');
// Select the element with class 'dropdownBackground'
const background = document.querySelector('.dropdownBackground');
// Select the element with class 'top'
const nav = document.querySelector('.top');

// Function to handle mouseenter event on triggers
function handleEnter() {
    // Add class 'trigger-enter' to the current trigger element
    this.classList.add('trigger-enter');
    
    // Set a timeout to add class 'trigger-enter-active' after 150 milliseconds,
    // but only if 'trigger-enter' class is still present (to handle edge cases)
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 150);
    
    // Add class 'open' to the background element
    background.classList.add('open');

    // Find the dropdown element within the current trigger
    const dropdown = this.querySelector('.dropdown');
    // Get the position and size of the dropdown and nav elements
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    // Calculate the coordinates relative to the nav element
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
    };

    // Set the width, height, and position of the background element based on dropdown coordinates
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// Function to handle mouseleave event on triggers
function handleLeave() {
    // Remove 'trigger-enter' and 'trigger-enter-active' classes from the current trigger element
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    // Remove 'open' class from the background element
    background.classList.remove('open');
}

// Add event listeners to each trigger element for mouseenter and mouseleave events
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
