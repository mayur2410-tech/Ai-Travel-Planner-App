import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import Login from '../../components/Login'
import { useRouter } from 'expo-router';
import { auth } from '../../configs/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../configs/firebaseConfig';
import UserTripList from '../../components/MyTrips/UserTripList';
export default function MyTrip() {


const [userTrips,setUserTrips] = useState([]);
const [loading, setLoading] = useState(false);

// console.log('length',userTrips.length);

const user = auth.currentUser;
useEffect(()=>{
user&& GetMyTrips();
},[])

const GetMyTrips= async() =>{
  setLoading(true);
  setUserTrips([]);
  const q = query(collection(db, "UserTrips"), where("userEmail", "==", user.email));
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

  console.log(doc.id, " => ", doc.data());
  setUserTrips(prevTrips => [...prevTrips,doc.data() ]);
});
setLoading(false);
}


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
      }}> My Trips</Text>
              <Ionicons name="add-circle" size={45} color="black" />



      </View>
      {loading&&<ActivityIndicator size={'large'} color={'gray'}/>}

      {userTrips?.length==0?
      <StartNewTripCard />:<UserTripList  userTrips={userTrips}/>
      
      
      }
    </View>
  )
}