// import {getGeminiCompletion} from './gemini.js';

// document.addEventListener("DOMContentLoaded", function () {
//     // Retrieve the prompt from localStorage
//     const tripPrompt = localStorage.getItem("tripPrompt");

//     async function  getOutput(){
//         const output = await getGeminiCompletion("", prompt);
//         console.log(output);
//     }
//     getOutput();

    // if (tripPrompt) {
    //     // Display the prompt
    //     document.getElementById("trip-details").textContent = `Prompt: ${tripPrompt}`;

    //     // Optional: Use the prompt to call the API
    //     // Example:
    //     // callGeminiAPI(tripPrompt).then(response => {
    //     //     document.getElementById("trip-details").innerHTML = response;
    //     // });
    // } else {
    //     document.getElementById("trip-details").textContent = "No trip details found.";
    // }
// });
const output = localStorage.getItem("output");

document.querySelector(".outputBox").innerText = output;