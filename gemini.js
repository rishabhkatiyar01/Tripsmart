const dotenv = require("dotenv");
dotenv.config();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey});

async function getGeminiCompletion(messages, prompt) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${prompt}`,
      });
      console.log(response);
      return response.text;
    } catch (error) {
      console.error('Error fetching Gemini completion:', error);
      return { content: 'Error fetching response from AI.' };
    }
}

const tripPrompt = localStorage.getItem("tripPrompt");

async function  getOutput(){
  const output = await getGeminiCompletion("", tripPrompt);
  // console.log(output);
  localStorage.setItem("output", output);
  window.location.href = "output2.html";
}
getOutput();