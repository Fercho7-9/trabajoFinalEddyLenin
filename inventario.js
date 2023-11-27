// Definición de tipos de datos
const currentDate = new Date();

const Producto = (id,nombre, cantidad,precio, fechaVencimiento,proveedor) => ({
  id,
  nombre,
  cantidad,
  precio,
  fechaVencimiento,
  proveedor
});

const productos = [];

function agregarProducto(productos) {
  // Generar un nuevo producto
  const nuevoProducto = new Producto(
    productos.length + 1,
    prompt("Ingrese el nombre del producto"),
    parseInt(prompt("Ingrese la cantidad")),
    parseFloat(prompt("Ingrese el precio")),
    new Date(prompt("Ingrese la fecha de vencimiento (YYYY-MM-DD)")),
    prompt("Ingrese el proveedor")
  );

  // Agregar el nuevo producto al arreglo
  productos.push(nuevoProducto);

  // Generar alertas
  generarAlertas(productos);

  // Devolver el nuevo arreglo de productos
  return productos;
}

function eliminarProducto(id) {
  try {
    productos = productos.filter(p => p.id !== id);
    return Right(null);
  } catch (e) {
    return Left(e.message);
  }

}
function actualizarStock(id, cantidad) {
  try {
    const producto = productos.find(p => p.id === id);
    producto.cantidad = cantidad;
    return Right(null);
  } catch (e) {
    return Left(e.message);
  }
}

function generarAlertas() {
  productos.forEach(producto => {
    if (producto.cantidad < stockMinimo) {
      // Enviar alerta por bajo stock
    }

    if ( producto.fechaVencimiento < new Date()) {
      // Enviar alerta por vencimiento
    }
  });
}
function reporteMovimientosVencidos() {
  return productos.filter(producto => producto.fechaVencimiento < new Date());
}

function reporteProductosMasVendidos() {
  return productos.sort((a, b) => b.cantidad - a.cantidad).slice(0, 10);
}

function reporteProductosMenosVendidos() {
  return productos.sort((a, b) => a.cantidad - b.cantidad).slice(0, 10);
}

// Integración con proveedores y sistema de pedidos

function realizarPedido(producto, cantidad,comprador) {
  // Obtener la información del proveedor
  const proveedor = producto.proveedor;

  // Realizar el pedido al proveedor
  // ...

  // Actualizar el stock del producto
  producto.cantidad += cantidad;
}


const productos1 = [
  {
    id: 1,
    nombre: "Teléfono inteligente",
    cantidad: 5,
    precio: 1000,
    fechaVencimiento: new Date(2023, 12, 31),
  },
  {
    id: 2,
    nombre: "Computadora portátil",
    cantidad: 10,
    precio: 2000,
    fechaVencimiento: new Date(2024, 2, 8),
  },
  {
    id: 3,
    nombre: "Televisión",
    cantidad: 20,
    precio: 3000,
    fechaVencimiento: new Date(2024, 6, 25),
  },
];

function generarAlertas() {
  productos.forEach(producto => {
    if (producto.cantidad < stockMinimo) {
      // Enviar alerta por bajo stock
      console.log(
        "Alerta de bajo stock: El producto '" + producto.nombre + "' tiene un stock de " + producto.cantidad + " unidades."
      );
    }
  });
}

generarAlertas();