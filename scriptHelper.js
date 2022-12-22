// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
                <img src="${imageUrl}"> `
   
}

function validateInput(testInput) {

        let numberInput = Number(testInput);
        if (testInput === "")
        {
            return "Empty";
        }
        else if (isNaN(numberInput))
        {
            return "Not a Number";
        }
        else if (isNaN(numberInput) === false)
        {
            return "Is a Number";
        }
     }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
            alert("All fields in form are required!");
        } else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === 'Is a number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoMass) === 'Not a Number') {
            alert("Check that your inputs are correct!");
        } else {

            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for takeoff.`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for takeoff.`;
            let status = document.getElementById('launchStatus');

            if(fuelLevel < 10000) {

                        fuelStatus.textContent = 'Fuel level too low for launch';
                        status.style.color = "rgb(199, 37, 78)";
                        status.textContent = 'Shuttle not ready to launch';
                    } else if (cargoLevel > 10000) {
                        cargoStatus.textContent = 'Cargo mass too heavy for launch';
                        status.style.color = "rgb(199, 37, 78)";
                        status.textContent = 'Shuttle not ready to launch.';
                    } else (fuelLevel > 10000 && cargoLevel < 10000); {
                        cargoStatus.textContent = 'Cargo mass low enough for launch';
                        fuelStatus.textContent = 'Fuel level high enough for launch';
                        status.textContent = 'Shuttle is ready to launch.';
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

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     let div = document.getElementById("missionTarget");
//     div.innerHTML = `
//                  <h2>Mission Destination</h2>
//                  <ol>
//                      <li>Name: ${name}</li>
//                      <li>Diameter: ${diameter}</li>
//                      <li>Star: ${star}</li>
//                      <li>Distance from Earth: ${distance}</li>
//                      <li>Number of Moons: ${moons}</li>
//                  </ol>
//                  <img src="${imageUrl}">
//                  `;
//  }
 
//  function validateInput(testInput) {
//     let numberInput = Number(testInput);
//     if (testInput === "")
//     {
//         return "Empty";
//     }
//     else if (isNaN(numberInput))
//     {
//         return "Not a Number";
//     }
//     else if (isNaN(numberInput) === false)
//     {
//         return "Is a Number";
//     }
//  }
 
//  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     let fuel = document.getElementById("fuelStatus");
//     let cargo = document.getElementById("cargoStatus");
//     let pilotStatus = document.getElementById("pilotStatus");
//     let copilotStatus = document.getElementById("copilotStatus");
 
//     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
//         alert("All fields are required!");
//     } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
//         alert("Make sure to enter valid information for each field!");
//     } else {
//         list.style.visibility = "visible";
//         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
//         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
//         let launchStatus = document.getElementById("launchStatus");
//         if (fuelLevel < 10000 && cargoLevel <= 10000) {
//             fuel.innerHTML = "Fuel level too low for launch";
//             cargo.innerHTML = "Cargo mass low enough for launch"
//             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//             launchStatus.style.color = "#C7254E";
//         } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
//             fuel.innerHTML = "Fuel level high enough for launch"
//             cargo.innerHTML = "Cargo mass too heavy for launch";
//             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//             launchStatus.style.color = "#C7254E";
//         } else if (fuelLevel < 10000 && cargoLevel > 10000) {
//             fuel.innerHTML = "Fuel level too low for launch";
//             cargo.innerHTML = "Cargo mass too heavy for launch";
//             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//             launchStatus.style.color = "#C7254E";
//         } else {
//             fuel.innerHTML = "Fuel level high enough for launch"
//             cargo.innerHTML = "Cargo mass low enough for launch"
//             launchStatus.innerHTML = "Shuttle is Ready for Launch";
//             launchStatus.style.color = "#419F6A";
//         }
//     }
//  }
 
//  async function myFetch() {
//      let planetsReturned;
 
//      planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//              if (response.status >= 400) {
//                  throw new Error ("Bad response");
//              }
//              else {
//                  return response.json();
//              }
//          });
 
//      return planetsReturned;
//  }
 
//  function pickPlanet(planets) {
//      let index = Math.floor(Math.random()*planets.length);
//      return planets[index];
//  }
