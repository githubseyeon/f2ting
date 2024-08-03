import axios from 'axios';
import { useState } from 'react';

const ImageUploader = () => {
  const [text, setText] = useState('');

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<TextDetectionResponse>('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setText(response.data.text);
    } catch (error) {
      console.error('Upload error:', error);
      setText('Failed to detect text.');
    }
  };

  return (
    <div>

      {/*<h2>Upload your image</h2>*/}
      <input type="file" onChange={handleUpload} />
      <div>
        <h3>내용</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageUploader;
