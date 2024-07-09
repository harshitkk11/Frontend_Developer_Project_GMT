// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const secret = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: secret.VITE_API_KEY,
  authDomain: secret.VITE_AUTH_DOMAIN,
  projectId: secret.VITE_PROJECT_ID,
  storageBucket: secret.VITE_STORAGE_BUCKET,
  messagingSenderId: secret.VITE_MESSAGING_SENDER_ID,
  appId: secret.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export default app;