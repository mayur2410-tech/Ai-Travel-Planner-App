// // screens/generate-trip.jsx

// import { View, Text } from 'react-native';
// import React, { useContext, useEffect, useState } from 'react';
// // import { router } from 'expo-router';
// import { useRouter } from 'expo-router';
// import LottieView from 'lottie-react-native';
// import { CreateTripContext } from '../../context/CreateTripContext';
// import { AI_PROMPT } from './constant/Option';
// import { generateTravelPlan } from '../../configs/AiModal';
// import { modelInstruction } from './constant/Option.js';
// export default function GenerateTrip() {
//   const { tripData } = useContext(CreateTripContext);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     if (tripData) GenerateAiTrip();
//   },[]);

//   const GenerateAiTrip = async () => {
//     console.log("🚀 GenerateAiTrip() started");
//     setLoading(true);

//     const FINAL_PROMPT =
    
//     AI_PROMPT
//       .replace('{location}', tripData[0]?.name)
//       .replaceAll('{totalDays}', tripData.totalDays)
//       .replaceAll('{totalNight}', tripData.totalDays - 1)
//       .replace('{traveler}', tripData.traveler.title)
//       .replace('{budget}', tripData.budget)
//       .replaceAll('{totalDays}', tripData.totalDays)
//       .replaceAll('{totalNight}', tripData.totalDays - 1);

//     console.log("🧠 Prompt Sent to Gemini:", FINAL_PROMPT);
  

// // console.log("🧠 Model Instruction:", modelInstruction);

// try {
//   console.log("ai is resposnding");
//     const result = await generateTravelPlan(FINAL_PROMPT, modelInstruction);
//     console.log("AI response:", JSON.stringify(result, null, 2));
//     router.push('(tabs)/mytrip');
//   } catch (error) {
//     console.error('🚨 Error:', error.message);
//   }


//     setLoading(false);
//   };

//   return (
//     <View style={{ padding: 25, paddingTop: 75, backgroundColor: 'white', height: '100%' }}>
//       <Text style={{ fontFamily: 'outfit-bold', fontSize: 35, textAlign: 'center' }}>
//         Please Wait...
//       </Text>
//       <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, marginTop: 40, textAlign: 'center' }}>
//         We are working to generate your dream trip!
//       </Text>

//       <LottieView
//         source={require('../../assets/lottie/Animation - 1751541924016.json')}
//         autoPlay
//         loop
//         style={{ width: 300, height: 300, alignSelf: 'center' }}
//       />

//       <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, color: 'gray', textAlign: 'center' }}>
//         Do not Go Back
//       </Text>
//     </View>
//   );
// }




import { View, Text, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT1 } from './constant/Option.js';
import { generateTripPlan } from '../../configs/test-ai.js';
import { generateTravelPlan } from '../../configs/AiModal';
import { modelInstruction } from './constant/Option.js';
import { doc, setDoc } from 'firebase/firestore';
import { db,auth } from '../../configs/firebaseConfig'; // Adjust the import path as necessary

export default function GenerateTrip() {
  const { tripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    GenerateAiTrip();
  }, []);  //

  const GenerateAiTrip = async () => {
    console.log('🚀 GenerateAiTrip() started');
    setLoading(true);

    try {
      const FINAL_PROMPT = AI_PROMPT1
        .replace('{location}', tripData[0]?.name || 'Unknown Location')
        .replace('{location}', tripData[0]?.name || 'Unknown Location')
        .replace('{location}', tripData[0]?.name || 'Unknown Location')
         .replaceAll('{totalDays}', tripData.totalDays || 1)
        .replaceAll('{totalNight}', (tripData.totalDays - 1) || 0)
        .replace('{traveler}', tripData.traveler?.title || 'Unknown Traveler')
        .replace('{budget}', tripData.budget || 'Unknown Budget')
        .replace('{location}', tripData[0]?.name || 'Unknown Location')
        .replaceAll('{totalDays}', tripData.totalDays || 1)
        .replaceAll('{totalNight}', (tripData.totalDays - 1) || 0)
        .replace('{traveler}', tripData.traveler?.title || 'Unknown Traveler')
        .replace('{budget}', tripData.budget || 'Unknown Budget')
        .replace('{dates}', tripData.startDate || 'No Dates Provided')
        .replace('{dates}', tripData.endDate || 'No Dates Provided')
        

      console.log('🧠 Prompt Sent to Gemini:', FINAL_PROMPT);
      console.log("email,", auth.currentUser?.email);

      const trip = await generateTripPlan(FINAL_PROMPT);
    console.log('🟢 Trip JSON:', JSON.stringify(trip, null, 2));
      
   
     
     
      const docId = (Date.now()).toString()
      const docRef = doc(db, "UserTrips", docId);
      await setDoc(docRef,{
              userEmail: auth.currentUser?.email,
              tripPlan: trip,   //Ai result
              tripData: JSON.stringify(tripData), 
              docId:docId //user data
             
      })
      // console.log('📜 Trip Data to be saved:',docRef.path);

      if(docRef.path) {
        console.log('✅ Trip successfully saved to Firestore');
        router.push('(tabs)/mytrip');
      }

    } catch (error) {
      console.warn('⚠️ Trip generation failed:', error.message);
      console.error('🚨 GenerateAiTrip Error:', error.message, error.stack);
      Alert.alert(
        'Error',
        error.message.includes('MAX_TOKENS')
          ? 'The trip plan is too complex. Try again later or simplify your request.'
          : 'Failed to generate trip plan. Please check your API quota or try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 25, paddingTop: 75, backgroundColor: 'white', height: '100%' }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 35, textAlign: 'center' }}>
        Please Wait...
      </Text>
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, marginTop: 40, textAlign: 'center' }}>
        We are working to generate your dream trip!
      </Text>
      <LottieView
        source={require('../../assets/lottie/Animation - 1751541924016.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300, alignSelf: 'center' }}
      />
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, color: 'gray', textAlign: 'center' }}>
        Do not Go Back
      </Text>
    </View>
  );
}