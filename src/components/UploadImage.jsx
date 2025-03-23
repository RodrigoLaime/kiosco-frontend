// import React, { useState } from 'react';

// const UploadImage = ({ onUpload }) => {
//   const [file, setFile] = useState(null);

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('image', file);

//     try {
//       const response = await fetch('http://localhost:5000/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       // if (!response.ok) {
//       //   throw new Error(`HTTP error! status: ${response.status}`);
//       // }

//       const data = await response.json();
//       console.log('Response data:', data);

//       if (data.success) {
//         onUpload(data.imageUrl);
//       }
//     } catch (error) {
//       console.error('Upload failed:', error);
//     }
//   };


//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleUpload}>Subir Imagen</button>
//     </div>
//   );
// };

// export default UploadImage;

import React, { useState } from 'react';

const UploadImage = ({ onUpload, initialImageUrl, initialPublicId }) => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialImageUrl || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Por favor seleccione una imagen');
      return;
    }

    setIsLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('image', file);

    try {
      // Determinar si es una actualización o una nueva carga
      const method = initialPublicId ? 'PUT' : 'POST';
      const apiUrl = import.meta.env.VITE_API_URL;
      const url = initialPublicId
        ? `${apiUrl}/upload/${initialPublicId}`
        : `${apiUrl}/upload`;

      // test local
      // const url = initialPublicId 
      //   ? `http://localhost:5000/api/upload/${initialPublicId}`
      //   : 'http://localhost:5000/api/upload';

      const response = await fetch(url, {
        method,
        body: formData,
      });
      console.log('Response', response);

      const data = await response.json();
      console.log('data:', data);

      if (data.imageUrl) {
        setImagePreview(data.imageUrl);
        onUpload({
          imageUrl: data.imageUrl,
          public_id: data.public_id
        });
        setFile(null);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Error al subir la imagen');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Preview de la imagen */}
      {imagePreview && (
        <div className="flex justify-center">
          <img
            src={imagePreview}
            alt="Preview"
            className="max-w-[200px] rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="flex flex-col space-y-2">
        {/* Input de archivo */}
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          disabled={isLoading}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
            disabled:opacity-50"
        />

        {/* Botón de carga */}
        <button
          onClick={handleUpload}
          disabled={!file || isLoading}
          className={`
            px-4 py-2 rounded-lg font-semibold text-sm
            ${!file || isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-violet-600 hover:bg-violet-700 text-white'}
            transition-colors duration-200
          `}
        >
          {isLoading
            ? 'Subiendo...'
            : initialPublicId
              ? 'Actualizar Imagen'
              : 'Subir Imagen'}
        </button>
      </div>

      {/* Mensaje de error */}
      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default UploadImage;
