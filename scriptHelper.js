// Write your helper functions here!
// require('isomorphic-fetch');

// function to alert user that all fields are required

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){

        let pilotInput = document.querySelector("input[name=pilotName");
        let copilotInput = document.querySelector("input[name=copilotName");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel");
        let cargoMassInput = document.querySelector("input[name=cargoMass");

        if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields in form are required!");
            event.preventDefault();
        }
    }); 
});

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

if (testInput === '') {
    return 'Empty';
} else if (typeof testInput === 'number'){
    return 'Is a number';
} else if (isNaN(testInput)) {
    return 'Not a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
