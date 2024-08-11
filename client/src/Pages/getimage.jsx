import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Components/Nav';


function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [buttonText, setButtonText] = useState('Upload Image');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setButtonText('Upload Image');
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await fetch('https://absence-notifier-api.onrender.com/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          toast.success('Image uploaded successfully!', {
            position: 'top-right',
          });
          setButtonText('Uploaded');
        } else {
          toast.error('Image upload failed', {
            position: 'top-right',
          });
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Image upload failed', {
          position: 'top-right',
        });
      }
    } else {
      toast.error('Please select an image first', {
        position: 'top-right',
      });
    }
  };

  return (
    <>
    <div className='mt-[20px]'><Nav/></div>
    <div className="min-h-screen bg-blue-100"> 
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-md rounded p-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select an Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
          <button
            onClick={handleImageUpload}
            className="bg-blue-500 text-black font-bold py-2 px-4 rounded mt-4"
          >
            {buttonText}
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
    </>
  );
}

export default ImageUploader;
