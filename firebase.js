import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// CORRECCIÓN 1: Agregamos getDoc a las importaciones
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

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

// REGISTRO
document.getElementById("btnRegister").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "usuarios", cred.user.uid), {
      correo: email,
      rol: "usuario", // Rol inicial por defecto
      fechaRegistro: new Date()
    });
    alert("Usuario registrado");
  } catch(error) {
    alert(error.message);
  }
});

// INICIO DE SESIÓN
document.getElementById("btnLogin").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Bienvenido");
    document.getElementById("loginOverlay").classList.remove("open");
  } catch(error) {
    alert(error.message);
  }
});

// OBSERVADOR DE SESIÓN (Controla accesos y nombres)
onAuthStateChanged(auth, async (user) => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const perfilLink = document.getElementById("perfilLink");

  if (user) {
    const docRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(docRef);
    
    let rol = "usuario";
    // Por defecto mostramos la parte del correo antes del @
    let nombreMostrar = user.email.split('@')[0]; 

    if (docSnap.exists()) {
      rol = docSnap.data().rol || "usuario";
      // Si el usuario guardó su nombre, lo usamos para la Navbar
      if (docSnap.data().nombre) {
        nombreMostrar = docSnap.data().nombre;
      }
    }

    const esPaginaPrincipal = document.getElementById("carta") !== null;

    if (rol === "admin") {
      if (esPaginaPrincipal) {
        globalThis.location.href = "admin.html";
        return;
      }
      if (loginBtn) loginBtn.style.display = "none";
      if (perfilLink) {
        perfilLink.textContent = "👑 Admin";
        perfilLink.href = "admin.html";
        perfilLink.style.display = "inline-block";
      }
    } else {
      if (loginBtn) loginBtn.style.display = "none";
      if (perfilLink) {
        // AQUÍ USAMOS EL NOMBRE REAL DEL USUARIO
        perfilLink.textContent = "👤 " + nombreMostrar; 
        perfilLink.href = "perfil.html";
        perfilLink.style.display = "inline-block";
      }
    }
    if (logoutBtn) logoutBtn.style.display = "inline-block";

  } else {
    if (loginBtn) {
      loginBtn.style.display = "inline-block";
      loginBtn.textContent = "👤 Ingresar";
    }
    if (perfilLink) perfilLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

// CERRAR SESIÓN
document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Sesión cerrada");
    globalThis.location.href = "index.html"; // Al salir, vuelve al inicio
  } catch(error) {
    alert(error.message);
  }
});

// FUNCIÓN GLOBAL: Guarda el pedido del carrito directamente en Firestore
globalThis.guardarPedidoEnFirebase = async (pedido) => {
  try {
    await addDoc(collection(db, "pedidos"), {
      ...pedido,
      fecha: new Date(),
      userId: auth.currentUser ? auth.currentUser.uid : "anonimo"
    });
    console.log("Pedido sincronizado correctamente con Firestore.");
  } catch (e) {
    console.error("Error al registrar pedido en la base de datos:", e);
  }
};

// Lógica del conmutador visual de contraseña (Ojito)
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const togglePasswordBtn = document.getElementById("togglePasswordBtn");
  
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener("click", () => {
      const esPassword = passwordInput.getAttribute("type") === "password";
      passwordInput.setAttribute("type", esPassword ? "text" : "password");
      togglePasswordBtn.textContent = esPassword ? "🙈" : "👁️";
    });
  }
});