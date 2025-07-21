// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyBVOT6KYRAK8CmY9tjJKW3GcpsfOlvn0zI",
//   });
 
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
   
//     responseMimeType: 'application/json',
//   };
//   const model = 'gemini-2.5-pro';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `Generate Travel Plan for Location : USA, for 4 Days and 3 Night for family with a moderate budget with a Flight details , Flight Price with Booking url, Hotels options list with HotelName,hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit  nearby With placeName, Place Details, Place Image Url , Geo Coordinates, ticket prices time to travel each of location in 4 day and 3 night with each day plan with best time to visit it in JSON format`,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `**Identifying Potential Destinations**

// I've begun by searching for "4-day family-friendly moderate budget itineraries in USA" and similar phrases. My goal is to pinpoint appealing cities or regions that fit the criteria. The aim is to gather initial options before narrowing the search. I plan to refine by identifying "best places to visit" for a family trip. I'm focusing on the first step: building an initial, broad shortlist.


// **Expanding Destination Search**

// I've broadened my initial search terms to include "Best places to visit in the USA for a 4-day family trip on a moderate budget," aiming to uncover more potential destinations. Next, I'll select the most promising location and delve into family-friendly accommodations, activities, and average flight costs. After gathering comprehensive data, I will construct a 4-day itinerary, ready for assembly in JSON format.


// **Evaluating Trip Options**

// I've gathered some promising destinations for a 4-day, mid-budget family trip within the USA. Road trips like the Blue Ridge Parkway and Lake Michigan Circle Tour seem appealing, along with a few city options. Next, I'll analyze the logistics of each, like time constraints and activity preferences, to refine the list further.


// **Prioritizing San Antonio**

// I'm now zeroing in on San Antonio, Texas, as the most viable option. It's emerged as a strong contender due to its family-friendly attractions and manageable 4-day itinerary potential. My focus is on developing a detailed travel plan, which includes researching flight details and hotel options. I'm also planning a 4-day itinerary.


// **Pinpointing San Antonio Focus**

// I've gathered initial search results for a 4-day, moderate-budget family trip within the USA. Road trip options like the Blue Ridge Parkway and Lake Michigan Circle Tour stand alongside city destinations: San Antonio, Myrtle Beach, and Charleston. While national parks like the Great Smoky Mountains and Yellowstone surfaced, their size made them less ideal for this short timeframe. My current focus is refining this list and building a detailed plan for San Antonio.


// **Discovering San Antonio Options**

// I've assembled a wealth of details about San Antonio, pinpointing its suitability for budget-conscious families. Specifically, I have flight cost ranges from numerous US cities and compiled a list of family-friendly accommodations. I've also begun to explore the best attractions and activities.


// **Consolidating San Antonio Data**

// I'm now organizing the San Antonio data into a structured format. I'm focusing on creating a cohesive flight details section, including a sample departure city with a price and booking link. Next, I'm curating a list of top hotel options, ensuring all required details like addresses, coordinates, and descriptions are included. Finally, I'll develop a detailed 4-day itinerary using the collected attraction information.


// **Finalizing Itinerary Details**

// I'm currently focused on populating the detailed 4-day itinerary with all required data points. This includes descriptions, image URLs, geo-coordinates, ticket prices, and estimated travel times between locations. I'm actively searching for missing details, such as image URLs and precise geo-coordinates, to ensure the JSON response is complete and accurate. The hotel section is mostly ready, now I just need the itinerary to be up to the same standard.


// **Constructing a Framework**

// I have successfully compiled geo-coordinates, image search outcomes, ticket prices, and operating hours for the San Antonio hotels and attractions. With this data solidified, I am now set to structure the information.


// **Generating JSON Structure**

// I've assembled a comprehensive dataset of San Antonio travel essentials. Geo-coordinates and image results for hotels and attractions are ready. Ticket prices and operating hours are also in hand. I am now focused on translating this data into the prescribed JSON format, ready for generating a thorough travel plan.


