import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDpKjKrO8uhIZEhIxtGDPQjkv9udObdaqs",
  authDomain: "mtdb-project.firebaseapp.com",
  projectId: "mtdb-project",
  storageBucket: "mtdb-project.appspot.com",
  messagingSenderId: "700735181078",
  appId: "1:700735181078:web:91a2ee223eee70fc5f4037",
  measurementId: "G-91ZEJY1R3S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
