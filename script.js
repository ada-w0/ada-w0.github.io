const results = [0, 0, 0, 0, 0]; // Store points for each result

// Get all the question blocks
const questions = document.querySelectorAll('.question');

// Iterate over each question and add an event listener to its choices
questions.forEach((question, questionIndex) => {
    const choices = question.querySelectorAll('.choice'); // Get all choices for the current question

    choices.forEach(choice => {
        choice.addEventListener('click', function() {
            // Remove the "selected" class from all choices in this question
            choices.forEach(button => button.classList.remove('selected'));
            
            // Add the "selected" class to the clicked button
            this.classList.add('selected');

            // Get the points value from the "data-points" attribute
            const points = parseInt(this.getAttribute('data-points'));

            // Update the results array based on the points value of the selected choice
            const resultIndex = parseInt(this.getAttribute('data-result'));
            results[resultIndex] += points;
        });
    });
});

document.getElementById('submit').addEventListener('click', function() {
    let maxResult = Math.max(...results);
    let maxIndex = results.indexOf(maxResult);

    let resultText = '';
    switch (maxIndex) {
        case 0:
            resultText = "Switch more of your lights to LEDs! This will be more energy-efficient. Even better, you can install motion-activated ones.";
            break;
        case 1:
            resultText = "Install some solar panels! Along with the extra energy, you'll get tax benefits ;). Also, you can get a free solar assessment with the Solarize Eastside project.";
            break;
        case 2:
            resultText = "Set your thermostat lower by a few degrees, or get a self-adjusting one! This will save energy used for heating.";
            break;
        case 3:
            resultText = "Invest in better insulation! In the long term, you'll save a lot of energy used for heating.";
            break;
        case 4:
            resultText = "Take shorter showers! Reducing your showers by just a couple of minutes will save energy used for heating water. An added benefit is that it'll reduce water usage itself, too!";
            break;
        default:
            resultText = "Unknown result";
    }

    document.getElementById('resultText').innerText = resultText;
    document.getElementById('result').style.display = 'block';
});
