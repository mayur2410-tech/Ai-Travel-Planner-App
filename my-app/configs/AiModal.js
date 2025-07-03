// To run this code you need to install the following dependencies:
// npm install @google/genai mime
require('dotenv').config(); // If using a .env file to store your GEMINI_API_KEY

const { GoogleGenAI } = require('@google/genai');

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'application/JSON',
  };

  const model = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for Location : New York,NY USA, for 4 Days and 3 Night for Friends with a Luxury budget with a Flight details , Flight Price with Booking url, Hotels options list with HotelName,hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit  nearby With placeName, Place Details, Place Image Url , Geo Coordinates, ticket prices time to travel each of location in 4 day and 3 night with each day plan with best time to visit it in JSON format`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Designing the Itinerary**\n\n...`, // Your full prompt text continues
        },
        {
          text: "```json\n{ ... JSON TRIP DATA ... }\n```" // Your JSON object
        }
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`, // This can be replaced with follow-up prompts
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main().catch(console.error);
