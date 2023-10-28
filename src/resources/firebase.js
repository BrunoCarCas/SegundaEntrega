import { UploadData } from "firebase/firestore";
import data from "./productos.json" assert {type: "json"}

const firebaseConfig = {
  apiKey: "AIzaSyCePs6XcqIYuob9uE6knaZo2Z04-Cdg1YM",
  authDomain: "ecommerce-bruno-476fb.firebaseapp.com",
  projectId: "ecommerce-bruno-476fb",
  storageBucket: "ecommerce-bruno-476fb.appspot.com",
  messagingSenderId: "699368500535",
  appId: "1:699368500535:web:a7a5f0374ab838b4a5beb2"
};

const collectionName ="productos"

UploadData (firebaseConfig, data, collectionName)


