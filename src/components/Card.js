import React from 'react';

const Card = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
