import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import Nav from '../Components/Nav';


function ImageToTextConverter() {
  const [imageText, setImageText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const convertImageToText = async () => {
    if (selectedImage) {
      try {
        const { data: { text } } = await Tesseract.recognize(selectedImage);

        setImageText(text);
      } catch (error) {
        console.error('Error converting image to text:', error);
        setImageText('Error converting image to text');
      }
    } else {
      setImageText('Please select an image first');
    }
  };
  return (
    <>
        <div className='mt-[20px]'><Nav/></div>

    <div className="bg-blue">
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="bg-blue-100 shadow-md rounded p-4 w-1/2">
          <label className="block text-gray-700 text-lg font-semibold mb-4">
            Image to Text Converter
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-4"
          />
          <button
            onClick={convertImageToText}
            className="bg-blue-500 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Convert Image to Text
          </button>
          <div className="mt-6">
            {imageText && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Converted Text:</h2>
                <p className="text-gray-800">{imageText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ImageToTextConverter;
