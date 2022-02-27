/** @format */

import {getFirestore} from "@firebase/firestore";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCwc_U5X0ETZy8s3Nh-S0I8DPhlZveKiAI",
	authDomain: "bolt-66981.firebaseapp.com",
	projectId: "bolt-66981",
	storageBucket: "bolt-66981.appspot.com",
	messagingSenderId: "310016159104",
	appId: "1:310016159104:web:2274908d45e8773c33a565",
	measurementId: "G-1TN36ME3BG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
