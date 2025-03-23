// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import UploadImage from "../components/UploadImage";

// const CreateProduct = () => {
//     const navigate = useNavigate();

//     const [newProduct, setNewProduct] = useState({
//         nombre: "",
//         categoria: "",
//         descripcion: "",
//         tipo_de_producto: "",
//         precio_unitario: "",
//         stock_disponible: "",
//         fecha_vencimiento: "",
//         oferta_mayorista: "",
//         proveedor: "",
//         imagen_url: "https://via.placeholder.com/150" // URL por defecto
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewProduct(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validación de campos requeridos
//         const requiredFields = ['nombre', 'categoria', 'precio_unitario', 'stock_disponible'];
//         const missingFields = requiredFields.filter(field => !newProduct[field]);

//         if (missingFields.length > 0) {
//             alert(`Por favor complete los siguientes campos: ${missingFields.join(', ')}`);
//             return;
//         }

//         try {
//             const apiUrl = import.meta.env.VITE_API_URL;
//             const response = await fetch(`${apiUrl}/productos`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newProduct),
//             });

//             if (response.ok) {
//                 alert("Producto creado exitosamente");
//                 navigate("/productos");
//             } else {
//                 const error = await response.json();
//                 alert(error.message || "Error al crear el producto");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Error al crear el producto");
//         }
//     };

//     return (
//         <div className="min-h-screen px-4 pb-40">
//             <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//                 <h2 className="text-3xl font-bold text-center mb-8">Crear Nuevo Producto</h2>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {/* Información básica */}
//                         <div className="space-y-6">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Nombre del Producto *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="nombre"
//                                     value={newProduct.nombre}
//                                     onChange={handleChange}
//                                     className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Categoría *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="categoria"
//                                     value={newProduct.categoria}
//                                     onChange={handleChange}
//                                     className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Descripción
//                                 </label>
//                                 <textarea
//                                     name="descripcion"
//                                     value={newProduct.descripcion}
//                                     onChange={handleChange}
//                                     rows="3"
//                                     className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                                 />
//                             </div>
//                         </div>

//                         {/* Detalles del producto */}
//                         <div className="space-y-6">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Tipo de Producto
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="tipo_de_producto"
//                                     value={newProduct.tipo_de_producto}
//                                     onChange={handleChange}
//                                     className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Precio Unitario *
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="precio_unitario"
//                                     value={newProduct.precio_unitario}
//                                     onChange={handleChange}
//                                     className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Stock Disponible *
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="stock_disponible"
//                                     value={newProduct.stock_disponible}
//                                     onChange={handleChange}
//                                     className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Información adicional */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Fecha de Vencimiento
//                             </label>
//                             <input
//                                 type="date"
//                                 name="fecha_vencimiento"
//                                 value={newProduct.fecha_vencimiento}
//                                 onChange={handleChange}
//                                 className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Oferta Mayorista
//                             </label>
//                             <input
//                                 type="text"
//                                 name="oferta_mayorista"
//                                 value={newProduct.oferta_mayorista}
//                                 onChange={handleChange}
//                                 placeholder="Ej: 2 x $500"
//                                 className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Proveedor
//                             </label>
//                             <input
//                                 type="text"
//                                 name="proveedor"
//                                 value={newProduct.proveedor}
//                                 onChange={handleChange}
//                                 className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
//                             />
//                         </div>
//                     </div>

//                     {/* Botones de acción */}
//                     <div className="flex justify-end space-x-4 pt-6">
//                         <button
//                             type="button"
//                             onClick={() => navigate('/productos')}
//                             className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
//                         >
//                             Cancelar
//                         </button>
//                         <button
//                             type="submit"
//                             className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
//                         >
//                             Crear Producto
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             <div>
//                 <UploadImage
//                     // onUpload={handleImageUpload}
//                     initialImageUrl="https://res.cloudinary.com/dnfshq0n6/image/upload/v1742496642/kiosco_productos/hra8vf81jwf0kdhexxk0.png"
//                     initialPublicId="kiosco_productos/hra8vf81jwf0kdhexxk0"
//                 />
//                 {/* <UploadImage /> */}
//             </div>
//         </div>
//     );
// };

// export default CreateProduct;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "../components/UploadImage";

const CreateProduct = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        imagen_url: "../../public/galery.webp",
        public_id: ""
    });

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

    // Añadir esta función para manejar la selección de categoría
    const handleCategorySelect = (categoria) => {
        setNewProduct(prevState => ({
            ...prevState,
            categoria: categoria
        }));
        setIsDropdownOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (imageData) => {
        setNewProduct(prevState => ({
            ...prevState,
            imagen_url: imageData.imageUrl,
            public_id: imageData.public_id
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        <div className="min-h-screen px-4 pb-40">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Crear Nuevo Producto</h2>

                {/* Sección de carga de imagen */}
                <div className="mb-8">
                    <UploadImage
                        onUpload={handleImageUpload}
                        initialImageUrl={newProduct.imagen_url}
                    // initialPublicId={newProduct.public_id}
                    />
                </div>

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
                                <div className="relative">
                                    <div
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer flex justify-between items-center"
                                    >
                                        <span className={newProduct.categoria ? "text-gray-900" : "text-gray-500"}>
                                            {newProduct.categoria || "Seleccione una categoría"}
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
                                                    className={`px-3 py-2 cursor-pointer hover:bg-violet-50 ${newProduct.categoria === categoria
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
                            Crear
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default CreateProduct;
