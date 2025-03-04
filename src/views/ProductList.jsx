// import React, { useEffect, useState } from "react";
// import { fetchProducts } from "../services/api"; // Asumimos que esta función ya está bien definida.

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Llamada a la API para obtener los productos
//     fetchProducts().then((data) => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <h2>Lista de Productos</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.nombre}</h3>
//             <p><strong>Categoría:</strong> {product.categoria}</p>
//             <p><strong>Precio Unitario:</strong> ${product.precioUnitario}</p>
//             <p><strong>Cantidad en Stock:</strong> {product.cantidadStock}</p>
//             <p><strong>Fecha de Ingreso:</strong> {product.fechaIngreso}</p>
//             <p><strong>Tipo de Producto:</strong> {product.tipoProducto}</p>
//             <p><strong>Oferta Mayorista:</strong> {product.ofertaMayorista ? "Sí" : "No"}</p>
//             {product.precioMayorista && (
//               <p><strong>Precio Mayorista:</strong> ${product.precioMayorista}</p>
//             )}
//             <p><strong>Proveedor:</strong> {product.proveedor}</p>
//             <p><strong>Código de Barra:</strong> {product.codigoBarra}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { Link, useNavigate, } from "react-router-dom"; // Importar Link de react-router-dom
import UploadImage from "../components/UploadImage";

// const handleEdit = (product) => {
//     // Cambié useHistory por useNavigate y ahora paso el objeto a través de 'state'
//     const navigate = useNavigate(); // Usar useNavigate
//     // navigate(`/edit-product/${product.id}`, { state: { product } });  // Pasa el objeto del producto a la ruta de edición
//     navigate(`/edit-product/${product.id}`, { state: { product } });  // Pasa el objeto del producto a la ruta de edición
// };

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <UploadImage />
            <h2>Lista de Productos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3 className=" bg-red-500">{product.nombre}</h3>
                        <p><strong>Categoría:</strong> {product.categoria}</p>
                        <p><strong>Precio Unitario:</strong> ${product.precioUnitario}</p>
                        <p><strong>Cantidad en Stock:</strong> {product.cantidadStock}</p>
                        <p><strong>Fecha de Ingreso:</strong> {product.fechaIngreso}</p>
                        <p><strong>Tipo de Producto:</strong> {product.tipoProducto}</p>
                        <p><strong>Oferta Mayorista:</strong> {product.ofertaMayorista ? "Sí" : "No"}</p>
                        {product.precioMayorista && (
                            <p><strong>Precio Mayorista:</strong> ${product.precioMayorista}</p>
                        )}
                        <p><strong>Proveedor:</strong> {product.proveedor}</p>
                        <p><strong>Código de Barra:</strong> {product.codigoBarra}</p>

                        {/* Botón para editar el producto */}
                        <Link to={`/editar-producto/${product.id}`}>
                            <button>Editar</button>
                        </Link>
                        {/* <div key={product.id}>
                            <span>{product.nombre}</span>
                            <button onClick={() => handleEdit(product)}>Editar</button>
                        </div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
