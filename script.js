// Write your JavaScript code here!

// const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch()
  listedPlanetsResponse.then(function(result) {
    listedPlanets = result;
    console.log(listedPlanets);
  }).then(function() {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    const planet = pickPlanet(listedPlanets)
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
  })

  const pilot = document.querySelector('#pilotName')
  const copilot = document.querySelector('#copilotName')
  const fuelLevel = document.querySelector('#fuelLevel')
  const cargoMass = document.querySelector('#cargoMass')
  const list = document.querySelector("#faultyItems");
  const form = document.querySelector('#formSubmit')

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  })
  // form.addEventListener('submit', formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass))
});
