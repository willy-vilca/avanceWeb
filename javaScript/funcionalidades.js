
//Funcion para agregar o disminuir la cantidad de productos en las tarjetas
function updateQty(btn, change) {
      const input = btn.parentNode.querySelector("input");
      let value = parseInt(input.value) || 1;
      value += change;
      if (value < 1) value = 1;
      input.value = value;
}

//funcion para el menú desplegable de productos
document.querySelectorAll('.dropdown-menu [data-bs-toggle="dropdown"]').forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  

/*funcionalidades del carrito de compras*/

// Array de productos del carrito
    let carrito = [
      { id: 1, nombre: "Juego ollas y sartenes de acero inoxidable super resistentes", precio: 99800, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 2, nombre: "Tender ropa de 18 mm", precio: 34000, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 3, nombre: "Vaso térmico Labu", precio: 1400, cantidad: 2, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 4, nombre: "Juego ollas y sartenes de acero inoxidable super resistentes", precio: 99800, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 5, nombre: "Tender ropa de 18 mm", precio: 34000, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 6, nombre: "Vaso térmico Labu", precio: 1400, cantidad: 2, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" }
    ];

    function renderCarrito() {
      const cartItems = document.getElementById("cartItems");
      const cartTotal = document.getElementById("cartTotal");
      cartItems.innerHTML = "";
      let total = 0;

      carrito.forEach(producto => {
        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        let item = document.createElement("div");
        item.classList.add("cart-item");

        item.innerHTML = `
          <div class="d-flex align-items-center">
            <img src="${producto.imagen}" class="product-img me-2">
            <span class="text-truncate product-name">${producto.nombre}</span>
          </div>
          <div class="d-flex align-items-center product-actions">
            <div class="input-group input-group-sm me-1">
              <button class="btn" onclick="cambiarCantidad(${producto.id}, -1)">-</button>
              <input type="text" class="form-control text-center cantidadProducto" value="${producto.cantidad}" readonly>
              <button class="btn" onclick="cambiarCantidad(${producto.id}, 1)">+</button>
            </div>
            <span class="text-danger fw-bold me-2">Total: $${subtotal.toLocaleString()}</span>
            <button class="btn btn-remove ms-5" onclick="eliminarProducto(${producto.id})">✕</button>
          </div>
        `;
        cartItems.appendChild(item);
      });

      cartTotal.textContent = "$" + total.toLocaleString();
    }

    function cambiarCantidad(id, delta) {
      let producto = carrito.find(p => p.id === id);
      if (!producto) return;
      producto.cantidad += delta;
      if (producto.cantidad < 1) producto.cantidad = 1;
      renderCarrito();
    }

    function eliminarProducto(id) {
      carrito = carrito.filter(p => p.id !== id);
      renderCarrito();
    }

    function vaciarCarrito() {
      carrito = [];
      renderCarrito();
    }

    function finalizarPedido() {
      window.location.href = "#";
    }

    // Render inicial
    renderCarrito();

/*Fin del carrito de compras */ 