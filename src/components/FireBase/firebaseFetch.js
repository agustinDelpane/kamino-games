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

export const firestoreFetchId = async (id) => {
    const docRef = doc(db, "juegos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: id,
          ...docSnap.data()
      }
    } else {
      console.log("No such document!");
    }
}

export const firestoreFetchMV = async () => {
    let qMV = query(collection(db, "juegos"), where('MV', '==', 'true'), orderBy('nombre'));
    const querySnapshot = await getDocs(qMV);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        MV: document.MV,
        ...document.data()
    }));
    return dataFromFirestore;
}