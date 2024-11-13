// Average speeds in mph
const avgSpeeds = {
    walk: 3,        // Walking speed in mph
    bike: 10,       // Biking speed in mph
    road: 25,       // Driving on city roads in mph
    highway: 65     // Driving on highways in mph
};

// Calories burned per mile
const caloriesPerMile = {
    walk: 65,
    bike: 50
};

// Emissions per mile (lbs of CO2)
const emissionsPerMile = {
    road: 0.74,     // City roads (typical emissions for urban driving)
    highway: 0.74   // Highways (typically lower emissions per mile)
};


const injuryRisk = {
    walk: 0.5,     // Lower risk per mile for walking
    bike: 1.2,      // Higher risk per mile for biking
    road: 0.3,      // Moderate risk per mile in city driving
    highway: 0.2    // Lower risk per mile on highways (due to controlled conditions)
};

// Main function to calculate the impact
function calculateImpact() {
    const distance = parseFloat(document.getElementById("distance").value);

    // Ensure the user input is valid
    if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid distance!");
        return;
    }

    // Calculate for walking
    const walkTime = distance / avgSpeeds.walk; // Time in hours
    const walkCalories = distance * caloriesPerMile.walk;
    const walkInjuryRisk = distance * injuryRisk.walk;

    // Calculate for biking
    const bikeTime = distance / avgSpeeds.bike;
    const bikeCalories = distance * caloriesPerMile.bike;
    const bikeInjuryRisk = distance * injuryRisk.bike;

    // Calculate for driving on city roads
    const roadTime = distance / avgSpeeds.road;
    const roadEmissions = distance * emissionsPerMile.road;
    const roadInjuryRisk = distance * injuryRisk.road;

    // Calculate for driving on highways
    const highwayTime = distance / avgSpeeds.highway;
    const highwayEmissions = distance * emissionsPerMile.highway;
    const highwayInjuryRisk = distance * injuryRisk.highway;

    // Display results with separate sections and columns
    document.getElementById("results").innerHTML = `
        <!-- Ensure results container is visible after calculation -->
        <h3>Results for ${distance} miles:</h3>

        <div class="results-container">
            <!-- Walking and Biking side by side -->
            <div class="transport-section">
                <h3><strong>Walking:</strong></h3>
                <p><strong>Time:</strong> ${walkTime.toFixed(2)} hours</p>
                <p><strong>Calories Burned:</strong> ${walkCalories.toFixed(0)} cal</p>
                <p><strong>Injury Risk:</strong> ${walkInjuryRisk}%</p>
            </div>

            <div class="transport-section">
                <h3><strong>Biking:</strong></h3>
                <p><strong>Time:</strong> ${bikeTime.toFixed(2)} hours</p>
                <p><strong>Calories Burned:</strong> ${bikeCalories.toFixed(0)} cal</p>
                <p><strong>Injury Risk:</strong> ${bikeInjuryRisk}%</p>
            </div>
        </div>

        <div class="results-container">
            <!-- City roads and Highway side by side -->
            <div class="transport-section">
                <h3><strong>Driving (City Roads):</strong></h3>
                <p><strong>Time:</strong> ${roadTime.toFixed(2)} hours</p>
                <p><strong>Emissions:</strong> ${roadEmissions.toFixed(2)} lbs CO2</p>
                <p><strong>Injury Risk:</strong> ${roadInjuryRisk}%</p>
            </div>

            <div class="transport-section">
                <h3><strong>Driving (Highway):</strong></h3>
                <p><strong>Time:</strong> ${highwayTime.toFixed(2)} hours</p>
                <p><strong>Emissions:</strong> ${highwayEmissions.toFixed(2)} lbs CO2</p>
                <p><strong>Injury Risk:</strong> ${highwayInjuryRisk}%</p>
            </div>
            <p>Keep in mind that even though risk of injury driving is lower than biking, the chance of a fatal injury is higher.</p>
            <br>
            <p>PS: It is assumed that your roads have sidewalks and bike lanes, and that you own a gas powered vehicle. Otherwise, please ignore certain statistics as needed. More customizable results are currently WIP!</p>

        </div>
    `;

    // Show the results box
    document.getElementById("results").style.display = "block"; // Make results visible
}
