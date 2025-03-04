const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    if (!response.ok) throw new Error("Error al obtener productos");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
