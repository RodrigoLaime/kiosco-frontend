// import React, { useEffect, useState } from "react";
// import { fetchProducts } from "../services/api";
// import { Link, useNavigate, } from "react-router-dom";
// import UploadImage from "../components/UploadImage";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetchProducts().then((data) => {
//             console.log(data);
//             setProducts(data)
//         });
//     }, []);

//     return (
//         <div className="p-4">
//             <div className="flex gap-4 flex-col items-center justify-center pt-16 p-4 text-center">
//                 <h2 className="font-extrabold text-6xl">Listado y Gestión de Productos</h2>
//                 <p className="text-1xl font-semibold text-gray-500 max-w-3xl">Visualiza y administra la información de los productos disponibles en el kiosco. Consulta sus detalles y edita fácilmente los datos para mantener la información siempre actualizada.</p>
//             </div>
//             <div className="mx-auto p-4">
//                 {/* sm:grid-cols-2  */}
//                 <ul className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//                     {products.map((product) => (
//                         <li key={product.id}>
//                             <div className="relative">
//                                 <img src="https://res.cloudinary.com/dnfshq0n6/image/upload/v1741561309/kiosco_productos/f0paug1avcucrpzwemii.jpg" alt={product.name} className="w-full object-cover mb-2 rounded-xl" />
//                                 <p className="absolute top-0 left-0 bg-violet-800 bg-opacity-50 rounded-full m-2 py-1 px-3 font-medium text-white">{product.categoria}</p>
//                             </div>
//                             {/* <div className="p-4 bg-white rounded-xl shadow-md"> */}
//                             <div >
//                                 {/* <p><strong>Categoría:</strong> {product.categoria}</p> */}
//                                 <div className="">
//                                     <h3 className="text-xl font-bold">{product.nombre}</h3>
//                                     <p className="font-medium text-lg text-gray-400">{product.tipo_de_producto}</p>
//                                     <p className="text-xl font-bold">${product.precio_unitario}</p>
//                                 </div>
//                                 {/* <p><strong>Precio Unitario:</strong> ${product.precioUnitario}</p> */}

//                                 {/* {product.precioMayorista && (
//                                 <p><strong>Precio Mayorista:</strong> ${product.precioMayorista}</p>
//                             )}
//                             <p><strong>Oferta Mayorista:</strong> {product.ofertaMayorista ? "Sí" : "No"}</p> */}
//                                 {/* <p><strong>Cantidad en Stock:</strong> {product.cantidadStock}</p>
//                             <p><strong>Fecha de Ingreso:</strong> {product.fechaIngreso}</p>
//                             <p><strong>Proveedor:</strong> {product.proveedor}</p>
//                             <p><strong>Código de Barra:</strong> {product.codigoBarra}</p> */}

//                                 {/* Botón para editar el producto */}
//                                 <Link to={`/editar-producto/${product.id}`} >
//                                     <button className="w-full border-4 rounded-xl border-gray-200 p-2">Editar</button>
//                                 </Link>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <UploadImage />
//         </div>
//     );
// };

// export default ProductList;

/* ####################################No borrar funcinal sin filtrado */
// import React, { useEffect, useState } from "react";
// import { fetchProducts } from "../services/api";
// import { Link } from "react-router-dom";
// import UploadImage from "../components/UploadImage";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetchProducts().then((data) => {
//             console.log(data);
//             setProducts(data)
//         });
//     }, []);

//     // Función para formatear la fecha
//     const formatDate = (dateString) => {
//         if (!dateString) return '-';
//         return new Date(dateString).toLocaleDateString('es-AR');
//     };

//     return (
//         <div className="px-4 pb-16">
//             <div className="flex gap-4 flex-col items-center justify-center p-4 text-center">
//                 <h2 className="font-extrabold text-6xl">Listado y Gestión de Productos</h2>
//                 <p className="text-1xl font-semibold text-gray-500 max-w-3xl">
//                     Visualiza y administra la información de los productos disponibles en el kiosco.
//                     Consulta sus detalles y edita fácilmente los datos para mantener la información siempre actualizada.
//                 </p>
//             </div>
//             <div className="mx-auto p-4">
//                 <ul className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//                     {products.map((product) => (
//                         <li key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <div className="relative">
//                                 <img
//                                     src="https://res.cloudinary.com/dnfshq0n6/image/upload/v1741561309/kiosco_productos/f0paug1avcucrpzwemii.jpg"
//                                     /* src={product.imagen_url || "https://via.placeholder.com/150"}  */
//                                     alt={product.nombre}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <span className="absolute top-0 left-0 bg-violet-800 bg-opacity-50 rounded-full m-2 py-1 px-3 font-medium text-white">
//                                     {product.categoria}
//                                 </span>
//                             </div>

