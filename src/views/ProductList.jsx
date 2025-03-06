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
                <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7f2Hce9bEMzkwfStA8jd3qJ9vhae8u_tUyw&s" alt={product.name} className="w-full object-cover mb-2" />
                            </div>
                            {/* <p><strong>Categoría:</strong> {product.categoria}</p> */}
                            <p className="font-medium text-gray-400">{product.categoria}</p>
                            <div className="flex justify-between items-center text-xl">
                                <h3 className=" font-semibold">{product.nombre}</h3>
                                <p className="font-bold">${product.precioUnitario}.00</p>
                            </div>
                            {/* <p><strong>Precio Unitario:</strong> ${product.precioUnitario}</p> */}
                            <p><strong>Tipo de Producto:</strong> {product.tipoProducto}</p>
                            {product.precioMayorista && (
                                <p><strong>Precio Mayorista:</strong> ${product.precioMayorista}</p>
                            )}
                            <p><strong>Oferta Mayorista:</strong> {product.ofertaMayorista ? "Sí" : "No"}</p>

                            {/* <p><strong>Cantidad en Stock:</strong> {product.cantidadStock}</p>
                            <p><strong>Fecha de Ingreso:</strong> {product.fechaIngreso}</p>
                            <p><strong>Proveedor:</strong> {product.proveedor}</p>
                            <p><strong>Código de Barra:</strong> {product.codigoBarra}</p> */}

                            {/* Botón para editar el producto */}
                            <Link to={`/editar-producto/${product.id}`}>
                                <button>Editar</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
