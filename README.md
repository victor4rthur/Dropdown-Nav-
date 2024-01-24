# Dropdown Menu Code Explanation
https://victor4rthur.github.io/Dropdown-Nav-Transition/

This code implements a dropdown menu functionality on a web page. 
The dropdown is triggered when hovering over specific elements with the class 'cool' that are direct children of `<li>` elements. 
The dropdown effect includes a background that expands and positions itself based on the size and position of the dropdown menu.

## Code Structure

### Variables
- `triggers`: Selects all elements with the class 'cool' that are direct children of `<li>` elements.
- `background`: Selects the element with the class 'dropdownBackground'.
- `nav`: Selects the element with the class 'top'.

### Event Handling Functions
1. `handleEnter`: Handles the mouseenter event on trigger elements.
   - Adds the class 'trigger-enter' to the current trigger element.
   - After a delay of 150 milliseconds, adds the class 'trigger-enter-active' if 'trigger-enter' class is still present.
   - Adds the class 'open' to the background element.
   - Calculates the size and position of the dropdown and sets the background accordingly.

2. `handleLeave`: Handles the mouseleave event on trigger elements.
   - Removes 'trigger-enter' and 'trigger-enter-active' classes from the current trigger element.
   - Removes the 'open' class from the background element.

### Event Listeners
- Adds event listeners to each trigger element for mouseenter and mouseleave events, calling the respective handling functions.

## Usage
Include the provided JavaScript code in your web project to enable a dropdown menu with the described behavior.

Feel free to customize the code according to your specific requirements.
