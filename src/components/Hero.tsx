import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
          alt="Studio"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
          SONIC REALM
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Shaping the future of music through innovation and artistic excellence
        </p>
        <Link 
          to="/artists" 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full inline-flex items-center justify-center transition-colors"
        >
          <Play className="w-5 h-5 mr-2" />
          Discover Our Artists
        </Link>
      </div>
    </section>
  );
};

export default Hero;