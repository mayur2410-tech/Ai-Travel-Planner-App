const axios = require('axios');

async function fetchPlaces(query) {
  try {
    const options = {
      method: 'GET',
      url: 'https://google-map-places.p.rapidapi.com/maps/api/place/textsearch/json',
      params: {
        query,
        region: 'in',
        language: 'en',
        // rankby: 'prominence',
        opennow: 'false'
      },
      headers: {
        'x-rapidapi-key': 'baeaa5d59emsh93d9133554d7b6bp17517ejsn20919181c92c',
        'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const data = response.data;

    const simplifiedResults = data.results
      .filter(place => {
        const types = place.types || [];
        return (
          types.includes('locality') ||
          types.includes('sublocality') ||
          types.includes('tourist_attraction') ||
          types.includes('political')
        );
      })
      .map(place => ({
        name: place.name,
        location: place.geometry?.location,
        photo_reference: place.photos?.[0]?.photo_reference || null,
        place_id: place.place_id
      }));

    console.log(simplifiedResults);
    return simplifiedResults;
  } catch (error) {
    console.error('Error fetching places:', error.message);
    return [];
  }
}

// Example usage:
fetchPlaces('New York,NY, USA');
