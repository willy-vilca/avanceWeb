/*funcionalidades de la lista de productos del pedido*/

// Array de productos del pedido
    let pedido = [
      { id: 1, nombre: "Juego ollas y sartenes de acero inoxidable super resistentes", precio: 99800, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 2, nombre: "Tender ropa de 18 mm", precio: 34000, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 3, nombre: "Vaso térmico Labu", precio: 1400, cantidad: 8, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 4, nombre: "Juego ollas y sartenes de acero inoxidable super resistentes", precio: 99800, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 5, nombre: "Tender ropa de 18 mm", precio: 34000, cantidad: 1, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" },
      { id: 6, nombre: "Vaso térmico Labu", precio: 1400, cantidad: 8, imagen: "https://mayoristaprecioscuidados.com.ar/Admin/Imagenes/Items/395780.jpg" }
    ];

    function renderProductosPedido() {
      const pedidoItems = document.getElementById("pedidoItems");
      const pedidoTotal = document.getElementById("TotalPedido");
      const descuentoPedido = document.getElementById("descuentoPedido");
      const totalPedidoNeto = document.getElementById("TotalPedidoNeto"); 

      pedidoItems.innerHTML = "";
      let TotalPedido = 0;
      let descuento = 10000; //se aplicará lógica de negocio para el descuento posteriormente
      let totalNeto = 0;

      pedido.forEach(producto => {
        let subtotalPedido = producto.precio * producto.cantidad;
        TotalPedido += subtotalPedido;

        let itemPedido = document.createElement("div");
        itemPedido.classList.add("cart-item");
        itemPedido.classList.add("pedido");
        itemPedido.classList.add("shadow-sm");

        itemPedido.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${producto.imagen}" class="product-img-pedidoFinal me-2 ms-3">
                <span class="text-truncate product-name ms-4">${producto.nombre}</span>
            </div>
            <div class="d-flex align-items-center product-actions me-4">
                <div class="input-group input-group-sm me-1">
                    <button class="btn" onclick="cambiarCantidadPedido(${producto.id}, -1)">-</button>
                    <input type="text" class="form-control text-center cantidadProducto" value="${producto.cantidad}" readonly>
                    <button class="btn" onclick="cambiarCantidadPedido(${producto.id}, 1)">+</button>
                </div>
                <span class="text-danger fw-bold me-4">Total: S/.${subtotalPedido.toLocaleString()}</span>
                <button class="btn btn-remove ms-5" onclick="eliminarProductoPedido(${producto.id})">✕</button>
            </div>
        `;
        pedidoItems.appendChild(itemPedido);
      });
      totalNeto = TotalPedido-descuento;

      pedidoTotal.textContent = "S/." + TotalPedido.toLocaleString();
      descuentoPedido.textContent = "S/." + descuento.toLocaleString();
      totalPedidoNeto.textContent = "S/." + totalNeto.toLocaleString();
    }

    function cambiarCantidadPedido(id, delta) {
      let productoPedido = pedido.find(p => p.id === id);
      if (!productoPedido) return;
      productoPedido.cantidad += delta;
      if (productoPedido.cantidad < 1) productoPedido.cantidad = 1;
      renderProductosPedido();
    }

    function eliminarProductoPedido(id) {
      pedido = pedido.filter(p => p.id !== id);
      renderProductosPedido();
    }
    // Render inicial
    renderProductosPedido();

/*Fin de la lista de productos */ 