// `,
//         },
//         {
//           text: `\`\`\`json
// {
//   "travelPlan": {
//     "location": "USA",
//     "duration": {
//       "days": 4,
//       "nights": 3
//     },
//     "budget": "Moderate",
//     "travelers": "Family",
//     "bestTimeToVisit": "Spring (March-May) or Fall (September-November) for pleasant weather.",
//     "flightDetails": {
//       "description": "Round-trip flights to San Antonio International Airport (SAT). Prices can vary based on departure city and time of booking.",
//       "flightPrice": "Approx. $250 - $400 per person (round-trip) from a major US hub like Chicago.",
//       "bookingUrl": "https://www.google.com/flights"
//     },
//     "hotelOptions": [
//       {
//         "hotelName": "Drury Plaza Hotel San Antonio Riverwalk",
//         "hotelAddress": "105 S St Mary's St, San Antonio, TX 78205, USA",
//         "price": "Approx. $180 - $250 per night",
//         "hotelImageUrl": "https://www.druryhotels.com/content/images/property/0046/hotelfeature/large/0046_feature.jpg",
//         "geoCoordinates": {
//           "latitude": 29.4237,
//           "longitude": -98.4914
//         },
//         "rating": 4.6,
//         "description": "Housed in the former Alamo National Bank building, this hotel offers a rooftop pool with views of the city, free hot breakfast, and evening snacks and beverages. Its location on the Riverwalk provides easy access to many attractions."
//       },
//       {
//         "hotelName": "Hyatt Regency San Antonio Riverwalk",
//         "hotelAddress": "123 Losoya St, San Antonio, TX 78205, USA",
//         "price": "Approx. $200 - $300 per night",
//         "hotelImageUrl": "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/01/17/1548/Hyatt-Regency-San-Antonio-P272-Exterior-Riverwalk.jpg/Hyatt-Regency-San-Antonio-P272-Exterior-Riverwalk.16x9.jpg",
//         "geoCoordinates": {
//           "latitude": 29.4249,
//           "longitude": -98.4882
//         },
//         "rating": 4.5,
//         "description": "Directly on the Riverwalk and next to the Alamo, this hotel features a rooftop pool, multiple restaurants, and spacious rooms with balconies overlooking the river or the city."
//       },
//       {
//         "hotelName": "Hotel Contessa - Luxury Suites on the Riverwalk",
//         "hotelAddress": "306 W Market St, San Antonio, TX 78205, USA",
//         "price": "Approx. $220 - $350 per night",
//         "hotelImageUrl": "https://www.thehotelcontessa.com/images/1700x960/main-contessa-exteriorday-31-1678910403.jpg",
//         "geoCoordinates": {
//           "latitude": 29.423,
//           "longitude": -98.494
//         },
//         "rating": 4.5,
//         "description": "An all-suite hotel on a quieter stretch of the Riverwalk, offering a heated rooftop pool, a spa, and a restaurant with riverside seating. The spacious suites are ideal for families."
//       }
//     ],
//     "dailyPlan": [
//       {
//         "day": 1,
//         "title": "Arrival and Riverwalk Exploration",
//         "placesToVisit": [
//           {
//             "placeName": "San Antonio Riverwalk",
//             "placeDetails": "A network of walkways along the banks of the San Antonio River, one story beneath the streets of downtown. Lined with restaurants, shops, and hotels, it's the heart of the city's social scene.",
//             "placeImageUrl": "https://www.visitsanantonio.com/wp-content/uploads/2022/04/River-Walk-Website-Banner.jpg",
//             "geoCoordinates": {
//               "latitude": 29.4241,
//               "longitude": -98.4912
//             },
//             "ticketPrices": "Free to walk around. Boat tours are available for a fee.",
//             "timeToTravel": "Accessible directly from many downtown hotels."
//           },
//           {
//             "placeName": "GO RIO San Antonio River Cruises",
//             "placeDetails": "Narrated 35-minute boat tours that provide a great overview of the history and architecture of the Riverwalk.",
//             "placeImageUrl": "https://www.goriocruises.com/wp-content/uploads/2019/12/Go-Rio-Cruises-Homepage-Carousel-1.jpg",
//             "geoCoordinates": {
//               "latitude": 29.4241,
//               "longitude": -98.4912
//             },
//             "ticketPrices": "Adults: ~$14.50, Children (1-5): ~$8.50",
//             "timeToTravel": "Multiple boarding locations along the Riverwalk."
//           }
//         ],
//         "bestTimeToVisit": "Late afternoon for a walk, and evening for a boat tour to see the lights."
//       },
//       {
//         "day": 2,
//         "title": "History and Culture",
//         "placesToVisit": [
//           {
//             "placeName": "The Alamo",
//             "placeDetails": "An 18th-century Spanish mission and fortress, famous for the 1836 battle. A must-see for its historical significance to Texas and the United States. Free general admission, but timed entry reservations are recommended.",
//             "placeImageUrl": "https://www.thealamo.org/assets/images/2023-images/2023-general-images/Alamo-Church-Rallston-Plaza.jpg",
//             "geoCoordinates": {
//               "latitude": 29.4259,
//               "longitude": -98.4861
//             },
//             "ticketPrices": "Free general admission. [24] Some exhibits and tours have a fee.",
//             "timeToTravel": "Short walk from most downtown hotels."
//           },
//           {
//             "placeName": "San Antonio Missions National Historical Park",
//             "placeDetails": "A UNESCO World Heritage site that preserves four of the five Spanish frontier missions in San Antonio. These missions are a testament to the cultural exchange between Spanish and indigenous peoples. The missions are Mission Concepción, Mission San José, Mission San Juan, and Mission Espada. [9, 11]",
//             "placeImageUrl": "https://www.nps.gov/saan/planyourvisit/images/Concepcion-Front-2016_1.jpg",
//             "geoCoordinates": {
//               "latitude": 29.3617,
//               "longitude": -98.4803
//             },
//             "ticketPrices": "Free admission.",
//             "timeToTravel": "About a 15-20 minute drive south of downtown. A car or rideshare is recommended to visit all four missions."
//           }
//         ],
//         "bestTimeToVisit": "Morning for The Alamo to avoid crowds, and the afternoon for the Missions."
//       },
//       {
//         "day": 3,
//         "title": "Family Fun Day",
//         "placesToVisit": [
//           {
//             "placeName": "San Antonio Zoo",
//             "placeDetails": "Home to over 750 species, the San Antonio Zoo is a great place for a family outing. It's known for its cageless exhibits and beautiful setting within Brackenridge Park. [3, 8]",
//             "placeImageUrl": "https://sazoo.org/wp-content/uploads/2022/10/SA-Zoo-Fall-22-Homepage-Carousel-Update-10.3.22.jpg",
//             "geoCoordinates": {
//               "latitude": 29.4648,
//               "longitude": -98.4719
//             },
//             "ticketPrices": "Adults: ~$31.99, Children (3-11): ~$27.99",
//             "timeToTravel": "About a 10-15 minute drive from downtown."
//           },
//           {
//             "placeName": "Witte Museum",
//             "placeDetails": "A museum dedicated to natural history, science, and South Texas heritage. It offers many interactive exhibits that are engaging for both children and adults.",
//             "placeImageUrl": "https://www.wittemuseum.org/wp-content/uploads/2019/08/Witte-Museum-Exterior-Photo-by-Stacy-Sodt.jpg",
//             "geoCoordinates": {
//               "latitude": 29.4619,
//               "longitude": -98.4672
//             },
//             "ticketPrices": "Adults: ~$15, Children (4-11): ~$10",
//             "timeToTravel": "Located near the San Antonio Zoo in Brackenridge Park."
//           }
//         ],
//         "bestTimeToVisit": "Morning for the Zoo and afternoon for the Witte Museum."
//       },
//       {
//         "day": 4,
//         "title": "Thrills and Departure",
//         "placesToVisit": [
//           {
//             "placeName": "Six Flags Fiesta Texas",
//             "placeDetails": "A large theme park with numerous roller coasters, water rides (in season), shows, and attractions for all ages. A great way to spend a final day of fun.",
//             "placeImageUrl": "https://www.sixflags.com/fiestatexas/wp-content/uploads/sites/10/2023/03/SFFT_DrDiabolicals_2022_95-scaled.jpg",
//             "geoCoordinates": {
//               "latitude": 29.5995,
//               "longitude": -98.6094
//             },
//             "ticketPrices": "Daily tickets start around $45 online. [2]",
//             "timeToTravel": "About a 20-25 minute drive from downtown."
//           }
//         ],
//         "bestTimeToVisit": "Plan for a full day of activities, arriving at opening time to maximize the experience."
//       }
//     ]
//   }
// }
// \`\`\``,
//         },
//       ],
//     },
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `Please ensure the JSON is well-structured, with all required fields filled in. The output should be a complete travel plan for a family trip to San Antonio, Texas, including flight details, hotel options, and a detailed 4-day itinerary with places to visit.`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   let fullText = '';
//   for await (const chunk of response) {
//   if (chunk.text) {
//     fullText += chunk.text;
//   }
// }

