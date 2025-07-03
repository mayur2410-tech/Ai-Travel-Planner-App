import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { useEffect,useState,useContext } from 'react';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { SelectBudgetOptions } from '../create-trip/constant/Option';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectBudget() {

const navigation = useNavigation();
const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const router = useRouter()

useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  useEffect(() => {
    selectedOption&&setTripData({ ...tripData, budget: selectedOption?.title });
  }, [selectedOption]);

  const onClickContinue =()=>{
    if (!selectedOption) {
      ToastAndroid.show('Please select a budget option',ToastAndroid.LONG);
      return;
    }

    router.push('/create-trip/review-trip');
  }

  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: 'white',
        height: '100%',
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Budget</Text>
<View style={{
    marginTop: 20,
}}>
    <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 18,
       
    }}>
        Choose spending habits for your trip
    </Text>
    <FlatList 
    data={SelectBudgetOptions}
    renderItem={({item})=>(
        <TouchableOpacity style={{
            marginVertical: 10,
        }}
        onPress={()=> setSelectedOption(item)}
        >
            <OptionCard option={item} selectedOption={selectedOption}  /> 
            </TouchableOpacity>
    )}
     />
</View>
 <TouchableOpacity 
       onPress={onClickContinue}
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