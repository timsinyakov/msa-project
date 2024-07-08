// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAARmBryESXY9-M4s57tSz9rpzpj47iN7o',
  authDomain: 'msalogin-4cb05.firebaseapp.com',
  projectId: 'msalogin-4cb05',
  storageBucket: 'msalogin-4cb05.appspot.com',
  messagingSenderId: '46469487922',
  appId: '1:46469487922:web:63663d46be8f28cdae0b2b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
