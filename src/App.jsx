// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductList from "./views/ProductList.jsx";
// import EditProduct from "./views/EditProduct.jsx"; // Asegúrate de importar EditProduct
// import Home from "./views/Home.jsx";
// import Navbar from "./components/Navbar.jsx";
// import CreateProduct from "./views/CreateProduct.jsx";
// import ProductDetail from "./views/ProductDetail.jsx";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen text-black bg-white">
//         <Navbar />
//         <div className="container mx-auto"> {/* Contenedor para el contenido */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/productos" element={<ProductList />} />
//             <Route path="/crear-producto" element={<CreateProduct />} />
//             <Route path="/editar-producto/:id" element={<EditProduct />} />
//             <Route path="/producto/:id" element={<ProductDetail />} />
//           </Routes>
//         </div>
//         <footer className="container mx-auto">hola</footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./views/ProductList.jsx";
import EditProduct from "./views/EditProduct.jsx";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import CreateProduct from "./views/CreateProduct.jsx";
import ProductDetail from "./views/ProductDetail.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen text-black bg-gray-50 flex">
        <Navbar />
        <div className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/crear-producto" element={<CreateProduct />} />
              <Route path="/editar-producto/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
