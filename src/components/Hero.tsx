import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/7586627/7586627-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>
        

  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
      </div>
      

      <div className="relative z-10 text-center px-4">
        <center>
        <img
          src='https://i.ibb.co/VVjnRYq/SD-MUSIC-RECORDS-FRONT-1.png' width={600} />
          </center>
        <p className="text-xl md:text-2xl mb-8 mt-5 max-w-2xl mx-auto">
        Elevating Sri Lankan Music to Global Heights: Crafting the Future of Sound and Careers
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