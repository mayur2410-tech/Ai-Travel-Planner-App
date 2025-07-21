export const SelectTraveller = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveles in exploration',
        icon: '✈️',
        people: '1'

    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '⛵',
        people: '5 to 10 People'
    },
]


export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💰',
        // budget: '$50 - $100'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💵',
        // budget: '$100 - $200'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '💎',
        // budget: '$200+'
    },
]




export const AI_PROMPT = "  Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details , Flight Price with Booking url, Hotels options list with HotelName,hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit  nearby With placeName, Place Details, Place Image Url , Geo Coordinates, ticket prices time to travel each of location in {totalDays} day and {totalNight} night with each day plan with best time to visit it in JSON format"
// export const modelInstruction = "";
export const modelInstruction = `
You are a travel planning assistant. Please generate a strictly structured JSON response as described below, with all values filled based on the user's travel prompt.

⚠️ Only return a valid JSON object, no markdown or text.

📦 JSON STRUCTURE FORMAT:

{
  "USA_DATA": {
    "travelPlan": {
      "location": "<City, State, Country>",
      "duration": "<e.g. 4 Days and 3 Nights>",
      "travelerType": "<e.g. Couple, Solo, Family>",
      "budget": "<e.g. Moderate, Luxury, Budget>",
      "bestTimeToVisit": "<Short paragraph on the ideal seasons to visit>",
      "flightDetails": {
        "airline": "<Airline name>",
        "flightNumber": "<e.g. B6 510>",
        "departureAirport": "<Full Name (IATA)>",
        "arrivalAirport": "<Full Name (IATA)>",
        "departureDateTime": "<ISO format: YYYY-MM-DDTHH:MM:SSZ>",
        "arrivalDateTime": "<ISO format: YYYY-MM-DDTHH:MM:SSZ>",
        "price": "<e.g. Approx. $400 USD round-trip>",
        "bookingUrl": "<Link to booking page>"
      },
      "hotelOptions": [
        {
          "hotelName": "<Name of hotel>",
          "address": "<Full address>",
          "pricePerNight": "<e.g. Approx. $350 USD>",
          "imageUrl": "<Public image URL>",
          "geoCoordinates": {
            "latitude": <float>,
            "longitude": <float>
          },
          "rating": <float from 1.0 to 5.0>,
          "description": "<Brief but vivid description>"
        }
      ],
      "dailyItinerary": [
        {
          "day": <integer>,
          "theme": "<Daily theme>",
          "schedule": [
            {
              "timeOfDay": "<Morning, Afternoon, Evening with time range>",
              "activity": "<Brief description of activity>",
              "placeName": "<Name of attraction/place>",
              "placeDetails": "<Brief description of what to do or see>",
              "placeImageUrl": "<Image URL>",
              "geoCoordinates": {
                "latitude": <float>,
                "longitude": <float>
              },
              "ticketPrice": "<e.g. $25 per person or Free>",
              "travelTimeToNextLocation": "<e.g. 15 minutes walk or N/A>"
            }
          ]
        }
      ]
    }
  }
}

📌 Rules:
- Include real-world, accurate and current destinations, hotels, and landmarks.
- Every field in the JSON must be filled. No null or placeholder values.
- Ensure geoCoordinates are accurate to each place.
- Avoid adding extra text outside the JSON.
- If there are multiple hotel options or schedule items, provide at least 2–3.

📍 Reminder:
Do not wrap the JSON in triple backticks or include any commentary. Only the raw JSON is allowed in the output.
`;



export const AI_PROMPT1 = `
Generate a travel plan in JSON format with the following structure and details:

- Wrap the entire response in \`\`\`json ... \`\`\`.
- Top-level key should be "{location}"
- The structure inside "{location}" should include:
  - location (e.g. "{location}")
  - duration (e.g. "{totalDays} Days and {totalNight} Nights")
  - travelerType (e.g. "{traveler}")
  - budget (e.g. "{budget}")
  - bestTimeToVisit
  - flightDetails:
      - airline, flightNumber, departureAirport, arrivalAirport, departureDateTime, arrivalDateTime, price, bookingUrl
  - hotelOptions (array of 3-5):
      - hotelName, address, pricePerNight, imageUrl, geoCoordinates (latitude, longitude), rating, description
  - dailyItinerary (array per day):
      - day, theme, schedule (array of 3 per day):
          - timeOfDay, activity, placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPrice, travelTimeToNextLocation

          Requirements:
- Use actual, publicly accessible image URLs for all images (no placeholder domains like example.com).
- Only use images from reliable sources (e.g. actual hotel, tourism websites, TripAdvisor, Google Maps, or Wikimedia).
- Ensure all geoCoordinates are accurate to the places mentioned.
- imageUrl / placeImageUrl must be valid, testable links to JPEG or PNG images that exist on the web (no made-up paths).
- Do not fabricate image URLs. Use only verifiable sources.


Target:
- Location: {location}
- Duration: {totalDays} Days and {totalNight} Nights
- Traveler Type: {traveler}
- Budget: {budget}
- Travel Dates: {dates} {dates}

Return valid, parseable JSON only, wrapped in \`\`\`json ... \`\`\`, with no extra commentary.
          `