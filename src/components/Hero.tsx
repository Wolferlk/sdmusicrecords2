import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/463897057_910267737815971_9038813593128774045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEL3P2okwqVXqBctBBRKFPp3DW1jBxxaWbcNbWMHHFpZlLpZ7FoxV7cX-pG8EqrJCAWMKeGWW3yRyUgoStq4gBu&_nc_ohc=xYcyp3TUe3wQ7kNvgFksCbc&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Ay2w_XYYSWcse6ynWIsreUm&oh=00_AYB_78fELbzbrwGmnqS2e-JA0EXsYfwU-Gxcoql_rpPqww&oe=673C7B1C"
          alt="Studio"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
      </div>
      

      <div className="relative z-10 text-center px-4">
        <center>
        <img
          src='src\img\SD MUSIC RECORDS FRONT 1.png' width={600} />
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