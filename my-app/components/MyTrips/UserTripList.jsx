import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';

export default function UserTripList({ userTrips }) {

    const LatestTrip = JSON.parse(userTrips[0]?.tripData);

    // console.log('usertripssss',userTrips[0]?.tripPlan?.Goa?.location);
  return (
    <View>
      <View style={{
        marginTop: 20,
      }}>
        <Image source={require('../../assets/images/login.png')} 
        style={{
            width: "100%",
            height: 220,
            objectFit: 'cover',
            borderRadius: 15,
        }}
        />
        <View style={{
            marginTop: 10,
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20,
          
            }}>{userTrips[0]?.tripPlan?.Goa?.location}</Text>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:5
            }}>
<Text style={{
    fontFamily:'outfit-medium',
    fontSize:17,
    color:"gray"
}}>{moment(LatestTrip?.startDate).format('DD MMM YYYY')}</Text>
<Text style={{
    fontFamily:'outfit-medium',
    fontSize:17,
     color:"gray"
}}>🚌{LatestTrip.traveler.title}</Text>
</View>

<TouchableOpacity style={{
    backgroundColor:'black',
    padding:15,
    borderRadius:15,
    marginTop:10
}}>
    <Text style={{
        color:'white',
        textAlign:'center',
        
    }}>See your plan</Text>
</TouchableOpacity>
        </View>
      </View>
    </View>
  )
}