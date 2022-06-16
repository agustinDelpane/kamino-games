import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firebaseFetch = async (categoria) => {
    let q;
    if (categoria) {
        q = query(collection(db, "juegos"), where('categoria', '==', categoria));
    } else {
        q = query(collection(db, "juegos"), orderBy('nombre'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "juegos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: id,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}