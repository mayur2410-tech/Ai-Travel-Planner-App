import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { useEffect,useContext } from 'react';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function ReviewTrip() {

    const navigation = useNavigation();
    const router = useRouter();
      const { tripData, setTripData } = useContext(CreateTripContext);
    

    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
        });
      }, []);
  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: 'white',
        height: '100%',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20
      }}>Review your Trip</Text>

      <View >
        <Text style={{
        marginTop: 20,
        fontSize:18,
        fontFamily:'outfit-bold',
        // color: 'gray',
        
      }}>Before generating your trip ,  please review your selection</Text>


{/* desination info */}
<View style={{
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
}}>
    {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
    <Text style={{
      fontSize:30
    }}>📍</Text>
    <View>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          color:'gray'
        }}>Destination</Text>
      <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          // marginBottom: 5
        }} >{tripData[0]?.name}</Text>

    </View>
</View>


{/* date info */}
<View style={{
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
}}>
    {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
    <Text style={{
      fontSize:30
    }}>📆</Text>
    <View>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          color:'gray'
        }}>Selected Dates</Text>
      <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          // marginBottom: 5
        }} > {tripData.startDate?.format('DDMMM')} To {tripData.endDate?.format('DDMMM')}  ({tripData.totalDays} days)</Text>

    </View>
</View>


{/* family info */}
<View style={{
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
}}>
    {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
    <Text style={{
      fontSize:30
    }}>🚌</Text>
    <View>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          color:'gray'
        }}>Who is Travelling</Text>
      <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          // marginBottom: 5
        }} >{tripData.traveler.title}</Text>

    </View>
</View>


{/* budget info */}
<View style={{
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
}}>
    {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
    <Text style={{
      fontSize:30
    }}>💰</Text>
    <View>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          color:'gray'
        }}>Budget</Text>
      <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          // marginBottom: 5
        }} >{tripData.budget}</Text>

    </View>
</View>

      </View>
       <TouchableOpacity 
             onPress={() => {
                router.push('/create-trip/generate-trip');  }}
                
                  style={{
                    padding:15,
                    backgroundColor:'black',
                      borderRadius:15,
                      marginTop:80,
                      
            
                  }}>
                    <Text style={{
                      color:'white',
                      fontFamily:'outfit-medium',
                      textAlign:'center',
                      fontSize:20
                    }}>Build My trip</Text>
                  </TouchableOpacity>
    </View>
  )
}