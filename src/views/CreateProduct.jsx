// import React, { useState } from 'react';

// const CreateProduct = () => {
//   const [product, setProduct] = useState({
//     nombre: '',
//     categoria: '',
//     precioUnitario: '',
//     cantidadStock: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí iría la lógica para enviar los datos al backend y crear el producto
//     console.log('Producto creado:', product);
//   };

//   return (
//     <div>
//       <h2>Crear Producto</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Nombre</label>
//         <input
//           type="text"
//           value={product.nombre}
//           onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
//         />
//         <label>Categoría</label>
//         <input
//           type="text"
//           value={product.categoria}
//           onChange={(e) => setProduct({ ...product, categoria: e.target.value })}
//         />
//         <label>Precio Unitario</label>
//         <input
//           type="number"
//           value={product.precioUnitario}
//           onChange={(e) => setProduct({ ...product, precioUnitario: e.target.value })}
//         />
//         <label>Cantidad en Stock</label>
//         <input
//           type="number"
//           value={product.cantidadStock}
//           onChange={(e) => setProduct({ ...product, cantidadStock: e.target.value })}
//         />
//         <button type="submit">Crear Producto</button>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "../components/UploadImage";

const CreateProduct = () => {
    const navigate = useNavigate();

    const [newProduct, setNewProduct] = useState({
        nombre: "",
        categoria: "",
        descripcion: "",
        tipo_de_producto: "",
        precio_unitario: "",
        stock_disponible: "",
        fecha_vencimiento: "",
        oferta_mayorista: "",
        proveedor: "",
        imagen_url: "https://via.placeholder.com/150" // URL por defecto
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos requeridos
        const requiredFields = ['nombre', 'categoria', 'precio_unitario', 'stock_disponible'];
        const missingFields = requiredFields.filter(field => !newProduct[field]);

        if (missingFields.length > 0) {
            alert(`Por favor complete los siguientes campos: ${missingFields.join(', ')}`);
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/productos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                alert("Producto creado exitosamente");
                navigate("/productos");
            } else {
                const error = await response.json();
                alert(error.message || "Error al crear el producto");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al crear el producto");
        }
    };

    return (
        <div className="min-h-screen pt-20 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Crear Nuevo Producto</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Información básica */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre del Producto *
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={newProduct.nombre}
                                    onChange={handleChange}
                                    className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Categoría *
                                </label>
                                <input
                                    type="text"
                                    name="categoria"
                                    value={newProduct.categoria}
                                    onChange={handleChange}
                                    className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Descripción
                                </label>
                                <textarea
                                    name="descripcion"
                                    value={newProduct.descripcion}
                                    onChange={handleChange}
                                    rows="3"
                                    className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>
                        </div>

                        {/* Detalles del producto */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tipo de Producto
                                </label>
                                <input
                                    type="text"
                                    name="tipo_de_producto"
                                    value={newProduct.tipo_de_producto}
                                    onChange={handleChange}
                                    className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Precio Unitario *
                                </label>
                                <input
                                    type="number"
                                    name="precio_unitario"
                                    value={newProduct.precio_unitario}
                                    onChange={handleChange}
                                    className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Stock Disponible *
                                </label>
                                <input
                                    type="number"
                                    name="stock_disponible"
                                    value={newProduct.stock_disponible}
                                    onChange={handleChange}
                                    className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Fecha de Vencimiento
                            </label>
                            <input
                                type="date"
                                name="fecha_vencimiento"
                                value={newProduct.fecha_vencimiento}
                                onChange={handleChange}
                                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Oferta Mayorista
                            </label>
                            <input
                                type="text"
                                name="oferta_mayorista"
                                value={newProduct.oferta_mayorista}
                                onChange={handleChange}
                                placeholder="Ej: 2 x $500"
                                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Proveedor
                            </label>
                            <input
                                type="text"
                                name="proveedor"
                                value={newProduct.proveedor}
                                onChange={handleChange}
                                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            onClick={() => navigate('/productos')}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            Crear Producto
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <UploadImage />
            </div>
        </div>
    );
};

export default CreateProduct;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Para navegar después de crear el producto
// import UploadImage from "../components/UploadImage"; // Si necesitas cargar imágenes

// const CreateProduct = () => {
//     const navigate = useNavigate(); // Usamos useNavigate para redirigir después de la creación

//     // Estado para los datos del nuevo producto
//     const [newProduct, setNewProduct] = useState({
//         nombre: "",
//         categoria: "",
//         precioUnitario: "",
//         cantidadStock: "",
//         fechaIngreso: "",
//         tipoProducto: "",
//         ofertaMayorista: false,
//         precioMayorista: "",
//         proveedor: "",
//         codigoBarra: "",
//     });

//     // Maneja los cambios en los campos del formulario
//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setNewProduct((prevState) => ({
//             ...prevState,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };

//     // Función para manejar el envío del formulario
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Asegurarse de que todos los campos estén llenos antes de enviar
//         if (
//             !newProduct.nombre ||
//             !newProduct.categoria ||
//             !newProduct.precioUnitario ||
//             !newProduct.cantidadStock ||
//             !newProduct.fechaIngreso ||
//             !newProduct.tipoProducto ||
//             !newProduct.proveedor ||
//             !newProduct.codigoBarra
//         ) {
//             alert("Por favor complete todos los campos.");
//             return;
//         }

//         // Enviar los datos a la API para crear el nuevo producto
//         const apiUrl = import.meta.env.VITE_API_URL;
//         const response = await fetch(`${apiUrl}/productos`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newProduct),
//         });

//         if (response.ok) {
//             alert("Producto creado exitosamente.");
//             navigate("/"); // Redirigir a la página principal de productos (puedes cambiar esta ruta)
//         } else {
//             alert("Hubo un error al crear el producto.");
//         }
//     };

//     return (
//         <div>
//             <h2>Crear Nuevo Producto</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Campos del formulario */}
//                 <label>Nombre:</label>
//                 <input
//                     type="text"
//                     name="nombre"
//                     value={newProduct.nombre}
//                     onChange={handleChange}
//                 />

//                 <label>Categoría:</label>
//                 <input
//                     type="text"
//                     name="categoria"
//                     value={newProduct.categoria}
//                     onChange={handleChange}
//                 />

//                 <label>Precio Unitario:</label>
//                 <input
//                     type="number"
//                     name="precioUnitario"
//                     value={newProduct.precioUnitario}
//                     onChange={handleChange}
//                 />

//                 <label>Cantidad en Stock:</label>
//                 <input
//                     type="number"
//                     name="cantidadStock"
//                     value={newProduct.cantidadStock}
//                     onChange={handleChange}
//                 />

//                 <label>Fecha de Ingreso:</label>
//                 <input
//                     type="date"
//                     name="fechaIngreso"
//                     value={newProduct.fechaIngreso}
//                     onChange={handleChange}
//                 />

//                 <label>Tipo de Producto:</label>
//                 <input
//                     type="text"
//                     name="tipoProducto"
//                     value={newProduct.tipoProducto}
//                     onChange={handleChange}
//                 />

//                 <label>Oferta Mayorista:</label>
//                 <input
//                     type="checkbox"
//                     name="ofertaMayorista"
//                     checked={newProduct.ofertaMayorista}
//                     onChange={handleChange}
//                 />

//                 <label>Precio Mayorista:</label>
//                 <input
//                     type="number"
//                     name="precioMayorista"
//                     value={newProduct.precioMayorista}
//                     onChange={handleChange}
//                 />

//                 <label>Proveedor:</label>
//                 <input
//                     type="text"
//                     name="proveedor"
//                     value={newProduct.proveedor}
//                     onChange={handleChange}
//                 />

//                 <label>Código de Barra:</label>
//                 <input
//                     type="text"
//                     name="codigoBarra"
//                     value={newProduct.codigoBarra}
//                     onChange={handleChange}
//                 />

//                 {/* Si tienes un componente de carga de imágenes */}
//                 <UploadImage />

//                 {/* Botón para enviar el formulario */}
//                 <button type="submit">Crear Producto</button>
//             </form>
//         </div>
//     );
// };

// export default CreateProduct;
