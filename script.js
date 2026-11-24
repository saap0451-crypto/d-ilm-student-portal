import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// D-ilm Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuNU-fp_Vh1cBZXIqjbpmSrAQ-X-MQ4s8",
  authDomain: "d-ilm-students-portel.firebaseapp.com",
  projectId: "d-ilm-students-portel",
  storageBucket: "d-ilm-students-portel.firebasestorage.app",
  messagingSenderId: "325363747660",
  appId: "1:325363747660:web:26804fd46b431b2eb75de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("D-ilm Firebase connected!");

// Register a student
window.registerStudent = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth, email, password
    );
    alert("Welcome to D-ilm! Registration successful.");
    return result.user;
  } catch (error) {
    alert(error.message);
    return null;
  }
};

// Login a student
window.loginStudent = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      auth, email, password
    );
    alert("Login successful! Welcome to D-ilm.");
    return result.user;
  } catch (error) {
    alert(error.message);
    return null;
  }
};

// Logout a student
window.logoutStudent = async () => {
  try {
    await signOut(auth);
    alert("You have logged out.");
  } catch (error) {
    alert(error.message);
  }
};

// Check student login status
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in student:", user.email);
  } else {
    console.log("No student logged in.");
  }
});