// // Clean and parse the JSON-like response
// try {
//   // Extract the JSON only (ignoring surrounding explanation or Markdown)
//   const jsonStart = fullText.indexOf('{');
//   const jsonEnd = fullText.lastIndexOf('}');
//   const jsonString = fullText.slice(jsonStart, jsonEnd + 1);

//   // Attempt to parse
//   const parsedJson = JSON.parse(jsonString);

//   // Pretty print in the console
//   console.log(JSON.stringify(parsedJson, null, 2));
// } catch (error) {
//   console.error('❌ Failed to parse JSON:', error.message);
//   console.log('\n🔍 Raw model output:\n', fullText);
// }

// }

// main();


// AiModal.js
// import { GoogleGenAI } from '@google/genai';
// // import { modelInstruction } from '../app/create-trip/constant/Option';
// export async function generateTravelPlan(userPrompt, modelInstruction = '') {
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyBVOT6KYRAK8CmY9tjJKW3GcpsfOlvn0zI",
//   });

//   const model = 'gemini-2.5-pro';

//   const contents = [
//     {
//       role: 'user',
//       parts: [{ text: userPrompt }],
//     },
//   ];

//   if (modelInstruction) {
//     contents.push({
//       role: 'model',
//       parts: [{ text: modelInstruction }],
//     });
//   }

