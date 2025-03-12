// import React, { useState } from 'react';

// const UploadImage = ({ onUpload }) => {
//   const [file, setFile] = useState(null);

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('image', file);

//     // const response = await fetch('http://localhost:5000/upload', {
//     const response = await fetch('http://localhost:5000/api/upload', {
//     // const response = await fetch('https://kiosco-backend.vercel.app/upload', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();
//     console.log('--------------------------', data);
//     if (data.success) {
//       onUpload(data.imageUrl);
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

const UploadImage = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        onUpload(data.imageUrl);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };


  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Subir Imagen</button>
    </div>
  );
};

export default UploadImage;
