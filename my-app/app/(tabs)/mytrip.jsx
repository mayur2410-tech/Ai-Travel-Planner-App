import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {


const [userTrips,setUserTrips] = useState([]);

  return (
    <View style={{
      padding:25,
      paddingTop: 55,
      backgroundColor: 'white',
      height: '100%',
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:35
      }}>My Trips</Text>
              <Ionicons name="add-circle" size={45} color="black" />

      </View>

      {userTrips?.length==0?
      <StartNewTripCard />:null
      
      
      }
    </View>
  )
}