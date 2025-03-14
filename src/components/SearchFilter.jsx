import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchFilter = ({ onFilterChange, categories, types }) => {
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [showCategories, setShowCategories] = useState(false);
    const [showTypes, setShowTypes] = useState(false);

    // Asegurarse de que categories y types sean arrays
    const safeCategories = Array.isArray(categories) ? categories : [];
    const safeTypes = Array.isArray(types) ? types : [];

    const handleChange = () => {
        const filters = {
            searchText,
            category: selectedCategory,
            type: selectedType
        };
        onFilterChange(filters);
    };

    useEffect(() => {
        handleChange();
    }, [searchText, selectedCategory, selectedType]);

    return (
        <div className="mb-6 space-y-4 max-w-4xl mx-auto">
            {/* Barra de búsqueda */}
            <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Buscar productos..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
            </div>

            {/* Filtros */}
            <div className="flex gap-4 flex-wrap">
                {/* Categorías */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowCategories(!showCategories);
                            setShowTypes(false);
                        }}
                        className={`px-4 py-2 rounded-lg border ${selectedCategory ? 'bg-violet-50 border-violet-200 text-violet-700' : 'bg-white border-gray-200'} hover:bg-gray-50 transition-colors`}
                    >
                        {selectedCategory || 'Categorías'}
                    </button>
                    {showCategories && (
                        <ul className="absolute z-10 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
                            <li
                                onClick={() => {
                                    setSelectedCategory('');
                                    setShowCategories(false);
                                }}
                                className="px-4 py-2 hover:bg-violet-50 cursor-pointer text-gray-600 hover:text-violet-700"
                            >
                                Todas las categorías
                            </li>
                            {safeCategories.map(category => (
                                <li
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setShowCategories(false);
                                    }}
                                    className="px-4 py-2 hover:bg-violet-50 cursor-pointer text-gray-600 hover:text-violet-700"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Tipos */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowTypes(!showTypes);
                            setShowCategories(false);
                        }}
                        className={`px-4 py-2 rounded-lg border ${selectedType ? 'bg-violet-50 border-violet-200 text-violet-700' : 'bg-white border-gray-200'} hover:bg-gray-50 transition-colors`}
                    >
                        {selectedType || 'Tipos'}
                    </button>
                    {showTypes && (
                        <ul className="absolute z-10 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
                            <li
                                onClick={() => {
                                    setSelectedType('');
                                    setShowTypes(false);
                                }}
                                className="px-4 py-2 hover:bg-violet-50 cursor-pointer text-gray-600 hover:text-violet-700"
                            >
                                Todos los tipos
                            </li>
                            {safeTypes.map(type => (
                                <li
                                    key={type}
                                    onClick={() => {
                                        setSelectedType(type);
                                        setShowTypes(false);
                                    }}
                                    className="px-4 py-2 hover:bg-violet-50 cursor-pointer text-gray-600 hover:text-violet-700"
                                >
                                    {type}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
