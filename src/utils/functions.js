import firebase from "./firebase";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";

//Bilgi ekleme
export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.number,
    gender: info.gender,
  });
};

// Bilgi Çağırma

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push(id, ...data[id]);
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
};
return { isLoading, contactList };
