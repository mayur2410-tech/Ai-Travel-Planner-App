


import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebaseConfig';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      ToastAndroid.show('Please fill in all fields', ToastAndroid.LONG);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      ToastAndroid.show('Login Successful', ToastAndroid.LONG);
      // Navigate to dashboard or home
      router.replace('/(tabs)/home'); // Change to your real route
    } catch (err) {
  if (err.code === 'auth/user-not-found') {
    ToastAndroid.show('User not registered', ToastAndroid.LONG);
  } else if (err.code === 'auth/wrong-password') {
    ToastAndroid.show('Incorrect password', ToastAndroid.LONG);
  } else if (err.code === 'auth/invalid-email') {
    ToastAndroid.show('Invalid email format', ToastAndroid.LONG);
  } else {
    ToastAndroid.show('Login Failed: ' + err.message, ToastAndroid.LONG);
  }
}

  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 40,
        paddingHorizontal: 25,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 32, marginTop: 30, fontFamily: 'outfit-bold' }}>
        Let's Sign You In
      </Text>

      <Text style={styles.subtitle}>Welcome Back</Text>
      <Text style={styles.subtitle}>You've been missed!</Text>

      {/* Email Field */}
      <View style={{ marginTop: 40 }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Field */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => router.replace('/auth/sign-up')}
        style={styles.secondaryBtn}
      >
        <Text style={styles.secondaryBtnText}>Create Account</Text>
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
  label: {
    fontFamily: 'outfit-medium',
    fontSize: 15,
  },
  subtitle: {
    fontSize: 28,
    fontFamily: 'outfit-regular',
    marginTop: 5,
    color: 'gray',
  },
  primaryBtn: {
    paddingVertical: 15,
    backgroundColor: 'black',
    borderRadius: 15,
    marginTop: 40,
  },
  primaryBtnText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'outfit-bold',
    fontSize: 16,
  },
  secondaryBtn: {
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  secondaryBtnText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'outfit-bold',
    fontSize: 16,
  },
});
