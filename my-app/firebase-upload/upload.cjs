// firebase-upload/upload.cjs
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");
const usaData = require("./usadata.json");
const goaData = require("./goadata.json");

// Firebase config — copy this from your RN config
const firebaseConfig = {
  apiKey: "AIzaSyBfn_39SwihVJknAYNyAibbt5x-xKRKg-A",
  authDomain: "ai-travel-planner-29821.firebaseapp.com",
  projectId: "ai-travel-planner-29821",
  storageBucket: "ai-travel-planner-29821.appspot.com",
  messagingSenderId: "254796330057",
  appId: "1:254796330057:web:479a698b9716b4f4f03b98",
  measurementId: "G-4VMELMKQ7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const runUpload = async () => {
  const docId = Date.now().toString();
  await setDoc(doc(db, "tripdata", docId), {
    GOA_DETAILS: goaData.GOA_DATA.travelPlan
  });
  console.log("✅ Uploaded to Firebase!");
};

runUpload().catch(console.error);
