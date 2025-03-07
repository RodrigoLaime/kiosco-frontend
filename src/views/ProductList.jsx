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
            <UploadImage />
            <h2>Lista de Productos</h2>
            <div className="mx-auto p-4">
                {/* <ul className="grid gap-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> */}
                <ul className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className="relative">
                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7f2Hce9bEMzkwfStA8jd3qJ9vhae8u_tUyw&s" alt={product.name} className="w-full object-cover mb-2" /> */}
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSos5A2Ukkt5NahdvRc0fnhxLuJg8PDYgSMng&s" alt={product.name} className="w-full object-cover mb-2 rounded-xl" />
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
        </div>
    );
};

export default ProductList;
