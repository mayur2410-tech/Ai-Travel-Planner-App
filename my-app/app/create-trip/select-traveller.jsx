import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState ,useContext} from 'react'
import { useNavigation,useRouter } from 'expo-router';
import { SelectTraveller } from './constant/Option';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectTraveler() {

  const navigation = useNavigation();
  const router = useRouter();
const [selectedTravaler,setSelectedTraveler]=useState()
  const { tripData, setTripData } = useContext(CreateTripContext);

  

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

useEffect(()=>{
  setTripData({...tripData,traveler:selectedTravaler})
},[selectedTravaler])

useEffect(()=>{
  console.log(tripData)
},[tripData])

  return (
    <View style={{
      padding:25,
      paddingTop:70,
      backgroundColor:'white',
      height:'100%',
    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20
      }}>Who's Traveling</Text>

      <View style={{
        marginTop:10
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:23,
    
        }}> Choose your traveles</Text>

        <FlatList
        data={SelectTraveller}
        renderItem={({item,index})=>(
          <TouchableOpacity 
          onPress={()=>setSelectedTraveler(item)}
          style={{
            marginVertical:10,
          }}>
           <OptionCard  option={item} selectedOption={selectedTravaler}/>
          </TouchableOpacity>
        

        )

        } />


       

      </View>
      <TouchableOpacity 
      onPress={()=>router.push('/create-trip/select-dates')}
      style={{
        padding:15,
        backgroundColor:'black',
          borderRadius:15,
          marginTop:20,
          

      }}>
        <Text style={{
          color:'white',
          fontFamily:'outfit-medium',
          textAlign:'center',
          fontSize:20
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}