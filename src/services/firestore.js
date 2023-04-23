/* ------------firebase-------*/
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    query,
    where,
    addDoc,
    writeBatch 
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPEkMcTjwptueH-62KLXsjNBXkD_cZRXA",
  authDomain: "react51175-rita.firebaseapp.com",
  projectId: "react51175-rita",
  storageBucket: "react51175-rita.appspot.com",
  messagingSenderId: "331294888582",
  appId: "1:331294888582:web:db3a2fd8b4435ba5e8f707"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems(){
  const productsRef= collection(db, "products");
  const productsSnap = await getDocs (productsRef)
  const documents = productsSnap.docs;
  const docsData = documents.map ((doc) => {
    return {
      id: doc.id, ...doc.data()
    };
  });

  return docsData;
}

export async function getSingleItem(idURL){
    const docRef = doc (db, "products", idURL);
    const docSnap = await getDoc (docRef);

    return { id: docSnap.id, ...docSnap.data() };
}

export async function getItemsByCategory(categoryid){
    const productsRef= collection(db, "products");
    const q = query(productsRef, where("category", "==", categoryid));
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;

    const docsData = documents.map ((doc) => {
        return {
          id: doc.id, ...doc.data()
        };
      });
    
      return docsData;
}

export async function createOrder(order){
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id;
}

export async function exportDataWithBatch() {
  const products = [
    {
      id: 1,
      title: "Hombres Manga Corta",
      category: "Hombres",
      price: 9000,
      stock: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_668021-MLA43506421144_092020-O.webp",
    },
    {
      id: 2,
      title: "Niños Manga Corta",
      category: "Niños",
      price: 7000,
      stock: 45,
      img: "https://http2.mlstatic.com/D_NQ_NP_624429-MLA53347716253_012023-O.jpg",
    },
    {
      id: 3,
      title: "Mujer Manga Corta",
      category: "Mujeres",
      price: 8000,
      stock: 40,
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/854/220/products/women-t-shirt11-e29b3e69ca64be384315332362542902-640-0.jpg",
    },
    {
      id: 4,
      title: "Hombres Manga Larga",
      category: "Hombres",
      price: 9200,
      stock: 310,
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/732/894/products/la-boya-negra-manga-larga-uva-o-espalda1-b2cd9e90663d81cb8715429993227703-240-0.jpg",
    },
    {
      id: 5,
      title: "Mujer Manga Larga",
      category: "Mujeres",
      price: 8200,
      stock: 225,
      img: "https://cdn.shopify.com/s/files/1/0514/2619/7696/products/2-165047-VIOLETA_1.jpg?v=1656020454",
    },
    {
      id: 6,
      title: "Niño Manga Larga",
      category: "Niños",
      price: 7200,
      stock: 382,
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/399/451/products/20200508_2306161-dcabc738e0af43728715889900609940-1024-1024.jpg",
    },
    {
      id: 7,
      title: "Buzo Hombre",
      category: "Hombres",
      price: 9900,
      stock: 103,
      img: "https://http2.mlstatic.com/D_NQ_NP_979127-MLA45406881553_032021-O.jpg",
    },
    {
      id: 8,
      title: "Buzo Mujer",
      category: "Mujeres",
      price: 8900,
      stock: 11,
      img: "https://http2.mlstatic.com/D_NQ_NP_750303-MCO44495250894_012021-W.jpg",
    },
    {
      id: 9,
      title: "Buzo Niño",
      category: "Niños",
      price: 7900,
      stock: 232,
      img: "https://http2.mlstatic.com/D_NQ_NP_882699-MLA54406889873_032023-V.jpg",
    },
  ];

  const collectionRef = collection(db, "products");
  const batch = writeBatch(db);

  for (let item of products) {
    item.index = item.id;
    delete item.id;
    const newDoc = doc(collectionRef);

    batch.set(newDoc, item);
  }

  await batch.commit();
}