//   console.log('📡 Requesting Gemini response...');

//   try {
//     const result = await ai.models.generateContent({
//       model,
//       contents,
//       generationConfig: {
//         temperature: 0.7,
//         topK: 40,
//         topP: 0.95,
//         maxOutputTokens: 2048,
//       },
//     });

//     const fullText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';

//     console.log('📦 Gemini Raw Output:', fullText);

//     // Try to clean and parse as JSON
//     const cleanText = fullText.replace(/```json|```/g, '').trim();
//     const jsonStart = cleanText.indexOf('{');
//     const jsonEnd = cleanText.lastIndexOf('}');
//     const jsonString = cleanText.slice(jsonStart, jsonEnd + 1);

//     const parsedJson = JSON.parse(jsonString);
//     return parsedJson;
//   } catch (error) {
//     console.error('❌ Failed to parse JSON:', error.message);
//     throw error;
//   }
// }



import { GoogleGenerativeAI } from '@google/generative-ai';
// import { GEMINI_API_KEY } from '@env'; // Use react-native-dotenv for API key

export async function generateTravelPlan(userPrompt, modelInstruction = '', retries = 3, delay = 25000) {
  const ai = new GoogleGenerativeAI("AIzaSyBVOT6KYRAK8CmY9tjJKW3GcpsfOlvn0zI");
  const model = 'gemini-2.5-pro'; // Switch to flash for better limits

  const contents = [
    { role: 'user', parts: [{ text: userPrompt }] },
    ...(modelInstruction ? [{ role: 'model', parts: [{ text: modelInstruction }] }] : []),
  ];

  console.log('📡 Requesting Gemini response with prompt:', userPrompt);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const tokenCount = await ai.getGenerativeModel({ model }).countTokens({ contents });
      console.log('Token Count:', tokenCount);

      const result = await ai.getGenerativeModel({ model }).generateContent({
        contents,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192, // Increased to allow detailed JSON response
        },
      });

      console.log('📦 Gemini Full Response:', JSON.stringify(result, null, 2));

      // Check for MAX_TOKENS truncation
      if (result.response?.candidates?.[0]?.finishReason === 'MAX_TOKENS') {
        console.warn('⚠️ Response truncated due to MAX_TOKENS');
        if (attempt < retries) {
          console.log(`⏳ Retrying with simplified prompt or higher token limit (attempt ${attempt + 1})...`);
          continue;
        } else {
          throw new Error('Response truncated due to MAX_TOKENS after maximum retries');
        }
      }

      const fullText = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      if (!fullText) throw new Error('No content returned from Gemini API');

      console.log('📜 Gemini Raw Text Output:', fullText);

      // Extract JSON from response
      const cleanText = fullText.replace(/```json|```/g, '').trim();
      console.log('🧹 Cleaned Text:', cleanText);

      if (!cleanText.startsWith('{') || !cleanText.endsWith('}')) {
        throw new Error('Response is not valid JSON');
      }

      return JSON.parse(cleanText);
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed:`, error.message, error.stack);
      if (attempt < retries && (error.message.includes('429') || error.message.includes('MAX_TOKENS'))) {
        console.log(`⏳ Retrying after ${delay / 1000}s...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw new Error(`Failed to parse Gemini response as JSON: ${error.message}`);
      }
    }
  }
}