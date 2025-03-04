// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './views/Home';
// import ProductList from './views/ProductList';
// import CreateProduct from './views/CreateProduct';
// import EditProduct from './views/EditProduct';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/productos" element={<ProductList />} />
//         <Route path="/crear-producto" element={<CreateProduct />} />
//         <Route path="/editar-producto/:id" element={<EditProduct />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/crear-producto" element={<CreateProduct />} />
        <Route path="/editar-producto/:id" element={<EditProduct />} /> {/* Ruta de edición */}
      </Routes>
    </Router>
  );
}

export default App;
