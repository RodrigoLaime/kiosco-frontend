import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${apiUrl}/productos/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error al cargar el producto:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <p className="text-xl text-gray-600">Producto no encontrado</p>
                <button
                    onClick={() => navigate('/productos')}
                    className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
                >
                    Volver a la lista
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-16 px-4 max-w-7xl mx-auto">
            {/* Botón Volver */}
            <button
                onClick={() => navigate('/productos')}
                className="mb-6 flex items-center gap-2 text-violet-600 hover:text-violet-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Volver a la lista
            </button>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                    {/* Imagen del producto */}
                    <div className="md:flex-shrink-0 md:w-1/2">
                        <img
                            className="h-96 w-full object-cover md:h-full"
                            src={product.imagen_url || "https://via.placeholder.com/400"}
                            alt={product.nombre}
                        />
                    </div>

                    {/* Información del producto */}
                    <div className="p-8 md:w-1/2">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="inline-block px-3 py-1 text-sm font-semibold bg-violet-100 text-violet-800 rounded-full">
                                    {product.categoria}
                                </span>
                                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                                    {product.nombre}
                                </h1>
                            </div>
                            <span className="text-2xl font-bold text-violet-600">
                                ${product.precio_unitario}
                            </span>
                        </div>

                        <div className="mt-6 space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Descripción</h3>
                                <p className="mt-2 text-gray-900">{product.descripcion || 'Sin descripción'}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Tipo de Producto</h3>
                                    <p className="mt-1 text-gray-900">{product.tipo_de_producto}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Stock Disponible</h3>
                                    <p className="mt-1 text-gray-900">{product.stock_disponible} unidades</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Proveedor</h3>
                                    <p className="mt-1 text-gray-900">{product.proveedor}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Oferta Mayorista</h3>
                                    <p className="mt-1 text-gray-900">{product.oferta_mayorista || 'No disponible'}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Fecha de Creación</h3>
                                        <p className="mt-1 text-gray-900">{product.fecha_creacion}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Última Actualización</h3>
                                        <p className="mt-1 text-gray-900">{product.fecha_actualizacion || 'Sin actualizar'}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Fecha de Vencimiento</h3>
                                        <p className="mt-1 text-gray-900">{product.fecha_vencimiento}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={() => navigate(`/editar-producto/${product.id}`)}
                                className="flex-1 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                            >
                                Editar Producto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
