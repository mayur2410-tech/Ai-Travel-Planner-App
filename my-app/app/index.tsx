import { Text, View } from "react-native";
import Login from "../components/Login";
import {auth} from '../configs/firebaseConfig'
import { Redirect } from "expo-router";
import { getAuth } from "firebase/auth";
export default function Index() {

  const auth = getAuth();

const userEmail = auth.currentUser?.email
  console.log("user email : ",userEmail);
  return (
    <View
      style={{
        flex: 1,
       
      }}
    >

      {userEmail?
         
     <Redirect href={'/(tabs)/mytrip'} />:   <Login /> 

    }
 
    </View>
  );
}
