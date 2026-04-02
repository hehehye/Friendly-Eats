import "server-only";

import { cookies } from "next/headers";
import { initializeServerApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtlyTj2khefVI3VdFxpfnx07WLFQv6Pr0",
  authDomain: "friendlyeats-codelab-b35ea.firebaseapp.com",
  projectId: "friendlyeats-codelab-b35ea",
  storageBucket: "friendlyeats-codelab-b35ea.firebasestorage.app",
  messagingSenderId: "513004782473",
  appId: "1:513004782473:web:566f8c36299d17860f5758"
};

export async function getAuthenticatedAppForUser() {
  const authIdToken = (await cookies()).get("__session")?.value;

  const firebaseServerApp = initializeServerApp(
    firebaseConfig,
    {
      authIdToken,
    }
  );

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}