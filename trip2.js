let destination = "";
let days = "";
let budget = "";
let companion = "";

function setDestination(){
    destination = document.getElementById("destination").value;
}

function setDays(){
    days = document.getElementById("days").value;
}

function selectBudget(budgetType){
    budget = budgetType;
}

function selectCompanion(companionType){
    companion = companionType;
}

function generateTrip() {
    // Get the selected destination and days
    // Construct the prompt
    const prompt = `Create a travel itinerary for a trip to ${destination} for ${days} days. Budget: ${budget}. Traveling with: ${companion}.`;
    console.log(prompt);

    // Save the prompt in localStorage and redirect to output.html
    localStorage.setItem('tripPrompt', prompt);
    window.location.href = "output.html";
}