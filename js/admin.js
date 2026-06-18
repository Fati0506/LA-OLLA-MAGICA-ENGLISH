import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVegmUaY7mOUzh0n0clwvKQV3efaj4K1Y",
  authDomain: "la-olla-magica.firebaseapp.com",
  projectId: "la-olla-magica",
  storageBucket: "la-olla-magica.firebasestorage.app",
  messagingSenderId: "302206189526",
  appId: "1:302206189526:web:17c16fdef8e797de896e77"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Validar acceso exclusivo para el admin
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    globalThis.location.href = "index.html";
    return;
  }
  const docSnap = await getDoc(doc(db, "usuarios", user.uid));
  if (!docSnap.exists() || docSnap.data().rol !== "admin") {
    alert("Acceso denegado. Área exclusiva para administración.");
    globalThis.location.href = "index.html";
  } else {
    cargarDashboard();
  }
});

async function cargarDashboard() {
  try {
    // 1. Cargar total de Usuarios
    const usuariosSnap = await getDocs(collection(db, "usuarios"));
    document.getElementById("totalUsuarios").textContent = usuariosSnap.size;

    // 2. Cargar Pedidos y calcular Ingresos
    const pedidosRef = collection(db, "pedidos");
    const pedidosSnap = await getDocs(pedidosRef);
    
    document.getElementById("totalPedidos").textContent = pedidosSnap.size;

    let sumaIngresos = 0;
    const tablaPedidos = document.getElementById("tablaPedidosBody");
    tablaPedidos.innerHTML = "";

    if (pedidosSnap.empty) {
      tablaPedidos.innerHTML = `<tr><td colspan="5" style="text-align:center;">No hay pedidos registrados.</td></tr>`;
    } else {
      pedidosSnap.forEach((pedidoDoc) => {
        const data = pedidoDoc.data();
        const idPedido = pedidoDoc.id;
        const totalPedido = Number.parseFloat(data.total || 0);
        sumaIngresos += totalPedido;
        
        const estadoActual = data.estado || "Pendiente";

        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td><strong style="color: #6c5ce7;">#${idPedido.substring(0,5).toUpperCase()}</strong></td>
          <td><strong>${data.cliente || 'Anónimo'}</strong><br><small>${data.direccion || 'Retiro en Local'}</small></td>
          <td>${data.itemsDetalle || '-'}</td>
          <td><strong>S/ ${totalPedido.toFixed(2)}</strong></td>
          <td>
            <select class="status-select pedido-select" data-id="${idPedido}">
              <option value="Pendiente" ${estadoActual === 'Pendiente' ? 'selected' : ''}>⏳ Pendiente</option>
              <option value="Preparando" ${estadoActual === 'Preparando' ? 'selected' : ''}>🍳 Preparando</option>
              <option value="En Camino" ${estadoActual === 'En Camino' ? 'selected' : ''}>🛵 En Camino</option>
              <option value="Entregado" ${estadoActual === 'Entregado' ? 'selected' : ''}>✅ Entregado</option>
            </select>
          </td>
        `;
        tablaPedidos.appendChild(fila);
      });
    }

    document.getElementById("totalIngresos").textContent = `S/ ${sumaIngresos.toFixed(2)}`;

    // Actualizar estado de PEDIDOS en Firebase
    document.querySelectorAll(".pedido-select").forEach(select => {
      select.addEventListener("change", async (e) => {
        const nuevoEstado = e.target.value;
        const pedidoId = e.target.getAttribute("data-id");
        try {
          await updateDoc(doc(db, "pedidos", pedidoId), { estado: nuevoEstado });
          e.target.style.borderColor = "#22c55e"; 
          setTimeout(() => e.target.style.borderColor = "var(--border-input)", 1500);
        } catch (err) {
          console.error("Error al actualizar estado:", err);
          alert("Error al actualizar el estado del pedido.");
        }
      });
    });

    // 3. Cargar Reservas
    const reservasSnap = await getDocs(collection(db, "reservas"));
    const tablaReservas = document.getElementById("tablaReservasBody");
    tablaReservas.innerHTML = "";

    if (reservasSnap.empty) {
      tablaReservas.innerHTML = `<tr><td colspan="4" style="text-align:center;">No hay reservas registradas.</td></tr>`;
    } else {
      reservasSnap.forEach((resDoc) => {
        const rData = resDoc.data();
        const idReserva = resDoc.id;
        const estadoActual = rData.estado || "En Revisión";

        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td><strong>${rData.correo || 'Desconocido'}</strong></td>
          <td><span style="background: #e1cce8; padding: 4px 8px; border-radius: 12px; color: #4d4b7d; font-weight: bold;">${rData.mesaReservada}</span></td>
          <td>📅 ${rData.fechaAgendada || '-'} <br> ⏰ ${rData.horaAgendada || '-'}</td>
          <td>
            <select class="status-select reserva-select" data-id="${idReserva}">
              <option value="En Revisión" ${estadoActual === 'En Revisión' ? 'selected' : ''}>⏳ En Revisión</option>
              <option value="Aprobada" ${estadoActual === 'Aprobada' ? 'selected' : ''}>✅ Aprobada</option>
              <option value="Rechazada" ${estadoActual === 'Rechazada' ? 'selected' : ''}>❌ Rechazada (Llena)</option>
            </select>
          </td>
        `;
        tablaReservas.appendChild(fila);
      });

      // Actualizar estado de RESERVAS en Firebase
      document.querySelectorAll(".reserva-select").forEach(select => {
        select.addEventListener("change", async (e) => {
          const nuevoEstado = e.target.value;
          const reservaId = e.target.getAttribute("data-id");
          try {
            await updateDoc(doc(db, "reservas", reservaId), { estado: nuevoEstado });
            e.target.style.borderColor = "#22c55e"; 
            setTimeout(() => e.target.style.borderColor = "var(--border-input)", 1500);
          } catch (err) {
            console.error("Error al actualizar reserva:", err);
            alert("Error al actualizar la reserva.");
          }
        });
      });
    }

  } catch (error) {
    console.error("Error cargando el dashboard administrativo:", error);
  }
}

// Cerrar sesión
document.getElementById("btnAdminLogout").addEventListener("click", () => {
  signOut(auth).then(() => {
    globalThis.location.href = "index.html";
  });
});

// Modo oscuro
const themeBtn = document.getElementById('themeBtn');
if(localStorage.getItem('tema') === 'dark') document.body.classList.add('dark-mode');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('tema', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});