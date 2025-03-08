import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { Link, useNavigate, } from "react-router-dom";
import UploadImage from "../components/UploadImage";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    return (
        <div className="p-4">
            <div className="flex gap-4 flex-col items-center justify-center p-4 text-center">
                {/* <h2>Lista de Productos</h2> */}
                <h2 className="font-extrabold text-6xl">Listado y Gestión de Productos</h2>
                {/* <h2 className="font-extrabold text-6xl">Exploración de Productos con Acceso a Información y Actualización</h2> */}
                <p className="text-1xl font-semibold text-gray-500 max-w-3xl">Visualiza y administra la información de los productos disponibles en el kiosco. Consulta sus detalles y edita fácilmente los datos para mantener la información siempre actualizada.</p>
            </div>
            <div className="mx-auto p-4">
                {/* sm:grid-cols-2  */}
                <ul className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className="relative">
                                <img src="https://images.unsplash.com/photo-1567721913486-6585f069b332?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt={product.name} className="w-full object-cover mb-2 rounded-xl" />
                                <p className="absolute top-0 left-0 bg-violet-800 bg-opacity-50 rounded-full m-2 py-1 px-3 font-medium text-white">{product.categoria}</p>
                            </div>
                            {/* <div className="p-4 bg-white rounded-xl shadow-md"> */}
                            <div >
                                {/* <p><strong>Categoría:</strong> {product.categoria}</p> */}
                                <div className="">
                                    <h3 className="text-xl font-bold">{product.nombre}</h3>
                                    <p className="font-medium text-lg text-gray-400">{product.tipoProducto}</p>
                                    <p className="text-xl font-bold">${product.precioUnitario}</p>
                                </div>
                                {/* <p><strong>Precio Unitario:</strong> ${product.precioUnitario}</p> */}

                                {/* {product.precioMayorista && (
                                <p><strong>Precio Mayorista:</strong> ${product.precioMayorista}</p>
                            )}
                            <p><strong>Oferta Mayorista:</strong> {product.ofertaMayorista ? "Sí" : "No"}</p> */}
                                {/* <p><strong>Cantidad en Stock:</strong> {product.cantidadStock}</p>
                            <p><strong>Fecha de Ingreso:</strong> {product.fechaIngreso}</p>
                            <p><strong>Proveedor:</strong> {product.proveedor}</p>
                            <p><strong>Código de Barra:</strong> {product.codigoBarra}</p> */}

                                {/* Botón para editar el producto */}
                                <Link to={`/editar-producto/${product.id}`} >
                                    <button className="w-full border-4 rounded-xl border-gray-200 p-2">Editar</button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <UploadImage />
        </div>
    );
};

export default ProductList;
