import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function getUrl(bucket) {
  const firebaseConfig = {
    apiKey: "AIzaSyDhHIZWV8t1o2cINTFXmEjt0LkgZig4p5M",
    authDomain: "landlfurniturestore.firebaseapp.com",
    projectId: "landlfurniturestore",
    storageBucket: "landlfurniturestore.appspot.com",
    messagingSenderId: "1053103874406",
    appId: "1:1053103874406:web:fa579a6c14196706a7a8a7",
    measurementId: "G-KMQEBYRW3T",
  };
  const app = initializeApp(firebaseConfig);
  var storage = getStorage(app);
  getDownloadURL(ref(storage, bucket))
    .then((url) => {
      return url;
    })
    .catch((error) => {
      console.log(error);
    });
}
export default getUrl;
