/* // Import the functions you need from the SDKs you need
import { getFirestore, collection,getDocs,doc,getDoc,setDoc,addDoc,deleteDoc,updateDoc,deleteField,query,where,limit,orderBy,onSnapshot
}     from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
      import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
      import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";


      const firebaseConfig = {
        apiKey: "AIzaSyAoYqgDasoFO-kl0RTaW9qZjN1ntWInHbI",
        authDomain: "interdisciplinar-73cf1.firebaseapp.com",
        projectId: "interdisciplinar-73cf1",
        storageBucket: "interdisciplinar-73cf1.appspot.com",
        messagingSenderId: "901342934320",
        appId: "1:901342934320:web:5edf533e725437112bc4f5",
        measurementId: "G-5Y4J8Z5KNC"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const auth = getAuth(app);

      
      signUp.addEventListener('click', (e) => {

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('User Created :D');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            // ..
          });
      }); */


