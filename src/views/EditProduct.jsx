// import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom'; // Para obtener los parámetros de la URL y el objeto del producto

// const EditProduct = () => {
//     const { id } = useParams(); // Obtiene el 'id' del producto de la URL
//     //   const location = useLocation();
//     const [product, setProduct] = useState(null);

//     const [editedProduct, setEditedProduct] = useState({ ...product });

//     useEffect(() => {
//         if (!product) {
//             // Si no hay un producto en el estado, puedes hacer una llamada API para obtenerlo
//             fetchProductById(id);
//         }
//     }, [id, product]);

//     // Función para obtener el producto por ID si no fue pasado desde ProductList
//     const fetchProductById = async (id) => {
//         const apiUrl = import.meta.env.VITE_API_URL;
//         const response = await fetch(`${apiUrl}/productos/${id}`);
//         const data = await response.json();
//         console.log("Producto obtenido:", data);
//         setProduct(data);
//         setEditedProduct({ ...data });  // Copiar el objeto original
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedProduct((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Compara los productos y filtra los campos modificados
//         const modifiedProduct = {};

//         Object.keys(editedProduct).forEach((key) => {
//             if (editedProduct[key] !== product[key]) {
//                 modifiedProduct[key] = editedProduct[key];
//             }
//         });

//         // Si no se han realizado cambios, mostrar mensaje y no hacer nada
//         if (Object.keys(modifiedProduct).length === 0) {
//             alert('No se han realizado cambios.');
//             return; // No enviar nada si no hubo cambios
//         }
//         // // Comprobar si el producto ha sido modificado
//         // if (JSON.stringify(product) === JSON.stringify(editedProduct)) {
//         //     alert('No se han realizado cambios.');
//         //     return; // No enviar nada si no hubo cambios
//         // }
//         console.log("EDITED PRODUCT:", editedProduct)
//         const apiUrl = import.meta.env.VITE_API_URL;
//         const response = await fetch(`${apiUrl}/productos/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(editedProduct),
//         });

//         console.log(response)
//         // return response.json();
//     };

//     if (!product) return <p>Cargando...</p>;

//     return (
//         <div>
//             <h2>Editar Producto</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Nombre:</label>
//                 <input
//                     type="text"
//                     name="nombre"
//                     value={editedProduct.nombre}
//                     onChange={handleChange}
//                 />

//                 <label>Categoría:</label>
//                 <input
//                     type="text"
//                     name="categoria"
//                     value={editedProduct.categoria}
//                     onChange={handleChange}
//                 />

//                 <label>Precio Unitario:</label>
//                 <input
//                     type="number"
//                     name="precioUnitario"
//                     value={editedProduct.precioUnitario}
//                     onChange={handleChange}
//                 />

//                 <label>Cantidad en Stock:</label>
//                 <input
//                     type="number"
//                     name="cantidadStock"
//                     value={editedProduct.cantidadStock}
//                     onChange={handleChange}
//                 />

//                 <button type="submit" disabled={JSON.stringify(product) === JSON.stringify(editedProduct)}>
//                     Guardar Cambios
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default EditProduct;

// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom"; // Para obtener el parámetro 'id' de la URL

// // const EditProduct = () => {
// //     const { id } = useParams(); // Obtiene el 'id' del producto de la URL
// //     const [product, setProduct] = useState(null);

// //     useEffect(() => {
// //         console.log("PRDOCUTOS:", );
// //         console.log("ID del producto:", id);
// //         // Aquí harías la llamada para obtener los datos del producto por su ID.
// //         fetchProductById(id).then((data) => setProduct(data));
// //     }, [id]);

// //     // Función para simular la llamada a la API para obtener el producto por ID
// //     const fetchProductById = async (id) => {
// //         const apiUrl = import.meta.env.VITE_API_URL;
// //         // Suponiendo que tienes una función para obtener el producto por ID
// //         const response = await fetch(`${apiUrl}/productos/${id}`);
// //         console.log("Producto obtenido:", response);
// //         const data = await response.json();
// //         return data;
// //     };

// //     return (
// //         <div>
// //             <h2>Editar Producto</h2>
// //             {product ? (
// //                 <form>
// //                     <label>Nombre:</label>
// //                     <input type="text" defaultValue={product.nombre} />

// //                     <label>Categoría:</label>
// //                     <input type="text" defaultValue={product.categoria} />

// //                     {/* Aquí agregarías más campos de acuerdo a la estructura del producto */}

// //                     <button type="submit">Guardar Cambios</button>
// //                 </form>
// //             ) : (
// //                 <p>Cargando...</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default EditProduct;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});

    useEffect(() => {
        if (!product) {
            fetchProductById(id);
        }
    }, [id, product]);

    const fetchProductById = async (id) => {
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const response = await fetch(`${apiUrl}/productos/${id}`);
            const data = await response.json();
            setProduct(data);
            setEditedProduct({ ...data });
        } catch (error) {
            console.error("Error al obtener el producto:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Preparar el objeto a enviar
        const productToUpdate = {
            ...editedProduct,
            imagen_url: 'https://via.placeholder.com/150' // URL hardcodeada por ahora
        };

        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const response = await fetch(`${apiUrl}/productos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productToUpdate),
            });

            if (response.ok) {
                alert('Producto actualizado exitosamente');
                navigate('/productos');
            } else {
                alert('Error al actualizar el producto');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al actualizar el producto');
        }
    };

    if (!product) return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl text-gray-600">Cargando...</p>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Editar Producto
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Información básica */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nombre del Producto
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={editedProduct.nombre || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Categoría
                                </label>
                                <input
                                    type="text"
                                    name="categoria"
                                    value={editedProduct.categoria || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Descripción
                                </label>
                                <textarea
                                    name="descripcion"
                                    value={editedProduct.descripcion || ''}
                                    onChange={handleChange}
                                    rows="3"
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Detalles del producto */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Tipo de Producto
                                </label>
                                <input
                                    type="text"
                                    name="tipo_de_producto"
                                    value={editedProduct.tipo_de_producto || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Precio Unitario
                                </label>
                                <input
                                    type="number"
                                    name="precio_unitario"
                                    value={editedProduct.precio_unitario || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Stock Disponible
                                </label>
                                <input
                                    type="number"
                                    name="stock_disponible"
                                    value={editedProduct.stock_disponible || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>

                        {/* Fechas y otros detalles */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Fecha de Vencimiento
                                </label>
                                <input
                                    type="date"
                                    name="fecha_vencimiento"
                                    value={editedProduct.fecha_vencimiento || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Oferta Mayorista
                                </label>
                                <input
                                    type="text"
                                    name="oferta_mayorista"
                                    value={editedProduct.oferta_mayorista || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Ej: 2 x $500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Proveedor
                                </label>
                                <input
                                    type="text"
                                    name="proveedor"
                                    value={editedProduct.proveedor || ''}
                                    onChange={handleChange}
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 pt-6">
                        <button
                            type="button"
                            onClick={() => navigate('/productos')}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={JSON.stringify(product) === JSON.stringify(editedProduct)}
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; // Para obtener el parámetro 'id' de la URL

// const EditProduct = () => {
//     const { id } = useParams(); // Obtiene el 'id' del producto de la URL
//     const [product, setProduct] = useState(null);
//     const [editedProduct, setEditedProduct] = useState({});

//     useEffect(() => {
//         if (!product) {
//             fetchProductById(id);
//         }
//     }, [id, product]);

//     const fetchProductById = async (id) => {
//         const apiUrl = import.meta.env.VITE_API_URL;
//         const response = await fetch(`${apiUrl}/productos/${id}`);
//         const data = await response.json();
//         setProduct(data);
//         setEditedProduct({ ...data });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedProduct((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const modifiedProduct = {};
//         Object.keys(editedProduct).forEach((key) => {
//             if (editedProduct[key] !== product[key]) {
//                 modifiedProduct[key] = editedProduct[key];
//             }
//         });

//         if (Object.keys(modifiedProduct).length === 0) {
//             alert('No se han realizado cambios.');
//             return;
//         }

//         const apiUrl = import.meta.env.VITE_API_URL;
//         await fetch(`${apiUrl}/productos/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(editedProduct),
//         });

//         console.log('Producto editado:', editedProduct);
//     };

//     if (!product) return <p>Cargando...</p>;

//     return (
//         <div>
//             <h2>Editar Producto</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Nombre:</label>
//                 <input
//                     type="text"
//                     name="nombre"
//                     value={editedProduct.nombre}
//                     onChange={handleChange}
//                 />

//                 <label>Categoría:</label>
//                 <input
//                     type="text"
//                     name="categoria"
//                     value={editedProduct.categoria}
//                     onChange={handleChange}
//                 />

//                 <label>Precio Unitario:</label>
//                 <input
//                     type="number"
//                     name="precioUnitario"
//                     value={editedProduct.precioUnitario}
//                     onChange={handleChange}
//                 />

//                 <label>Cantidad en Stock:</label>
//                 <input
//                     type="number"
//                     name="cantidadStock"
//                     value={editedProduct.cantidadStock}
//                     onChange={handleChange}
//                 />

//                 <label>Fecha de Ingreso:</label>
//                 <input
//                     type="date"
//                     name="fechaIngreso"
//                     value={editedProduct.fechaIngreso}
//                     onChange={handleChange}
//                 />

//                 <label>Tipo de Producto:</label>
//                 <input
//                     type="text"
//                     name="tipoProducto"
//                     value={editedProduct.tipoProducto}
//                     onChange={handleChange}
//                 />

//                 <label>Oferta Mayorista:</label>
//                 <input
//                     type="checkbox"
//                     name="ofertaMayorista"
//                     checked={editedProduct.ofertaMayorista}
//                     onChange={(e) => handleChange({ target: { name: 'ofertaMayorista', value: e.target.checked } })}
//                 />

//                 <label>Precio Mayorista:</label>
//                 <input
//                     type="number"
//                     name="precioMayorista"
//                     value={editedProduct.precioMayorista || ''}
//                     onChange={handleChange}
//                 />

//                 <label>Proveedor:</label>
//                 <input
//                     type="text"
//                     name="proveedor"
//                     value={editedProduct.proveedor}
//                     onChange={handleChange}
//                 />

//                 <label>Código de Barra:</label>
//                 <input
//                     type="text"
//                     name="codigoBarra"
//                     value={editedProduct.codigoBarra}
//                     onChange={handleChange}
//                 />

//                 <button type="submit" disabled={JSON.stringify(product) === JSON.stringify(editedProduct)}>
//                     Guardar Cambios
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default EditProduct;