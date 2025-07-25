


import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: process.env.firebase_api,
  authDomain: "ai-travel-planner-29821.firebaseapp.com",
  projectId: "ai-travel-planner-29821",
  storageBucket: "ai-travel-planner-29821.appspot.com",
  messagingSenderId: "254796330057",
  appId: "1:254796330057:web:479a698b9716b4f4f03b98",
  measurementId: "G-4VMELMKQ7N"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

 export const db = getFirestore(app);

export { auth };