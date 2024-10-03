// script.js

let aLocation = ['Indoor tennis courts', 'The roof of the JFSB', 'Po The Panda', 'Maker Space BYU Library', 
    'Take a selfie with a bunch of students', 'Underground Library Parking', 'Music Building 3012 practice room', 
    'Get inside a heritage Building', 'Get inside Helaman Halls'];

// Function to get a random index from the array
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function to start the game and display the first random task
function startGame() {
    if (aLocation.length > 0) {
        const randomIndex = getRandomIndex(aLocation);
        document.getElementById('output').textContent = aLocation[randomIndex];  // Show the random task
        aLocation.splice(randomIndex, 1);  // Remove the selected task from the array
        showNextButton();  // Display the "Next Challenge" button
    }
}

// Function to move to the next random task
function nextChallenge() {
    if (aLocation.length > 0) {
        const randomIndex = getRandomIndex(aLocation);
        document.getElementById('output').textContent = aLocation[randomIndex];  // Show the random task
        aLocation.splice(randomIndex, 1);  // Remove the selected task from the array
    } else {
        document.getElementById('output').textContent = "Congratulations! You finished the game.";
        document.getElementById('buttonContainer').innerHTML = '';

        // Create the 'Start Over' button
        const startOverButton = document.createElement('button');
        startOverButton.textContent = 'Start Over'; // Button text
        startOverButton.id = 'startOverButton'; // Button id

        // Append the button to the 'buttonContainer'
        document.getElementById('buttonContainer').appendChild(startOverButton);

        // Add the reload functionality to the button
        startOverButton.addEventListener('click', function(){
            location.reload(); // Refreshes the page
        });
    }   
}

// Function to create the "Next Challenge" button
function showNextButton() {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = '';  // Clear any existing buttons

    const newButton = document.createElement('button');  // Create a new button element
    newButton.textContent = "Next Challenge";  // Set button text
    newButton.id = 'newButton';  // Set button ID
    
    buttonContainer.appendChild(newButton);  // Add the new button to the container
    newButton.addEventListener('click', nextChallenge);  // Link the button to nextChallenge function
}
