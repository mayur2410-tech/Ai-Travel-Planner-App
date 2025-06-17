import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter,useNavigation } from 'expo-router';
// import { getBackgroundColorAsync } from 'expo-system-ui';
import { useEffect } from 'react';
export default function Login() {

  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);



  return (
    <View>
      <Image
        source={require('../assets/images/login.png')}
        style={{
          width: '100%',
          height: 480,
        }}
      />
      <View style={styles.cointainer}>
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'outfit',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>

        <Text
          style={{
            fontFamily: 'outfit-regular',
            fontSize: 16,
            textAlign: 'center',
            color: 'gray',
            marginTop: 15,
            lineHeight: 22,
            // paddingHorizontal: ,
          }}
        >
          Discover your next adventure effortlessly. Personalized
          itineraries at your fingertips. Travel smarter with AI-driven
          insights.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text
          onPress={() => router.push('/auth/sign-in')}
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'outfit',
              fontSize: 17,
            }}
          >
            Get Started
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    backgroundColor: 'white',
    marginTop: -30,
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 40,
  },
  button: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 99,
    marginTop: 60,
    // marginHorizontal: 20,
  },
});
