import React from 'react';
import { Play } from 'lucide-react';

const Releases = () => {
  const releases = [
    {
      title: "Neon Dreams",
      artist: "Luna Eclipse",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
    },
    {
      title: "Midnight Hour",
      artist: "Midnight Pulse",
      cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80"
    },
    {
      title: "Mountain Song",
      artist: "Echo Valley",
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80"
    },
    {
      title: "Electric Soul",
      artist: "Luna Eclipse",
      cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="releases" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map((release, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-purple-500 p-4 rounded-full">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{release.title}</h3>
                <p className="text-purple-400">{release.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Releases;