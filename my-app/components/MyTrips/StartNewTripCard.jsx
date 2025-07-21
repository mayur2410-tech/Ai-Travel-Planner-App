import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

  const router = useRouter()

  return (
    <View style={{
      padding: 20,
      marginTop: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 25
    }}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 25,
        marginLeft:12
      }}>No trips planned yet</Text>
      <Text style={{
        fontFamily: 'outfit-light',
        fontSize: 20,
        textAlign: 'center',
        color: 'gray'
      }}>Looks like its time to plan a new travel experience! Get Started below
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/create-trip/search-place')}
        style={{
          backgroundColor: 'black',
          padding: 15,
          borderRadius: 15,
          paddingHorizontal: 30


        }}>
        <Text style={{
          color: 'white',
          fontFamily: 'outfit-medium',
          fontSize: 17
        }}>
            Start  a new trip
        </Text>
      </TouchableOpacity>


    </View>
  )
}