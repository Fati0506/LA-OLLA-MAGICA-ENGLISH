import { initializeApp } from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
}
from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
}
from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVegmUaY7mOUzh0n0clwvKQV3efaj4K1Y",
  authDomain: "la-olla-magica.firebaseapp.com",
  projectId: "la-olla-magica",
  storageBucket: "la-olla-magica.firebasestorage.app",
  messagingSenderId: "302206189526",
  appId: "1:302206189526:web:17c16fdef8e797de896e77",
  measurementId: "G-8EPCL1CG4L"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


document
.getElementById("btnRegister")
.addEventListener("click", async () => {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  try {

    const cred =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await setDoc(
      doc(db, "usuarios", cred.user.uid),
      {
        correo: email,
        fechaRegistro: new Date()
      }
    );

    alert("Usuario registrado");

  } catch(error) {
    alert(error.message);
  }
});

document
.getElementById("btnLogin")
.addEventListener("click", async () => {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Bienvenido");

    document
      .getElementById("loginOverlay")
      .classList.remove("open");

  } catch(error) {
    alert(error.message);
  }

});

onAuthStateChanged(auth, (user) => {

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if(user){

    loginBtn.textContent = "👤 " + user.email;

    logoutBtn.style.display = "inline-block";

  }else{

    loginBtn.textContent = "👤 Ingresar";

    logoutBtn.style.display = "none";

  }

});

document.getElementById("logoutBtn")
.addEventListener("click", async () => {

  try {

    await signOut(auth);

    alert("Sesión cerrada");

  } catch(error) {

    alert(error.message);

  }

});