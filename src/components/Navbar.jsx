import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className=' container mx-auto flex justify-between items-center p-4'>
        <div>
          <h1 className='text-2xl font-bold text-center'>Kiosco App</h1>
        </div>
        <ul className='flex justify-center space-x-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Listar Productos</Link></li>
          <li><Link to="/crear-producto">Crear Producto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
