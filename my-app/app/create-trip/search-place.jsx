// import React, { useEffect, useState,useContext } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
// import { useNavigation, useRouter } from 'expo-router';
// import axios from 'axios';
// import { CreateTripContext } from '../../context/CreateTripContext';
// export default function Searchplace() {
//   const navigation = useNavigation();
//   const router=useRouter();
//   const [query, setQuery] = useState('');
//   // const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//    const {tripData, setTripData} = useContext(CreateTripContext);

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: 'Search Place',
//     });
//   }, []);

//   const fetchPlaces = async (text) => {
//     if (!text) return;
//     setLoading(true);

//     try {
//       const options = {
//         method: 'GET',
//         url: 'https://google-map-places.p.rapidapi.com/maps/api/place/textsearch/json',
//         params: {
//           query: text,
//           region: 'in',
//           language: 'en',
//           // rankby: 'prominence',w
//           opennow: 'false',
//         },
//         headers: {
//           'x-rapidapi-key': 'baeaa5d59emsh93d9133554d7b6bp17517ejsn20919181c92c',
//           'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
//         },
//       };

//       const response = await axios.request(options);
//       const data = response.data;

//       const simplifiedResults = data.results
//         .filter((place) => {
//           const types = place.types || [];
//           return (
//             types.includes('locality') ||
//             types.includes('sublocality') ||
//             types.includes('tourist_attraction') ||
//             types.includes('political')
//           );
//         })
//         .map((place) => ({
//           name: place.name,
//           coordinates: place.geometry?.location,
//           photoRef: place.photos?.[0]?.photo_reference || null,
//           url: place.place_id,
//         }));

//       setTripData(simplifiedResults);
//     } catch (error) {
//       console.error('Error fetching places:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//   const delayDebounce = setTimeout(() => {
//     if (query.trim()) {
//       fetchPlaces(query.trim());
//     }
//   }, 3000); // wait 600ms after user stops typing

//   return () => clearTimeout(delayDebounce);
// }, [query]);


// useEffect(()=>{
//   console.log('Trip Data:', tripData);
// },[tripData])

//   return (
//     <View style={styles.container}>
//      <TextInput
//   placeholder="Search a place"
//   value={query}
//   onChangeText={(text) => {
//     setQuery(text); // only update query here
//   }}
//   style={styles.input}
// />

//       {loading ? (
//         <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />
//       ) : (
//         <FlatList
//           data={tripData}
//           keyExtractor={(item) => item.url}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.item}
//             onPress={()=>{router.push('/create-trip/select-traveller')}}>
//               <Text style={styles.title}>{item.name}</Text>
//               <Text style={styles.subtitle}>
//                 {item.coordinates?.lat}, {item.coordinates?.lng}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     paddingTop: 75,
//     backgroundColor: 'white',
//     height: '100%',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 20,
//     marginTop: 30
//   },
//   item: {
//     padding: 15,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   subtitle: {
//     color: '#666',
//     marginTop: 4,
//   },
// });



import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from '../../context/CreateTripContext';
import axios from 'axios';
export default function Searchplace() {
  const navigation = useNavigation();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const { tripData, setTripData } = useContext(CreateTripContext);

  const useMock = true; // Set to false to use real API

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search Place',
    });
  }, []);

  const fetchPlaces = async (text) => {
    if (!text) return;
    setLoading(true);

    try {
      if (useMock) {
        // Mocked test data
        const mockData = [
          {
            name: 'Taj Mahal',
            coordinates: { lat: 27.1751, lng: 78.0421 },
            photoRef: null,
            url: 'place_id_1',
          },
          {
            name: 'Gateway of India',
            coordinates: { lat: 18.921984, lng: 72.834654 },
            photoRef: null,
            url: 'place_id_2',
          },
          {
            name: 'India Gate',
            coordinates: { lat: 28.612864, lng: 77.229316 },
            photoRef: null,
            url: 'place_id_3',
          },
        ];

        setTimeout(() => {
          setTripData(mockData);
          setLoading(false);
        }); // simulate network delay
        return;
      }

      // --- Real API call (disabled for mock) ---
     
      const options = {
        method: 'GET',
        url: 'https://google-map-places.p.rapidapi.com/maps/api/place/textsearch/json',
        params: {
          query: text,
          region: 'in',
          language: 'en',
          opennow: 'false',
        },
        headers: {
          'x-rapidapi-key': 'baeaa5d59emsh93d9133554d7b6bp17517ejsn20919181c92c',
          'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      const data = response.data;

      const simplifiedResults = data.results
        .filter((place) => {
          const types = place.types || [];
          return (
            types.includes('locality') ||
            types.includes('sublocality') ||
            types.includes('tourist_attraction') ||
            types.includes('political')
          );
        })
        .map((place) => ({
          name: place.name,
          coordinates: place.geometry?.location,
          photoRef: place.photos?.[0]?.photo_reference || null,
          url: place.place_id,
        }));

      setTripData(simplifiedResults);
      
    } catch (error) {
      console.error('Error fetching places:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        fetchPlaces(query.trim());
      }
    }, 1000); // shorter delay for testing

    return () => clearTimeout(delayDebounce);
  }, [query]);

  useEffect(() => {
    console.log('Trip Data:', tripData);
  }, [tripData]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search a place"
        value={query}
        onChangeText={(text) => {
          setQuery(text);
        }}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={tripData}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                router.push('/create-trip/select-traveller');
              }}
            >
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>
                {item.coordinates?.lat}, {item.coordinates?.lng}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: 'white',
    height: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 30,
  },
  item: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: '#666',
    marginTop: 4,
  },
});
