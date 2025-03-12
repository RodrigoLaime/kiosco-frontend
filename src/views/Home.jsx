import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ShoppingBagIcon, 
  PlusCircleIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  // Datos de ejemplo (en un caso real vendrían de una API o estado)
  const stats = [
    {
      title: "Ventas Totales",
      value: "$15,240",
      change: "+12.5%",
      icon: CurrencyDollarIcon,
      trend: "up"
    },
    {
      title: "Productos Activos",
      value: "45",
      change: "+3",
      icon: ShoppingBagIcon,
      trend: "up"
    },
    {
      title: "Productos Bajos Stock",
      value: "8",
      change: "-2",
      icon: ChartBarIcon,
      trend: "down"
    }
  ];

  const quickActions = [
    {
      title: "Agregar Producto",
      description: "Crear un nuevo producto en el inventario",
      icon: PlusCircleIcon,
      path: "/crear-producto",
      color: "bg-violet-500"
    },
    {
      title: "Ver Inventario",
      description: "Gestionar productos existentes",
      icon: ClipboardDocumentListIcon,
      path: "/productos",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          ¡Bienvenido al Panel de Control!
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Gestiona tu kiosco de manera eficiente
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${
                stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <ArrowTrendingUpIcon className={`w-4 h-4 mr-1 ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`} />
              <span className={`text-sm ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs mes anterior</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Acciones Rápidas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className="group block bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-start">
              <div className={`${action.color} p-3 rounded-lg`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                  {action.title}
                </h3>
                <p className="mt-1 text-gray-600">
                  {action.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity or Additional Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Actividad Reciente
        </h2>
        <div className="space-y-4">
          {/* Aquí podrías mapear actividades recientes */}
          <p className="text-gray-600">
            No hay actividad reciente para mostrar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
