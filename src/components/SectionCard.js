import React from 'react';

const SectionCard = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
        {buttonText}
      </button>
    </div>
  );
};

export default SectionCard;
