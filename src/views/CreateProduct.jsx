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
import { useNavigate } from "react-router-dom"; // Para navegar después de crear el producto
import UploadImage from "../components/UploadImage"; // Si necesitas cargar imágenes

const CreateProduct = () => {
    const navigate = useNavigate(); // Usamos useNavigate para redirigir después de la creación

    // Estado para los datos del nuevo producto
    const [newProduct, setNewProduct] = useState({
        nombre: "",
        categoria: "",
        precioUnitario: "",
        cantidadStock: "",
        fechaIngreso: "",
        tipoProducto: "",
        ofertaMayorista: false,
        precioMayorista: "",
        proveedor: "",
        codigoBarra: "",
    });

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Asegurarse de que todos los campos estén llenos antes de enviar
        if (
            !newProduct.nombre ||
            !newProduct.categoria ||
            !newProduct.precioUnitario ||
            !newProduct.cantidadStock ||
            !newProduct.fechaIngreso ||
            !newProduct.tipoProducto ||
            !newProduct.proveedor ||
            !newProduct.codigoBarra
        ) {
            alert("Por favor complete todos los campos.");
            return;
        }

        // Enviar los datos a la API para crear el nuevo producto
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/productos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        if (response.ok) {
            alert("Producto creado exitosamente.");
            navigate("/"); // Redirigir a la página principal de productos (puedes cambiar esta ruta)
        } else {
            alert("Hubo un error al crear el producto.");
        }
    };

    return (
        <div>
            <h2>Crear Nuevo Producto</h2>
            <form onSubmit={handleSubmit}>
                {/* Campos del formulario */}
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={newProduct.nombre}
                    onChange={handleChange}
                />

                <label>Categoría:</label>
                <input
                    type="text"
                    name="categoria"
                    value={newProduct.categoria}
                    onChange={handleChange}
                />

                <label>Precio Unitario:</label>
                <input
                    type="number"
                    name="precioUnitario"
                    value={newProduct.precioUnitario}
                    onChange={handleChange}
                />

                <label>Cantidad en Stock:</label>
                <input
                    type="number"
                    name="cantidadStock"
                    value={newProduct.cantidadStock}
                    onChange={handleChange}
                />

                <label>Fecha de Ingreso:</label>
                <input
                    type="date"
                    name="fechaIngreso"
                    value={newProduct.fechaIngreso}
                    onChange={handleChange}
                />

                <label>Tipo de Producto:</label>
                <input
                    type="text"
                    name="tipoProducto"
                    value={newProduct.tipoProducto}
                    onChange={handleChange}
                />

                <label>Oferta Mayorista:</label>
                <input
                    type="checkbox"
                    name="ofertaMayorista"
                    checked={newProduct.ofertaMayorista}
                    onChange={handleChange}
                />

                <label>Precio Mayorista:</label>
                <input
                    type="number"
                    name="precioMayorista"
                    value={newProduct.precioMayorista}
                    onChange={handleChange}
                />

                <label>Proveedor:</label>
                <input
                    type="text"
                    name="proveedor"
                    value={newProduct.proveedor}
                    onChange={handleChange}
                />

                <label>Código de Barra:</label>
                <input
                    type="text"
                    name="codigoBarra"
                    value={newProduct.codigoBarra}
                    onChange={handleChange}
                />

                {/* Si tienes un componente de carga de imágenes */}
                <UploadImage />

                {/* Botón para enviar el formulario */}
                <button type="submit">Crear Producto</button>
            </form>
        </div>
    );
};

export default CreateProduct;
