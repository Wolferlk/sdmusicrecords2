import React from 'react';
import { Link } from 'react-router-dom';
import { studiosData } from '../data/studios';  // Updated import to reflect studio data

const AllStudios = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Our Studios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studiosData.map((studio) => (
            <Link 
              to={`/AllStudios/${studio.id}`}  // Updated the URL to reference studios
              key={studio.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold mb-2">{studio.name}</h2>
                  <p className="text-red-400">{studio.location}</p> {/* Change genre to location or relevant data */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStudios;
