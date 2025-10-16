import { getFirestore,collection, getDocs,doc, getDoc } from "firebase/firestore";
import { app } from "./configuracion";
import { query, where } from "firebase/firestore";
const db = getFirestore(app);

export const getItems=async()=>{
const querySnapshot = await getDocs(collection(db, "productos"));
const prodcutos= []
querySnapshot.forEach((doc) => {
  prodcutos.push({...doc.data(),id: doc.id})
})
return prodcutos
}


export const getCategory=async()=>{
const querySnapshot = await getDocs(collection(db, "category"));
const category= []
querySnapshot.forEach((doc) => {
  category.push({...doc.data(),id: doc.id})
})
return category
}



export const getItemsByCategory = async (categoria) => {
  const q = query(collection(db, "productos"), where("category", "==", categoria));
  const items = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
};



export const getItem = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    console.log("No such document!");
    return null;
  }
};