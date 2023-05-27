import { initializeApp, getApps } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app = getApps()[0];
if (!app) {
  app = initializeApp(firebaseConfig);
}
const storage = getStorage(app);

export const uploadImage = (path: string, img: any) => {
  const imgRef = ref(storage, path);
  return uploadBytes(imgRef, img);
};

export const getImageUrl = async (path: string) => {
  const imgListRef = ref(storage, path);
  const imageList = await listAll(imgListRef);

  return Promise.all(imageList.items.map((item) => getDownloadURL(item)));
};
