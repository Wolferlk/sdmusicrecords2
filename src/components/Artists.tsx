import React from 'react';
import { artistsData } from '../data/artists';

const Artists = () => {
  return (
    <section id="artists" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Artists</h2>

        {/* Scrollable Container */}
        <div
          className="flex space-x-8 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#6B46C1 #1A202C', // Custom scrollbar colors
          }}
        >
          {/* Custom Scrollbar Styling */}
          <style jsx>{`
            ::-webkit-scrollbar {
              height: 8px; /* Horizontal scrollbar height */
            }
            ::-webkit-scrollbar-track {
              background: #1a202c; /* Track color */
            }
            ::-webkit-scrollbar-thumb {
              background-color: #6b46c1; /* Scrollbar thumb color */
              border-radius: 4px; /* Rounded corners */
            }
            ::-webkit-scrollbar-thumb:hover {
              background-color: #805ad5; /* Hover effect */
            }
          `}</style>

          {/* Artist Items */}
          {artistsData.map((artist, index) => (
            <div
              key={index}
              className="group relative min-w-[256px]" // Match item width
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{artist.name}</h3>
                  <p className="text-purple-400">{artist.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
