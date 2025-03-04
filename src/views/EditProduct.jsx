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
import { useParams } from 'react-router-dom'; // Para obtener el parámetro 'id' de la URL

const EditProduct = () => {
    const { id } = useParams(); // Obtiene el 'id' del producto de la URL
    const [product, setProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});

    useEffect(() => {
        if (!product) {
            fetchProductById(id);
        }
    }, [id, product]);

    const fetchProductById = async (id) => {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/productos/${id}`);
        const data = await response.json();
        setProduct(data);
        setEditedProduct({ ...data });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const modifiedProduct = {};
        Object.keys(editedProduct).forEach((key) => {
            if (editedProduct[key] !== product[key]) {
                modifiedProduct[key] = editedProduct[key];
            }
        });

        if (Object.keys(modifiedProduct).length === 0) {
            alert('No se han realizado cambios.');
            return;
        }

        const apiUrl = import.meta.env.VITE_API_URL;
        await fetch(`${apiUrl}/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedProduct),
        });

        console.log('Producto editado:', editedProduct);
    };

    if (!product) return <p>Cargando...</p>;

    return (
        <div>
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={editedProduct.nombre}
                    onChange={handleChange}
                />

                <label>Categoría:</label>
                <input
                    type="text"
                    name="categoria"
                    value={editedProduct.categoria}
                    onChange={handleChange}
                />

                <label>Precio Unitario:</label>
                <input
                    type="number"
                    name="precioUnitario"
                    value={editedProduct.precioUnitario}
                    onChange={handleChange}
                />

                <label>Cantidad en Stock:</label>
                <input
                    type="number"
                    name="cantidadStock"
                    value={editedProduct.cantidadStock}
                    onChange={handleChange}
                />

                <label>Fecha de Ingreso:</label>
                <input
                    type="date"
                    name="fechaIngreso"
                    value={editedProduct.fechaIngreso}
                    onChange={handleChange}
                />

                <label>Tipo de Producto:</label>
                <input
                    type="text"
                    name="tipoProducto"
                    value={editedProduct.tipoProducto}
                    onChange={handleChange}
                />

                <label>Oferta Mayorista:</label>
                <input
                    type="checkbox"
                    name="ofertaMayorista"
                    checked={editedProduct.ofertaMayorista}
                    onChange={(e) => handleChange({ target: { name: 'ofertaMayorista', value: e.target.checked } })}
                />

                <label>Precio Mayorista:</label>
                <input
                    type="number"
                    name="precioMayorista"
                    value={editedProduct.precioMayorista || ''}
                    onChange={handleChange}
                />

                <label>Proveedor:</label>
                <input
                    type="text"
                    name="proveedor"
                    value={editedProduct.proveedor}
                    onChange={handleChange}
                />

                <label>Código de Barra:</label>
                <input
                    type="text"
                    name="codigoBarra"
                    value={editedProduct.codigoBarra}
                    onChange={handleChange}
                />

                <button type="submit" disabled={JSON.stringify(product) === JSON.stringify(editedProduct)}>
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
};

export default EditProduct;