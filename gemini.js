
// const dotenv = require("dotenv");
// dotenv.config();
const { GoogleGenerativeAI }  = require("@google/generative-ai");
// console.log(process.env.REACT_APP_GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI("AIzaSyAeHDLGmLeP8M8L_NIEjOfGZUgVme2g_gQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getGeminiCompletion(messages, prompt) {
    try {
      const result = await model.generateContent(prompt);
      const res = result.response.text()
      return res;
    } catch (error) {
      console.error('Error fetching Gemini completion:', error);
      return { content: 'Error fetching response from AI.' };
    }
}

const tripPrompt = localStorage.getItem("tripPrompt");

async function  getOutput(){
  const output = await getGeminiCompletion("", tripPrompt);
  localStorage.setItem("output");
  console.log(output);
}

getOutput();

// document.addEventListener("DOMContentLoaded", function() {
//   const tripPrompt = localStorage.getItem('tripPrompt');
  
//   if (tripPrompt) {
//       // Make the API call (using gemini.js) here
//       const output = getGeminiCompletion("", tripPrompt);  // This will be a call to your API handler
//       document.getElementById('trip-details').innerHTML = <pre>${output}</pre>;
//   }
// });

// module.exports = { getGeminiCompletion };