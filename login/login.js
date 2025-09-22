import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIKG2KPYDyadyyFHVLzGTLVuGzOMDcGkg",
  authDomain: "bd-pagina-conservadora.firebaseapp.com",
  projectId: "bd-pagina-conservadora",
  storageBucket: "bd-pagina-conservadora.firebasestorage.app",
  messagingSenderId: "430731337016",
  appId: "1:430731337016:web:2dee88c792a4e69fb575cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Botón login
document.getElementById("btnLogin").addEventListener("click", async () => {
  const correo = document.getElementById("correo").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const mensaje = document.getElementById("mensaje");

  const querySnapshot = await getDocs(collection(db, "contrasena"));
  let encontrado = false;

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    if (data.correo === correo && data.clave === clave) {
      encontrado = true;
    }
  });

  if (encontrado) {
    mensaje.style.color = "green";
    mensaje.textContent = "Login exitoso, redirigiendo...";
    setTimeout(() => {
      // Redirigir al menú de administrador
      window.location.href = "../menu_admin/admin-index.html";
    }, 1000);
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Correo o contraseña incorrectos";
  }
});
