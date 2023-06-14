import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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

export const db = getFirestore(app);

export const auth = getAuth(app);
export const storage = getStorage(app);

// storage
export const upload = async (file, currentUser, setLoading) => {
  try {
    const fileRef = ref(storage, currentUser.uid + ".png");
    setLoading(true);

    await uploadBytes(fileRef, file);

    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, { photoURL });
    setLoading(false);
    alert("uploaded");
  } catch (err) {
    console.log("error", err);
  }
};
