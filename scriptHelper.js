// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.

   let spaceMission = document.getElementById("missionTarget");

   spaceMission.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${image}"> `
   
}

function validateInput(testInput) {

        if (testInput === "")
        {
            return "Empty";
        }
        else if (isNaN(testInput))
        {
            return "Not a Number";
        }
        else if (typeof testInput === 'number')
        {
            return "Is a Number";
        }
     }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
            alert("All fields in form are required!");
        } else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === 'Is a number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
            alert("Check that your inputs are correct!");
        } else {

            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            let status = document.getElementById('launchStatus');

            if(fuelLevel < 10000 && cargoLevel <= 10000) {

                        fuelStatus.innerHTML = 'Fuel level too low for launch';
                        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
                        status.style.color = "rgb(199, 37, 78)";
                        status.innerHTML = 'Shuttle Not Ready For Launch';
                    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
                        fuelStatus.innerHTML = 'Fuel level high enough for launch';
                        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
                        status.style.color = "rgb(199, 37, 78)";
                        status.innerHTML = 'Shuttle Not Ready For Launch';
                    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
                        fuelStatus.innerHTML = 'Fuel level too low for launch';
                        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
                        status.style.color = "rgb(199, 37, 78)";
                        status.innerHTML = 'Shuttle Not Ready For Launch';
                    }    else {
                        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
                        fuelStatus.innerHTML = 'Fuel level high enough for launch';
                        status.innerHTML = 'Shuttle is Ready for Launch';
                        status.style.color = "rgb(65, 159, 106)";
                    }
        }
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        
        return response.json();

        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanets = Math.floor(Math.random()*planets.length);
    return planets[randomPlanets];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

