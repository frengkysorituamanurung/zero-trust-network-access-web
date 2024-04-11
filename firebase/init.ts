import {FirebaseApp, getApp, getApps, initializeApp} from "@firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCloOS1H2Rv4bPi5UIu2H2erlfHukjcE50",
    authDomain: "fir-mfa-2aa9c.firebaseapp.com",
    projectId: "fir-mfa-2aa9c",
    storageBucket: "fir-mfa-2aa9c.appspot.com",
    messagingSenderId: "111258049763",
    appId: "1:111258049763:web:a9f27781f2dbf8a87779d6"
  };

let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
}else {
    app = getApp();
}

export { app }