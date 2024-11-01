import React from 'react';

const Artists = () => {
  const artists = [
    {
      name: "Luna Eclipse",
      genre: "Electronic Pop",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
    },
    {
      name: "Midnight Pulse",
      genre: "Alternative Rock",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80"
    },
    {
      name: "Echo Valley",
      genre: "Indie Folk",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="artists" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                <p className="text-purple-400">{artist.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;