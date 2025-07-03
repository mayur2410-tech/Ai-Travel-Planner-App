import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { useContext,useEffect } from 'react';
import {Video} from 'expo-av';
import LottieView from 'lottie-react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from './constant/Option';

export default function GenerateTrip() {


      const { tripData, setTripData } = useContext(CreateTripContext);

useEffect(()=>{
  tripData&&GenerateAiTrip();
},[tripData])

      const GenerateAiTrip =()=>{
        const FINAL_PROMPT= AI_PROMPT
        .replace('{location}', tripData[0]?.name)
        .replace('{totalDays}',tripData.totalDays)
        .replace('{totalNight}',tripData.totalDays-1)
        .replace('{traveler}',tripData.traveler.title)
        .replace('{budget}',tripData.budget)
        .replace('{totalDays}',tripData.totalDays)
        .replace('{totalNight}',tripData.totalDays-1)
        console.log("Generate Trip Data", FINAL_PROMPT);
      }


  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: 'white',
        height: '100%',
    }}>
      <Text 
      style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        // marginTop: 20,
        textAlign: 'center',
      }}>
        Please Wait...
      </Text>
      <Text 
      style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginTop: 40,
        textAlign: 'center',
      }}>
        We are working to generate your dream trip!
      </Text>

     <LottieView
        source={require('../../assets/lottie/Animation - 1751541924016.json')}
        autoPlay
        loop
        style={{
            width:300,
            height:300,
            alignSelf: 'center',
        }}
      />
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize: 20,
        color:'gray',
        textAlign: 'center',
       
      }}>Do not Go Back</Text>
    </View>
  )
}