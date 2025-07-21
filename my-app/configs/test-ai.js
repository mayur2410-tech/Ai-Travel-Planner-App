// // import axios from "axios";
// // import { generateTripFromGemini } from "./AiModal.js";

// // // import { generateTripFromGemini } from './aimodal.js'; // adjust path if needed

// // const testPrompt = `
// // Generate Travel Plan for New York, NY, USA for 3 Days and 2 Nights.
// // Traveler Type: Couple
// // Budget: Luxury
// // Output Format: JSON
// // Return only JSON
// // `;

// // async function runTest() {
// //   try {
// //     const response = await generateTripFromGemini(testPrompt);
// //     console.log('✅ AI Response:\n', response);
// //   } catch (error) {
// //     console.error('❌ Test Failed:', error);
// //   }
// // }

// // runTest();



// // Ensure you have installed the SDK: npm install @google/generative-ai

// import  { GoogleGenerativeAI } from '@google/generative-ai';

// // Load your API key from an environment variable
// // For production, always use environment variables or a secure secret management system
// // For development, you can set it directly like process.env.GEMINI_API_KEY = "YOUR_API_KEY";
// const API_KEY = process.env.jeevankey;

// if (!API_KEY) {
//   console.error('GEMINI_API_KEY environment variable is not set. Please set it to your Gemini API key.');
//   process.exit(1);
// }

// const genAI = new GoogleGenerativeAI(API_KEY);

// /**
//  * Sends a prompt to the Gemini API and logs the response to the console.
//  * @param {string} userPrompt The prompt to send to the Gemini model.
//  */
// async function getGeminiResponse(userPrompt) {
//   try {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

//     console.log(`Sending prompt: "${userPrompt}"`);

//     const result = await model.generateContent(userPrompt);
//     const response = await result.response;
//     const text = response.text();

//     console.log('\n--- Gemini Response ---');
//     console.log(text);
//     console.log('-----------------------');

//   } catch (error) {
//     console.error('Error getting Gemini response:', error);
//     if (error.response && error.response.data) {
//       console.error('Error details:', error.response.data);
//     }
//   }
// }

// // Example usage (you can call this function with your desired prompt)
// // To run this:
// // 1. Save the file as, e.g., `gemini_console.js`
// // 2. Set your API key as an environment variable: `export GEMINI_API_KEY="YOUR_API_KEY_HERE"`
// //    (On Windows, use `set GEMINI_API_KEY="YOUR_API_KEY_HERE"`)
// // 3. Run from your terminal: `node gemini_console.js`
// //    (Or modify the prompt here and just run `node gemini_console.js` directly)
// (async () => {
//   const myPrompt = "Generate Travel Plan for New York, NY, USA for 3 Days and 2 Nights.Traveler Type: Couple Budget: LuxuryOutput Format: JSON Return only JSON";
//   await getGeminiResponse(myPrompt);

  
// })();



// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import { GoogleGenAI } from '@google/genai';

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyBVOT6KYRAK8CmY9tjJKW3GcpsfOlvn0zI", // replace with your actual API key
//   });

//   const tools = [
//     {
//       googleSearch: {}, // keep tools if you want Gemini to use external info
//     },
//   ];

//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     tools,
//     responseMimeType: 'text/plain', // must be text/plain if using tools
//   };

//   const model = 'gemini-2.5-pro';

//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `
// Generate a travel plan in JSON format with the following structure and details:

// - Wrap the entire response in \`\`\`json ... \`\`\`.
// - Top-level key should be "USA_DATA"
// - The structure inside "USA_DATA" should include:
//   - location (e.g. "New York, NY, USA")
//   - duration (e.g. "4 Days and 3 Nights")
//   - travelerType (e.g. "Couple")
//   - budget (e.g. "Moderate")
//   - bestTimeToVisit
//   - flightDetails:
//       - airline, flightNumber, departureAirport, arrivalAirport, departureDateTime, arrivalDateTime, price, bookingUrl
//   - hotelOptions (array of 3-5):
//       - hotelName, address, pricePerNight, imageUrl, geoCoordinates (latitude, longitude), rating, description
//   - dailyItinerary (array per day):
//       - day, theme, schedule (array of 3 per day):
//           - timeOfDay, activity, placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPrice, travelTimeToNextLocation

// Target:
// - Location: New York, NY, USA
// - Duration: 4 Days and 3 Nights
// - Traveler Type: A Couple
// - Budget: Moderate
// - Departure Airport: ORD (Chicago O’Hare)
// - Arrival Airport: JFK (New York)
// - Travel Dates: October 10 - October 13, 2024

// Return valid, parseable JSON only, wrapped in \`\`\`json ... \`\`\`, with no extra commentary.
//           `
//         },
//       ],
//     },
//   ];

//   try {
//     const response = await ai.models.generateContentStream({
//       model,
//       config,
//       contents,
//     });

//     let fullResponse = '';
//     for await (const chunk of response) {
//       fullResponse += chunk.text;
//     }

//     // Extract JSON inside code block
//     const match = fullResponse.match(/```json\s*([\s\S]*?)```/);
//     if (match && match[1]) {
//       try {
//         const jsonData = JSON.parse(match[1]);
//         console.log('✅ Parsed JSON Response:');
//         console.dir(jsonData, { depth: null });
//       } catch (err) {
//         console.error('❌ Failed to parse JSON:', err);
//       }
//     } else {
//       console.error('❌ No JSON block found in the response.');
//     }
//   } catch (error) {
//     console.error('❌ AI request failed:', error.message || error);
//   }
// }

// main();


// import { GoogleGenAI } from '@google/genai';

// export async function getTravelPlan(promptText) {
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyBVOT6KYRAK8CmY9tjJKW3GcpsfOlvn0zI",
//   });

//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     tools: [
//       { googleSearch: {} },
//     ],
//     responseMimeType: 'text/plain',
//   };

//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         { text: promptText },
//       ],
//     },
//   ];

//   try {
//     const response = await ai.models.generateContentStream({
//       model: 'gemini-2.5-pro',
//       config,
//       contents,
//     });

//     let fullResponse = '';
//     for await (const chunk of response) {
//       fullResponse += chunk.text;
//     }

//     const match = fullResponse.match(/```json\s*([\s\S]*?)```/);
//     if (match && match[1]) {
//       return JSON.parse(match[1]);
//     } else {
//       throw new Error('No JSON block found in the response.');
//     }
//   } catch (error) {
//     console.error('AI Error:', error.message || error);
//     throw error;
//   }
// }



import axios from 'axios';

export async function generateTripPlan(promptText) {
  const apiKey = 'AIzaSyBVOT6KYRAK8CmY9tjJKW3GcpsfOlvn0zI'; // 🔐 Keep this secret and secure
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`;

  const body = {
    contents: [
      {
        role: 'user',
        parts: [{ text: promptText }],
      },
    ],
  };

  try {
    const res = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseText = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const match = responseText.match(/```json\s*([\s\S]*?)```/);

    if (match && match[1]) {
      return JSON.parse(match[1]);
    } else {
      throw new Error('No valid JSON in Gemini response');
    }
  } catch (err) {
    console.error('❌ Gemini error:', err.message || err);
    throw err;
  }
}
