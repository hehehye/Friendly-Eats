"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Use automatic initialization
// https://firebase.google.com/docs/app-hosting/firebase-sdks#initialize-with-no-arguments
const firebaseConfig = {
  apiKey: "AIzaSyCtlyTj2khefVI3VdFxpfnx07WLFQv6Pr0",
  authDomain: "friendlyeats-codelab-b35ea.firebaseapp.com",
  projectId: "friendlyeats-codelab-b35ea",
  storageBucket: "friendlyeats-codelab-b35ea.firebasestorage.app",
  messagingSenderId: "513004782473",
  appId: "1:513004782473:web:566f8c36299d17860f5758"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
