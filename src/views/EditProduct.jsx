// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditProduct = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [product, setProduct] = useState(null);
//     const [editedProduct, setEditedProduct] = useState({});

//     useEffect(() => {
//         if (!product) {
//             fetchProductById(id);
//         }
//     }, [id, product]);

//     const fetchProductById = async (id) => {
//         const apiUrl = import.meta.env.VITE_API_URL;
//         try {
//             const response = await fetch(`${apiUrl}/productos/${id}`);
//             const data = await response.json();
//             setProduct(data);
//             setEditedProduct({ ...data });
//         } catch (error) {
//             console.error("Error al obtener el producto:", error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedProduct(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Preparar el objeto a enviar
//         const productToUpdate = {
//             ...editedProduct,
//             imagen_url: 'https://via.placeholder.com/150' // URL hardcodeada por ahora
//         };

//         const apiUrl = import.meta.env.VITE_API_URL;
//         try {
//             const response = await fetch(`${apiUrl}/productos/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(productToUpdate),
//             });

//             if (response.ok) {
//                 alert('Producto actualizado exitosamente');
//                 navigate('/productos');
//             } else {
//                 alert('Error al actualizar el producto');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Error al actualizar el producto');
//         }
//     };

//     if (!product) return (
//         <div className="flex justify-center items-center min-h-screen">
//             <p className="text-xl text-gray-600">Cargando...</p>
//         </div>
//     );

//     return (
//         <div className="max-w-7xl mx-auto p-4 pb-16 sm:px-6 lg:px-8">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//                     Editar Producto
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {/* Información básica */}
//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Nombre del Producto
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="nombre"
//                                     value={editedProduct.nombre || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Categoría
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="categoria"
//                                     value={editedProduct.categoria || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Descripción
//                                 </label>
//                                 <textarea
//                                     name="descripcion"
//                                     value={editedProduct.descripcion || ''}
//                                     onChange={handleChange}
//                                     rows="3"
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 />
//                             </div>
//                         </div>

//                         {/* Detalles del producto */}
//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Tipo de Producto
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="tipo_de_producto"
//                                     value={editedProduct.tipo_de_producto || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Precio Unitario
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="precio_unitario"
//                                     value={editedProduct.precio_unitario || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Stock Disponible
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="stock_disponible"
//                                     value={editedProduct.stock_disponible || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Fechas y otros detalles */}
//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Fecha de Vencimiento
//                                 </label>
//                                 <input
//                                     type="date"
//                                     name="fecha_vencimiento"
//                                     value={editedProduct.fecha_vencimiento || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Oferta Mayorista
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="oferta_mayorista"
//                                     value={editedProduct.oferta_mayorista || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     placeholder="Ej: 2 x $500"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">
//                                     Proveedor
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="proveedor"
//                                     value={editedProduct.proveedor || ''}
//                                     onChange={handleChange}
//                                     className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex justify-center gap-4 pt-6">
//                         <button
//                             type="button"
//                             onClick={() => navigate('/productos')}
//                             className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Cancelar
//                         </button>
//                         <button
//                             type="submit"
//                             disabled={JSON.stringify(product) === JSON.stringify(editedProduct)}
//                             className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                         >
//                             Guardar Cambios
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditProduct;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UploadImage from "../components/UploadImage";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categorias = [
        "Alimentos",
        "Bebidas",
        "Dulces y Golosinas",
        "Limpieza y Hogar",
        "Tabaco y Cigarros",
        "Higiené",
        "Lácteos",
        "Panadería",
        "Café y Té",
        "Condimentos y Salsas"
    ];

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

    const handleCategorySelect = (categoria) => {
        setEditedProduct(prevState => ({
            ...prevState,
            categoria: categoria
        }));
        setIsDropdownOpen(false);
    };

    const handleImageUpload = (imageData) => {
        setEditedProduct(prevState => ({
            ...prevState,
            imagen_url: imageData.imageUrl,
            public_id: imageData.public_id
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productToUpdate = {
            ...editedProduct
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
        <div className="max-w-7xl mx-auto p-4 pb-16 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Editar Producto
                </h2>

                {/* Componente de carga de imagen */}
                <div className="mb-8">
                    <UploadImage
                        onUpload={handleImageUpload}
                        initialImageUrl={editedProduct.imagen_url}
                        initialPublicId={editedProduct.public_id}
                    />
                </div>

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
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                                    required
                                />
                            </div>

                            {/* Selector de categoría personalizado */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Categoría
                                </label>
                                <div className="relative">
                                    <div
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer flex justify-between items-center"
                                    >
                                        <span className={editedProduct.categoria ? "text-gray-900" : "text-gray-500"}>
                                            {editedProduct.categoria || "Seleccione una categoría"}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "transform rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>

                                    {isDropdownOpen && (
                                        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                                            {categorias.map((categoria, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleCategorySelect(categoria)}
                                                    className={`px-3 py-2 cursor-pointer hover:bg-violet-50 ${editedProduct.categoria === categoria
                                                        ? "bg-violet-100 text-violet-700"
                                                        : "text-gray-700"
                                                        } ${index !== categorias.length - 1 ? "border-b border-gray-100" : ""}`}
                                                >
                                                    {categoria}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
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
                                    className="bg-white p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
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
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={JSON.stringify(product) === JSON.stringify(editedProduct)}
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
