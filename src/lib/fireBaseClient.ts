// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyREv9Fq9UDgCDahxXetXbjCx_uYrVijU",
  authDomain: "airdnd-nextjs.firebaseapp.com",
  projectId: "airdnd-nextjs",
  storageBucket: "airdnd-nextjs.appspot.com",
  messagingSenderId: "504396098192",
  appId: "1:504396098192:web:d1de6d6a739e8bd61c4615",
};

// Initialize Firebase
let app = getApps()[0];
if (!app) {
  app = initializeApp(firebaseConfig);
}
const storage = getStorage(app);

export const uploadImage = async (path: string, img: any) => {
  const imgRef = ref(storage, path);
  const res = await uploadBytes(imgRef, img);
  console.log(res);
};