//                             <div className="p-4">
//                                 <div className="space-y-2">
//                                     <h3 className="text-xl font-bold truncate">{product.nombre}</h3>
//                                     <p className="font-medium text-gray-500">{product.tipo_de_producto}</p>
//                                     <div className="flex justify-between items-center">
//                                         <p className="text-xl font-bold">${product.precio_unitario}</p>
//                                         <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
//                                             Stock: {product.stock_disponible}
//                                         </span>
//                                     </div>

//                                     {product.oferta_mayorista && product.oferta_mayorista !== '-' && (
//                                         <p className="text-sm text-indigo-600 font-medium">
//                                             Oferta: {product.oferta_mayorista}
//                                         </p>
//                                     )}

//                                     <div className="text-sm text-gray-500">
//                                         <p>Vence: {formatDate(product.fecha_vencimiento)}</p>
//                                         <p className="truncate">Proveedor: {product.proveedor}</p>
//                                     </div>
//                                 </div>

//                                 <div className="mt-4 space-y-2">
//                                     <Link
//                                         to={`/editar-producto/${product.id}`}
//                                         className="block w-full text-center bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors"
//                                     >
//                                         Editar Producto
//                                     </Link>

//                                     <Link
//                                         to={`/producto/${product.id}`}
//                                         className="block w-full text-center bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
//                                     >
//                                         Ver Detalles
//                                     </Link>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <UploadImage />
//         </div>
//     );
// };

// export default ProductList;


/* NUevo con filtro */
// ProductList.jsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { Link } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('es-AR');
    };

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error("Error loading products:", error);
            }
        };
        loadProducts();
    }, []);

    // Extraer categorías y tipos únicos
    const categories = [...new Set(products.map(p => p.categoria).filter(Boolean))];
    const types = [...new Set(products.map(p => p.tipo_de_producto).filter(Boolean))];

    const handleFilterChange = (filters) => {
        let filtered = [...products];

        if (filters.searchText) {
            const searchLower = filters.searchText.toLowerCase();
            filtered = filtered.filter(product =>
                product.nombre?.toLowerCase().includes(searchLower)
            );
        }

        if (filters.category) {
            filtered = filtered.filter(product =>
                product.categoria === filters.category
            );
        }

        if (filters.type) {
            filtered = filtered.filter(product =>
                product.tipo_de_producto === filters.type
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="px-4 pb-16">
            <div className="flex gap-4 flex-col items-center justify-center p-4 text-center">
                <h2 className="font-extrabold text-6xl">Listado y Gestión de Productos</h2>
                <p className="text-1xl font-semibold text-gray-500 max-w-3xl">
                    Visualiza y administra la información de los productos disponibles en el kiosco.
                </p>
            </div>

            <SearchFilter
                onFilterChange={handleFilterChange}
                categories={categories}
                types={types}
            />

            <div className="mx-auto p-4">
                <ul className="grid gap-4 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 1xl:grid-cols-5">
                    {filteredProducts.map((product) => (
                        <li key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="relative">
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                    <span className="text-white text-sm font-medium">
                                        {product.categoria}
                                    </span>
                                </div>
                                <img
                                    src={product.imagen_url || "https://via.placeholder.com/150"}
                                    alt={product.nombre}
                                    className="w-full h-48 object-cover"
                                />
                                {/* <span className="absolute top-0 left-0 bg-violet-800 bg-opacity-50 rounded-full m-2 py-1 px-3 font-medium text-white">
                                    {product.categoria}
                                </span> */}

                            </div>

                            <div className="p-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold truncate">{product.nombre}</h3>
                                    <p className="font-medium text-gray-500">{product.tipo_de_producto}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xl font-bold">${product.precio_unitario}</p>
                                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                                            Stock: {product.stock_disponible}
                                        </span>
                                    </div>

                                    {product.oferta_mayorista && product.oferta_mayorista !== '-' && (
                                        <p className="text-sm text-indigo-600 font-medium">
                                            Oferta: {product.oferta_mayorista}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-4 space-y-2">
                                    <Link
                                        to={`/editar-producto/${product.id}`}
                                        className="block w-full text-center bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors"
                                    >
                                        Editar Producto
                                    </Link>

                                    <Link
                                        to={`/producto/${product.id}`}
                                        className="block w-full text-center bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        Ver Detalles
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
