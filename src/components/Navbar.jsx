import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Listar Productos</Link></li>
        <li><Link to="/crear-producto">Crear Producto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
