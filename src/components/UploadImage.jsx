import React, { useState } from 'react';

const UploadImage = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log('--------------------------', data);
    if (data.success) {
      onUpload(data.imageUrl);
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
