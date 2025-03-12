// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { HomeIcon, ClipboardDocumentListIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
// import { HomeIcon as HomeIconSolid, 
//          ClipboardDocumentListIcon as ClipboardDocumentListIconSolid, 
//          PlusCircleIcon as PlusCircleIconSolid } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const location = useLocation();

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const navItems = [
//     {
//       title: 'Inicio',
//       path: '/',
//       icon: HomeIcon,
//       activeIcon: HomeIconSolid
//     },
//     {
//       title: 'Productos',
//       path: '/productos',
//       icon: ClipboardDocumentListIcon,
//       activeIcon: ClipboardDocumentListIconSolid
//     },
//     {
//       title: 'Crear',
//       path: '/crear-producto',
//       icon: PlusCircleIcon,
//       activeIcon: PlusCircleIconSolid
//     }
//   ];

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <nav className='hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50 flex-col'>
//         <div className='p-6'>
//           <Link to="/" className='flex items-center space-x-3 mb-8'>
//             <HomeIcon className="h-8 w-8 text-violet-600" />
//             <h1 className='text-xl font-bold text-gray-800'>Kiosco App</h1>
//           </Link>
          
//           <ul className='space-y-2'>
//             {navItems.map((item) => {
//               const Icon = isActive(item.path) ? item.activeIcon : item.icon;
//               return (
//                 <li key={item.path}>
//                   <Link
//                     to={item.path}
//                     className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
//                       ${isActive(item.path)
//                         ? 'text-violet-600 bg-violet-50 font-semibold'
//                         : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50/50'
//                       }`}
//                   >
//                     <Icon className="h-6 w-6" />
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Footer del sidebar */}
//         <div className='mt-auto p-6 border-t border-gray-100'>
//           <div className='flex items-center space-x-3'>
//             <div className='h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center'>
//               <span className='text-violet-600 font-medium'>K</span>
//             </div>
//             <div>
//               <p className='text-sm font-medium text-gray-700'>Kiosco App</p>
//               <p className='text-xs text-gray-500'>v1.0.0</p>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Bottom Navigation */}
//       <nav className='md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50'>
//         <div className='flex justify-around items-center px-6 py-3'>
//           {navItems.map((item) => {
//             const Icon = isActive(item.path) ? item.activeIcon : item.icon;
//             return (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex flex-col items-center space-y-1
//                   ${isActive(item.path)
//                     ? 'text-violet-600'
//                     : 'text-gray-500 hover:text-violet-600'
//                   }`}
//               >
//                 <Icon className="h-6 w-6" />
//                 <span className='text-xs font-medium'>{item.title}</span>
//               </Link>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Spacers */}
//       <div className='hidden md:block w-64'></div> {/* Espacio para el sidebar en desktop */}
//       <div className='h-20 md:h-0'></div> {/* Espacio para el navbar inferior en mobile */}
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ClipboardDocumentListIcon, PlusCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, 
         ClipboardDocumentListIcon as ClipboardDocumentListIconSolid, 
         PlusCircleIcon as PlusCircleIconSolid } from '@heroicons/react/24/solid';

