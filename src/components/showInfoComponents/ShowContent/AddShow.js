import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function AddShow({ showObj }) {
  const collectionRef = collection(db, "userId");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const unsub = onSnapshot(collectionRef, (querySnapShot) => {
      console.log("query snap shot", querySnapShot);
      let item = [];
      querySnapShot.forEach((doc) => {
        item.push(doc.data());
        console.log(doc.id);
      });
      console.log(item);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <button
      style={{ display: "none" }}
      onClick={() => console.log(collectionRef)}
    >
      AddShow
    </button>
  );
}
