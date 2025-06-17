


import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../../../configs/firebaseConfig'

export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const handleSignUp = async () => {
    if (!fullName || !email || !password) {
      Alert.alert('All fields are required');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Optional: update display name
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      Alert.alert('Account Created!');
      router.replace('/auth/sign-in'); // or go to dashboard
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ padding: 25, paddingTop: 50, backgroundColor: 'white', height: '100%' }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>
        Create New Account
      </Text>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontFamily: 'outfit-medium', fontSize: 15 }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit-medium', fontSize: 15 }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit-medium', fontSize: 15 }}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          paddingVertical: 15,
          backgroundColor: 'black',
          borderRadius: 15,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'outfit-bold',
            fontSize: 16,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace('/auth/sign-in')}
        style={{
          paddingVertical: 15,
          backgroundColor: 'white',
          borderRadius: 15,
          marginTop: 15,
          borderWidth: 1,
          borderColor: 'black',
        }}
      >
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontFamily: 'outfit-bold',
            fontSize: 16,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    marginTop: 8,
    fontFamily: 'outfit-regular',
    fontSize: 15,
  },
});
