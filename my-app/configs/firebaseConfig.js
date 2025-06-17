


import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyBfn_39SwihVJknAYNyAibbt5x-xKRKg-A",
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

export { auth };