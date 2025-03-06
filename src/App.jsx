import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./views/ProductList.jsx";
import EditProduct from "./views/EditProduct.jsx"; // Asegúrate de importar EditProduct
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import CreateProduct from "./views/CreateProduct.jsx";

function App() {
  return (
    <Router>
   {/*    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/crear-producto" element={<CreateProduct />} />
        <Route path="/editar-producto/:id" element={<EditProduct />} />
      </Routes> */}
      <div className="min-h-screen text-black bg-gray-100"> {/* Contenedor general con clases de Tailwind */}
        <Navbar />
        <div className="container mx-auto p-4"> {/* Contenedor para el contenido */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductList />} />
            <Route path="/crear-producto" element={<CreateProduct />} />
            <Route path="/editar-producto/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
