import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react"; // Make sure to import these Firebase functions

export const fetchAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    throw error;
  }
};
