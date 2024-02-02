import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react"; // Make sure to import these Firebase functions

const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ id: string }[]>([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error or throw it again if needed.
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Call the asynchronous function when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  return { data, loading };
};

export default useFetchData;
