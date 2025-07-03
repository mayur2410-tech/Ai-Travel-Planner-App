import { View, Text,TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState ,useContext} from 'react';
import { useNavigation, useRouter } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {
  const navigation = useNavigation();

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
    const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log('Selected date:', date, 'Type:', type);
    if (type === 'END_DATE') {
      setSelectedEndDate(moment(date));
    } else {
      setSelectedStartDate(moment(date));
      setSelectedEndDate(null);
    }
  };


  const onDateSelection = () => {

      if(!selectedStartDate || !selectedEndDate){
         ToastAndroid.show(
          'Please select a date range',ToastAndroid.LONG)
          return
      }
      const totalNoOfDays = selectedEndDate.diff(selectedStartDate, 'days') + 1;
    console.log(totalNoOfDays)
    setTripData({...tripData, 
      startDate: selectedStartDate,
       endDate: selectedEndDate,
        totalDays: totalNoOfDays
       });

    router.push('/create-trip/select-budget');
  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>

      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor:"black"
          }}
          selectedDayTextStyle={{
            color:'white'
          }}
        />
      </View>
       <TouchableOpacity 
       onPress={onDateSelection}
            style={{
              padding:15,
              backgroundColor:'black',
                borderRadius:15,
                marginTop:35,
                
      
            }}>
              <Text style={{
                color:'white',
                fontFamily:'outfit-medium',
                textAlign:'center',
                fontSize:20
              }}>Continue</Text>
            </TouchableOpacity>
    </View>
  );
}
