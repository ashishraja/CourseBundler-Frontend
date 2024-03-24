import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD3gedLPINuPvjFw0swHO_3u59WRPiC3EM",
    authDomain: "raja-rani-90975.firebaseapp.com",
    projectId: "raja-rani-90975",
    storageBucket: "raja-rani-90975.appspot.com",
    messagingSenderId: "905516248671",
    appId: "1:905516248671:web:8882b37a4b90f5c195f5ea",
    measurementId: "G-XCJDCGMEB9"
  };



const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);



export default db;