const Navbar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      title: 'Inicio',
      path: '/',
      icon: HomeIcon,
      activeIcon: HomeIconSolid
    },
    {
      title: 'Productos',
      path: '/productos',
      icon: ClipboardDocumentListIcon,
      activeIcon: ClipboardDocumentListIconSolid
    },
    {
      title: 'Crear',
      path: '/crear-producto',
      icon: PlusCircleIcon,
      activeIcon: PlusCircleIconSolid
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav 
        className={`hidden md:flex fixed left-0 top-0 h-screen bg-white shadow-lg z-50 flex-col
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'w-64' : 'w-20'}`}
      >
        <div className='relative flex flex-col h-full'>
          {/* Header */}
          <div className='p-6 border-b border-gray-100'>
            <div className='flex items-center mb-2'>
              <Link to="/" className='flex items-center'>
                <HomeIcon className="h-8 w-8 text-violet-600 shrink-0" />
                {isExpanded && (
                  <span className='ml-3 text-xl font-bold text-gray-800'>Kiosco</span>
                )}
              </Link>
            </div>
          </div>

          {/* Botón para expandir/contraer */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -right-4 top-6 bg-white rounded-full p-1.5 border border-gray-200 shadow-md hover:bg-gray-50"
          >
            {isExpanded ? (
              <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          {/* Navigation */}
          <div className='p-4'>
            <ul className='space-y-2'>
              {navItems.map((item) => {
                const Icon = isActive(item.path) ? item.activeIcon : item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center ${isExpanded ? 'px-4' : 'justify-center px-2'} 
                        py-3 rounded-lg transition-all group relative
                        ${isActive(item.path)
                          ? 'text-violet-600 bg-violet-50 font-semibold'
                          : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50/50'
                        }`}
                    >
                      <Icon className="h-6 w-6 shrink-0" />
                      {isExpanded && (
                        <span className="ml-3">{item.title}</span>
                      )}
                      {!isExpanded && (
                        <div className="absolute left-full rounded-md px-2 py-1 ml-2 bg-gray-900 text-white text-sm
                          invisible opacity-0 translate-x-3 transition-all group-hover:visible 
                          group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
                          {item.title}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Footer */}
          <div className='mt-auto p-4 border-t border-gray-100'>
            <div className={`flex items-center ${isExpanded ? 'space-x-3' : 'justify-center'}`}>
              <div className='h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0'>
                <span className='text-violet-600 font-medium'>K</span>
              </div>
              {isExpanded && (
                <div className="min-w-0">
                  <p className='text-sm font-medium text-gray-700 truncate'>Kiosco App</p>
                  <p className='text-xs text-gray-500'>v1.0.0</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className='md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50'>
        <div className='flex justify-around items-center px-6 py-3'>
          {navItems.map((item) => {
            const Icon = isActive(item.path) ? item.activeIcon : item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group relative"
              >
                <div className={`flex flex-col items-center space-y-1 transition-all
                  ${isActive(item.path)
                    ? 'text-violet-600'
                    : 'text-gray-500 hover:text-violet-600'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-all
                    ${isActive(item.path)
                      ? 'bg-violet-50'
                      : 'hover:bg-violet-50/50'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className='text-xs font-medium'>{item.title}</span>
                </div>
                
                {/* Tooltip para móvil */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1
                  bg-gray-900 text-white text-xs rounded-md whitespace-nowrap
                  invisible opacity-0 transform -translate-y-2 transition-all
                  group-active:visible group-active:opacity-100 group-active:translate-y-0">
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacers */}
      <div className={`hidden md:block transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`} />
      <div className='h-20 md:h-0' />
    </>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { HomeIcon, ClipboardDocumentListIcon, PlusCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// import { HomeIcon as HomeIconSolid, 
//          ClipboardDocumentListIcon as ClipboardDocumentListIconSolid, 
//          PlusCircleIcon as PlusCircleIconSolid } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const location = useLocation();
//   const [isExpanded, setIsExpanded] = useState(true);

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const navItems = [
//     {
//       title: 'Inicio',
//       path: '/',
//       icon: HomeIcon,
//       activeIcon: HomeIconSolid
//     },
//     {
//       title: 'Productos',
//       path: '/productos',
//       icon: ClipboardDocumentListIcon,
//       activeIcon: ClipboardDocumentListIconSolid
//     },
//     {
//       title: 'Crear',
//       path: '/crear-producto',
//       icon: PlusCircleIcon,
//       activeIcon: PlusCircleIconSolid
//     }
//   ];

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <nav 
//         className={`hidden md:flex fixed left-0 top-0 h-screen bg-white shadow-lg z-50 flex-col
//           transition-all duration-300 ease-in-out
//           ${isExpanded ? 'w-64' : 'w-20'}`}
//       >
//         <div className='p-6'>
//           <Link to="/" className='flex items-center space-x-3 mb-8'>
//             <HomeIcon className="h-8 w-8 text-violet-600" />
//             {isExpanded && (
//               <h1 className='text-xl font-bold text-gray-800'>Kiosco App</h1>
//             )}
//           </Link>
          
//           <ul className='space-y-2'>
//             {navItems.map((item) => {
//               const Icon = isActive(item.path) ? item.activeIcon : item.icon;
//               return (
//                 <li key={item.path}>
//                   <Link
//                     to={item.path}
//                     className={`flex items-center ${isExpanded ? 'space-x-3' : 'justify-center'} 
//                       px-4 py-3 rounded-lg transition-all group relative
//                       ${isActive(item.path)
//                         ? 'text-violet-600 bg-violet-50 font-semibold'
//                         : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50/50'
//                       }`}
//                   >
//                     <Icon className="h-6 w-6" />
//                     {isExpanded ? (
//                       <span>{item.title}</span>
//                     ) : (
//                       <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-900 text-white text-sm
//                         invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
//                         {item.title}
//                       </div>
//                     )}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Footer del sidebar */}
//         <div className='mt-auto p-6 border-t border-gray-100'>
//           <div className={`flex items-center ${isExpanded ? 'space-x-3' : 'justify-center'}`}>
//             <div className='h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center'>
//               <span className='text-violet-600 font-medium'>K</span>
//             </div>
//             {isExpanded && (
//               <div>
//                 <p className='text-sm font-medium text-gray-700'>Kiosco App</p>
//                 <p className='text-xs text-gray-500'>v1.0.0</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Botón para expandir/contraer */}
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="absolute -right-4 top-8 bg-white rounded-full p-1.5 border border-gray-200 shadow-md"
//         >
//           {isExpanded ? (
//             <ChevronLeftIcon className="h-4 w-4 text-gray-600" />
//           ) : (
//             <ChevronRightIcon className="h-4 w-4 text-gray-600" />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Bottom Navigation */}
//       <nav className='md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50'>
//         <div className='flex justify-around items-center px-6 py-3'>
//           {navItems.map((item) => {
//             const Icon = isActive(item.path) ? item.activeIcon : item.icon;
//             return (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex flex-col items-center space-y-1
//                   ${isActive(item.path)
//                     ? 'text-violet-600'
//                     : 'text-gray-500 hover:text-violet-600'
//                   }`}
//               >
//                 <Icon className="h-6 w-6" />
//                 <span className='text-xs font-medium'>{item.title}</span>
//               </Link>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Spacers */}
//       <div className={`hidden md:block transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`} />
//       <div className='h-20 md:h-0' />
//     </>
//   );
// };

// export default Navbar;
